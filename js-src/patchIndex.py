import os
import sys
import fileinput

# Read in the file
with open('../index.html', 'r') as file :
  filedata = file.read()

# Replace the target string
filedata = filedata.replace('<link rel="stylesheet" type="text/css" href="XFLTools.css">', '<link rel="stylesheet" type="text/css" href="XFLTools.css"><script src="js-src/createJS/EaselJS-1.0.0/lib/easeljs.min.js"></script><script src="js-src/createJS/PreloadJS-1.0.0/lib/preloadjs.min.js"></script><script src="js-src/createJS/SoundJS-1.0.0/lib/soundjs.min.js"></script><script src="js-src/createJS/TweenJS-1.0.0/lib/tweenjs.min.js"></script><script src="js-src/flashjsbase.js"></script><script src="js-src/flashjs/crypto/generateRandomBytes.js"></script><script src="js-src/flashjs/display/Bitmap.js"></script><script src="js-src/flashjs/display/BitmapData.js"></script><script src="js-src/flashjs/display/DisplayObject.js"></script><script src="js-src/flashjs/display/DisplayObjectContainer.js"></script><script src="js-src/flashjs/display/Graphics.js"></script><script src="js-src/flashjs/display/Loader.js"></script><script src="js-src/flashjs/events/Event.js"></script><script src="js-src/flashjs/events/EventDispatcher.js"></script><script src="js-src/flashjs/filters/BlurFilter.js"></script><script src="js-src/flashjs/filters/ColorMatrixFilter.js"></script><script src="js-src/flashjs/geom/Matrix.js"></script><script src="js-src/flashjs/geom/Point.js"></script><script src="js-src/flashjs/geom/Rectangle.js"></script><script src="js-src/flashjs/net/URLLoader.js"></script><script src="js-src/flashjs/text/TextField.js"></script><script src="js-src/flashjs/utils/getTimer.js"></script>')

filedata = filedata.replace('<body>', '<body>\n<canvas id="createJSCanvas" width="400" height="600"></canvas>\n')

filedata = filedata.replace('goog.addDependency(\'../../../flash/events/EventDispatcher.js\', [\'flash.events.EventDispatcher\'], [\'org.xfltools.core.FlashJSObject\', \'flash.events.IEventDispatcher\']);', 'goog.addDependency(\'../../../flash/events/EventDispatcher.js\', [\'flash.events.EventDispatcher\'], [\'org.xfltools.core.FlashJSObject\', \'flash.events.IEventDispatcher\', \'org.apache.royale.utils.Language\']);')

filedata = filedata.replace('goog.addDependency(\'../../../flash/display/Sprite.js\', [\'flash.display.Sprite\'], [\'flash.display.DisplayObjectContainer\']);', 'goog.addDependency(\'../../../flash/display/Sprite.js\', [\'flash.display.Sprite\'], [\'flash.display.DisplayObjectContainer\', \'flash.display.Graphics\']);')

filedata = filedata.replace('goog.addDependency(\'../../../flash/display/Shape.js\', [\'flash.display.Shape\'], [\'flash.display.Sprite\']);', 'goog.addDependency(\'../../../flash/display/Shape.js\', [\'flash.display.Shape\'], [\'flash.display.Sprite\', \'org.apache.royale.utils.Language\']);')

filedata = filedata.replace('goog.addDependency(\'../../../com/greensock/TweenLite.js\', [\'com.greensock.TweenLite\'], [\'com.greensock.core.Animation\']);', 'goog.addDependency(\'../../../com/greensock/TweenLite.js\', [\'com.greensock.TweenLite\'], [\'com.greensock.core.Animation\', \'com.greensock.easing.Ease\', \'flash.utils.Dictionary\', \'org.apache.royale.utils.Language\', \'flash.display.Sprite\', \'flash.display.Shape\', \'flash.display.Graphics\']);')

filedata = filedata.replace('goog.addDependency(\'../../../com/greensock/core/Animation.js\', [\'com.greensock.core.Animation\'], [\'flash.display.Sprite\', \'flash.events.Event\']);', 'goog.addDependency(\'../../../com/greensock/core/Animation.js\', [\'com.greensock.core.Animation\'], [\'flash.display.Sprite\', \'flash.events.Event\', \'flash.utils.Dictionary\', \'org.apache.royale.utils.Language\', \'flash.display.Shape\', \'flash.display.Graphics\']);')

# Write the file out again
with open('../index.html', 'w') as file:
  file.write(filedata)