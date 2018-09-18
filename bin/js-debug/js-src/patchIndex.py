import os
import sys
import fileinput

# Read in the file
with open('../index.html', 'r') as file :
  filedata = file.read()

# Replace the target string
filedata = filedata.replace('goog.addDependency(\'../../../flash/events/EventDispatcher.js\', [\'flash.events.EventDispatcher\'], [\'org.xfltools.core.FlashJSObject\', \'flash.events.IEventDispatcher\']);', 'goog.addDependency(\'../../../flash/events/EventDispatcher.js\', [\'flash.events.EventDispatcher\'], [\'org.xfltools.core.FlashJSObject\', \'flash.events.IEventDispatcher\', \'org.apache.royale.utils.Language\']);')

# Write the file out again
with open('../index.html', 'w') as file:
  file.write(filedata)