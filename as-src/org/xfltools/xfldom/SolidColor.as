package org.xfltools.xfldom 
{
	import flash.display.IGraphicsData;
	import flash.display.GraphicsSolidFill;
	
	import org.xfltools.utils.XMLAssistant;

	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class SolidColor implements IDOMComponent,IGraphicsDrawable
	{
		private var _color:uint = 0;
		private var _alpha:Number = 1;
		
		public function SolidColor() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_color = xml.hasOwnProperty("@color") ? parseInt(xml.@color.toString().split("#").join("0x")) : 0;
			_alpha = xml.hasOwnProperty("@alpha") ? parseFloat(xml.@alpha) : 1;
		}
		
		public function toGraphicsData():Vector.<IGraphicsData>
		{
			return Vector.<IGraphicsData>([new GraphicsSolidFill(_color, _alpha)]);
		}
	}

}