package org.xfltools.xfldom 
{
	public class GradientEntry implements IDOMComponent
	{
		private var _color:uint;
		private var _alpha:Number;
		private var _ratio:Number;

		public function fromXML(xml:XML):void
		{
			_color = xml.hasOwnProperty("@color") ? parseInt(xml.@color.toString().split("#").join("0x")) : 0;
			_alpha = xml.hasOwnProperty("@alpha") ? parseFloat(xml.@alpha) : 1;
			_ratio = parseFloat(xml.@ratio);
		}
		
		public function get color():uint
		{
			return _color;
		}
		
		public function get alpha():Number
		{
			return _alpha;
		}
		
		public function get ratio():Number
		{
			return _ratio;
		}
	}
}