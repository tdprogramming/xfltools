import glob

print("<script src=\"js-src/createJS/EaselJS-1.0.0/lib/easeljs.min.js\"></script>")
print("<script src=\"js-src/createJS/PreloadJS-1.0.0/lib/preloadjs.min.js\"></script>")
print("<script src=\"js-src/createJS/SoundJS-1.0.0/lib/soundjs.min.js\"></script>")
print("<script src=\"js-src/createJS/TweenJS-1.0.0/lib/tweenjs.min.js\"></script>")
print("<script src=\"js-src/flashjsbase.js\"></script>")


files = glob.glob('flashjs/**/*.js', recursive=True)

for file in files:
	fileName = ""
	partsList = file.split("\\")

	for part in partsList:
		if fileName != "":
			fileName += "/"

		fileName = fileName + part

	print("<script src=\"js-src/" + fileName + "\"></script>")

print("Done.")