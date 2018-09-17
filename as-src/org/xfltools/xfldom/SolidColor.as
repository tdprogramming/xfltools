package org.xfltools.xfldom 
{
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class SolidColor implements IDOMComponent
	{
		private var _color:uint = 0;
		private var _alpha:uint = 1;
		
		public function SolidColor() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_color = xml.hasOwnProperty("@color") ? parseInt(xml.@color.toString().split("#").join("0x")) : 0;
			_alpha = xml.hasOwnProperty("@alpha") ? parseFloat(xml.@alpha) : 1;
		}
		
		public function get color():uint
		{
			return _color;
		}
		
		public function get alpha():uint
		{
			return _alpha;
		}
	}

}