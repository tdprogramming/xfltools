package flash.display
{
	import org.xfltools.core.FlashJSObject;
	import flash.filters.BitmapFilter;
	import flash.geom.ColorTransform;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import flash.geom.Rectangle;
	import flash.utils.ByteArray;

	public class BitmapData extends FlashJSObject implements IBitmapDrawable
	{
		private static const VALUES_PER_PIXEL:int = 4;
	
		private var _canvas:Object;
		private var _context:Object;
		private var _transparent:Boolean;

		public function get height():int
		{
			if (_canvas)
			{
				return _canvas.height;
			}

			return 0;
		}

		public function get rect():Rectangle
		{
			return new Rectangle(0, 0, _canvas.width, _canvas.height);
		}

		public function get transparent():Boolean
		{
			return _transparent;
		}

		public function get width():int
		{
			if (_canvas)
			{
				return _canvas.width;
			}

			return 0;
		}

		public function initFromImageElement(imageElement:Object):void
		{
			_context.drawImage(imageElement, 0, 0);
        }

		public function get canvas():Object
		{
			return _canvas;
		}

		public function BitmapData(width:int, height:int, transparent:Boolean = true, fillColor:uint = 0xFFFFFFFF)
		{
			_canvas = document.createElement("canvas");			// "canvas" is type of element rather than element id
			_canvas.width = width;
			_canvas.height = height;
            _context = _canvas.getContext("2d");
            _transparent = transparent;
		}

		public function applyFilter(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter):void
		{
			// TODO
		}

		public function clone():BitmapData
		{
			var result:BitmapData = new BitmapData(width, height, _transparent, 0xFFFFFFFF);
			result.initFromImageElement(_canvas);
			return result;
		}

		public function colorTransform(rect:Rectangle, colorTransform:flash.geom.ColorTransform):void
		{
			// TODO
		}

		public function compare(otherBitmapData:BitmapData):Object
		{
			// TODO
			return null;
		}

		public function copyChannel(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, sourceChannel:uint, destChannel:uint):void
		{
			// TODO
		}
 	 	
		public function copyPixels(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:Boolean = false):void
		{
			// TODO
		}

		public function copyPixelsToByteArray(rect:Rectangle, data:ByteArray):void
		{
			// TODO
		}

		public function dispose():void
		{
			// TODO
		}

		public function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:flash.geom.ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Boolean = false):void
		{
			// TODO
		}

		public function drawWithQuality(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:flash.geom.ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Boolean = false, quality:String = null):void
		{
			// TODO
		}

		public function encode(rect:Rectangle, compressor:Object, byteArray:ByteArray = null):ByteArray
		{
			// TODO
			return null
		}

		public function fillRect(rect:Rectangle, color:uint):void
		{
			// TODO
		}

		public function floodFill(x:int, y:int, color:uint):void
		{
			// TODO
		}

		public function generateFilterRect(sourceRect:Rectangle, filter:BitmapFilter):Rectangle
		{
			// TODO
			return null;
		}

		public function getColorBoundsRect(mask:uint, color:uint, findColor:Boolean = true):Rectangle
		{
			// TODO
			return null;
		}

		public function getPixel(x:int, y:int):uint
		{
			var imageData:Array = _context.getImageData();
			var pixelIndex:int = arrayIndexFromXY(x, y, _context.width, _context.height);
			return rgbaToUInt(imageData[pixelIndex], imageData[pixelIndex + 1], imageData[pixelIndex + 2], 255);
		}

		public function getPixel32(x:int, y:int):uint
		{
			var imageData:Array = _context.getImageData();
			var pixelIndex:int = arrayIndexFromXY(x, y, _context.width, _context.height);
			return rgbaToUInt(imageData[pixelIndex], imageData[pixelIndex + 1], imageData[pixelIndex + 2], imageData[pixelIndex + 3]);
		}

		public function getPixels(rect:Rectangle):ByteArray
		{
			// TODO
			return null;
		}

		public function getVector(rect:Rectangle):Vector.<uint>
		{
			// TODO
			return null;
		}

		public function histogram(hRect:Rectangle = null):Vector.<Vector.<Number>>
		{
			// TODO
			return null;
		}

		public function hitTest(firstPoint:Point, firstAlphaThreshold:uint, secondObject:Object, secondBitmapDataPoint:Point = null, secondAlphaThreshold:uint = 1):Boolean
		{
			// TODO
			return false;
		}

		public function lock():void
		{
			// TODO
		}

		public function merge(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, redMultiplier:uint, greenMultiplier:uint, blueMultiplier:uint, alphaMultiplier:uint):void
		{
			// TODO
		}

		public function noise(randomSeed:int, low:uint = 0, high:uint = 255, channelOptions:uint = 7, grayScale:Boolean = false):void
		{
			// TODO
		}

		public function paletteMap(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, redArray:Array = null, greenArray:Array = null, blueArray:Array = null, alphaArray:Array = null):void
		{
			// TODO
		}

		public function perlinNoise(baseX:Number, baseY:Number, numOctaves:uint, randomSeed:int, stitch:Boolean, fractalNoise:Boolean, channelOptions:uint = 7, grayScale:Boolean = false, offsets:Array = null):void
		{
			// TODO
		}

		public function pixelDissolve(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, randomSeed:int = 0, numPixels:int = 0, fillColor:uint = 0):int
		{
			// TODO
			return 0;
		}

		public function scroll(x:int, y:int):void
		{
			// TODO
		}

		public function setPixel(x:int, y:int, color:uint):void
		{
			var imageData:Array = _context.getImageData();
			var pixelIndex:int = arrayIndexFromXY(x, y, _context.width, _context.height);
			var rgbaValues:Vector.<int> = uintToRGBA(color);
			
			imageData[pixelIndex] = rgbaValues[0];
			imageData[pixelIndex + 1] = rgbaValues[1];
			imageData[pixelIndex + 2] = rgbaValues[2];
			imageData[pixelIndex + 3] = 255;
			
			_context.putImageData(imageData, 0, 0);
		}

		public function setPixel32(x:int, y:int, color:uint):void
		{
			var imageData:Array = _context.getImageData();
			var pixelIndex:int = arrayIndexFromXY(x, y, _context.width, _context.height);
			var rgbaValues:Vector.<int> = uintToRGBA(color);
			
			imageData[pixelIndex] = rgbaValues[0];
			imageData[pixelIndex + 1] = rgbaValues[1];
			imageData[pixelIndex + 2] = rgbaValues[2];
			imageData[pixelIndex + 3] = rgbaValues[3];
			
			_context.putImageData(imageData, 0, 0);
		}

		public function setPixels(rect:Rectangle, inputByteArray:ByteArray):void
		{
			// TODO
		}

		public function setVector(rect:Rectangle, inputVector:Vector.<uint>):void
		{
			// TODO
		}

		public function threshold(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, operation:String, threshold:uint, color:uint = 0, mask:uint = 0xFFFFFFFF, copySource:Boolean = false):uint
		{
			// TODO
			return 0;
		}

		public function unlock(changeRect:Rectangle = null):void
		{
			// TODO
		}
		
		// Helper functions for bit shifts between hex vals and uints, and pixel access
		public static function rgbaToUInt(red:int, green:int, blue:int, alpha:int):int
		{
			var RGB:int = (alpha << 24);
			RGB = RGB | (red << 16);
			RGB = RGB | (green << 8);
			RGB = RGB | (blue);

			return RGB;
		}
		
		public static function uintToRGBA(value:int):Vector.<int>
		{
			var alpha:int = (value >> 24) & 255;
			var red:int = (value >> 16) & 255;
			var green:int = (value >> 8) & 255;
			var blue:int = value & 255;
			
			return new <int>[red, green, blue, alpha];
		}
		
		private static function arrayIndexFromXY(x:int, y:int, width:int, height:int):int
		{
			return y * width * VALUES_PER_PIXEL + x * VALUES_PER_PIXEL;
		}
	}
}