# Dependency Assistant for Apache Royale
# At the time of writing, some people have been having issues with the Royale compiler stripping out required dependencies
# from the compiled HTML/JS.
# Please note that we're currently only interested in the debug build output. For release builds, a number of other issues like
# use of public vars needs to be taken into account.
# 
# Usage:
# This script expects to have the index.html file in the folder above it, the idea being that it sits in a resources
# folder in your project and you direct the build process to copy over this resources folder to the bin dir.
# You need a file called dependency_data.json in the same folder as this script, in the following format:
#
# [					# NB: JSON Array
#	{
#		"class": "flash.display.Sprite",		# The class you require dependencies for
#		"dependencies": ["flash.display.Graphics", "flash.events.EventDispatcher"]		# List of dependencies
#	},
#	{
#		"class": "flash.display.MovieClip",
#		"dependencies": ["flash.display.Sprite"]
#	}
#]
#
# The script will leave all dependencies added by Royale, and also add in any from your json data that aren't there.
# You can use this to quickly tune and re-tune your required dependencies during dev, while we're getting to the 
# bottom of issues with dependencies in Royale.

import os
import sys
import fileinput
import re
import string
import json

# Read in the generated index.html
with open('../index.html', 'r') as file:
	filedata = file.read()

# Read in our custom dependency data
with open('dependency_data.json') as file:
	jsonData = file.read()

dependencyData = json.loads(jsonData)

addDependencyPattern = re.compile("goog\.addDependency\('[\./a-zA-Z0-9_-]+',\ \['[\./a-zA-Z0-9_-]+'\],\ \[('([\./a-zA-Z0-9_-]+)'[,\ ]*)*\]\);")
dependencyElementPattern = re.compile("\[[a-zA-Z.\ ,\']*\]");

for match in addDependencyPattern.finditer(filedata):
	fullStatement = match.group(0)
	elements = dependencyElementPattern.findall(fullStatement)
	
	if (len(elements) > 1):
		subjectClass = elements[0].strip("['']")

		for dependencyNode in dependencyData:
			if dependencyNode["class"] == subjectClass:
				dependencyList = elements[1].strip("[]").split(", ")

				for dependency in dependencyNode["dependencies"]:
					if dependencyList.count("'" + dependency + "'") == 0:
						dependencyList.append("'" + dependency + "'")

				newDependecyString = "["

				# Different versions of Python seem to have issues between the join() and joinfields() functions
				# TODO: requires a bit more investigation to clean up but for now we're joining manually
				for dependency in dependencyList:
					if (len(newDependecyString) > 1):
						newDependecyString += ", "						

					newDependecyString += dependency

				newDependecyString += "]"

				newFullStatement = fullStatement.replace(elements[1], newDependecyString)
				filedata = filedata.replace(fullStatement, newFullStatement)

				break


# Write the file out again
with open('../index.html', 'w') as file:
	file.write(filedata)