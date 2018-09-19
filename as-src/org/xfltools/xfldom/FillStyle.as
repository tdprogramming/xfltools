package org.xfltools.xfldom 
{
	import flash.display.GraphicsSolidFill;
	import flash.display.IGraphicsData;
	
	import org.xfltools.utils.XMLAssistant;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class FillStyle implements IDOMComponent,IGraphicsDrawable
	{
		private var _index:int;
		private var _solidColors:Vector.<SolidColor>;
		
		public function FillStyle() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_index = parseInt(xml.@index);
			
			_solidColors = new Vector.<SolidColor>();
			
			for each (var solidColorXML:XML in XMLAssistant.getChildList(xml, ["SolidColor"]))
			{
				var solidColor:SolidColor = new SolidColor();
				solidColor.fromXML(solidColorXML);
				
				_solidColors.push(solidColor);
			}
		}
		
		public function get solidFill():GraphicsSolidFill
		{
			if (_solidColors.length)
			{
				return new GraphicsSolidFill(_solidColors[0].color, _solidColors[0].alpha);
			}
			
			return null;
		}
		
		public function get index():int
		{
			return _index;
		}
		
		public function toGraphicsData():Vector.<IGraphicsData>
		{
			var graphicsData:Vector.<IGraphicsData> = new Vector.<IGraphicsData>();;
			
			for each (var solidColor:SolidColor in _solidColors)
			{
				var solidFill:GraphicsSolidFill = new GraphicsSolidFill(solidColor.color, solidColor.alpha);
				
				graphicsData.push(solidFill);
			}
			
			return graphicsData;
		}
	}

}