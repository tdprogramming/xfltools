package org.xfltools.xfldom 
{
	import flash.display.GraphicsPath;
	import flash.display.IGraphicsData;
	import flash.geom.Point;
	import org.xfltools.utils.TWIPS;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class EdgeDescriptor
	{
		protected var _start:Point;
		protected var _end:Point;
		protected var _control:Point;		// If this point exists then it's a curve
		protected var _fillStyle:int;
		protected var _strokeStyle:int;
		
		public function EdgeDescriptor(descriptorString:String, strokeStyle:int, fillStyle:int) 
		{
			var splitDescriptor:Array;
			_strokeStyle = strokeStyle;
			_fillStyle = fillStyle;
			
			if (descriptorString.lastIndexOf("|") != -1)
			{
				splitDescriptor = descriptorString.split("|");
				_start = spaceSeparatedStringToPoint(splitDescriptor[0]);
				_end = spaceSeparatedStringToPoint(splitDescriptor[1]);
			}
			else if (descriptorString.lastIndexOf("[") != -1)
			{
				splitDescriptor = descriptorString.split("[");
				_start = spaceSeparatedStringToPoint(splitDescriptor[0]);
				_control = spaceSeparatedStringToPoint(splitDescriptor[1]);
				_end = spaceSeparatedStringToPoint(splitDescriptor[1], 2);
			}
		}
		
		private function removeIllegalCharacters(input:String):String
		{
			var result:String = "";
			
			for (var i:int = 0; i < input.length; i++)
			{
				var suspectChar:String = input.charAt(i);
			
				if (suspectChar != "\r" && suspectChar != "\n" && suspectChar != "\r\n" && suspectChar != " ")
				{
					result += suspectChar;
				}
			}
			
			return result;
		}
		
		private function spaceSeparatedStringToPoint(descriptorString:String, offset:int = 0):Point
		{
			var splitDescriptor:Array = descriptorString.split(" ");
			
			for (var i:int = splitDescriptor.length - 1; i >= 0; i--)
			{
				if (removeIllegalCharacters(splitDescriptor[i]) == "")
				{
					splitDescriptor.splice(i, 1);
				}
			}
			
			var result:Point = new Point(parseDorHFloat(splitDescriptor[0 + offset]) / TWIPS.TWIPS_PER_PIXEL, parseDorHFloat(splitDescriptor[1 + offset]) / TWIPS.TWIPS_PER_PIXEL);
			
			return result;
		}
		
		/**
		 * Parse numbers which may come in a hex strings or straight dec strings
		 * Adobe seem to put decimal points in hex numbers sometimes in the XFL format
		 * Needs further research but for now it's just - the number after the decimal point goes to decimal, then append the digits to 
		 * the number before the point
		 * @param	input
		 * @return
		 */
		private function parseDorHFloat(input:String):Number
		{
			input = removeIllegalCharacters(input);
		
			if (input.lastIndexOf("S") != -1)
			{
				input = input.split("S")[0];
			} 
		
			var result:Number;
				
			if (input.charAt(0) == "#")
			{
				
				input = input.substr(1);
				
				if (input.lastIndexOf(".") == -1)
				{
					result = parseFloat("0x" + input);
				}
				else
				{
					var inputArray:Array = input.split(".");
					
					if (inputArray[1].length == 1)
					{
						inputArray[1] += "0";
					}
					
					while (inputArray[0].length < 6)
					{
						inputArray[0] = "0" + inputArray[0];
					}
					
					result =  parseInt("0x" + inputArray[0] + inputArray[1]) / 256;
				}
				
				// 32-bit 2's complement number, check sign bit here:
				if (result >= 0x80000000)
				{
					result = -(0xFFFFFFFF - result + 1);
				}
				
				return result;
			}
			
			return parseFloat(input);
		}
		
		public function get start():Point
		{
			return _start;
		}
		
		public function get end():Point
		{
			return _end;
		}
		
		public function get control():Point
		{
			return _control;
		}
		
		public function reverse():void
		{
			var tempStart:Point = _start.clone();
			_start = _end;
			_end = tempStart;
		}
		
		public function get strokeStyle():int
		{
			return _strokeStyle;
		}
		
		public function get fillStyle():int
		{
			return _fillStyle;
		}
	}
}