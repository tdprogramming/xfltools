package org.xfltools.xfldom 
{
	import flash.geom.Point;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class CubicEdgeDescriptor extends EdgeDescriptor; 
	{
		private var _secondControl:Point;
		
		public function CubicEdgeDescriptor(descriptorString:String, strokeStyle:int, fillStyle:int) 
		{
			_strokeStyle = strokeStyle;
			_fillStyle = fillStyle;
			
			
		}
		
		public function get secondControl():Point
		{
			return _secondControl;
		}
	}

}