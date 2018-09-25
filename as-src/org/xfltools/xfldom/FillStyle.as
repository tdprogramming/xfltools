package org.xfltools.xfldom 
{
	import flash.display.GradientType;
	import flash.display.GraphicsSolidFill;
	import flash.display.IGraphicsData;
	
	import org.xfltools.utils.XMLAssistant;
	import flash.display.IGraphicsFill;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class FillStyle implements IDOMComponent,IGraphicsDrawable
	{
		private var _index:int;
		private var _fillData:Vector.<IGraphicsDrawable>;
		
		public function FillStyle() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_index = parseInt(xml.@index);
			
			_fillData = new Vector.<IGraphicsDrawable>();
			
			for each (var solidColorXML:XML in XMLAssistant.getChildList(xml, [DOMXMLNodeName.SOLID_COLOR]))
			{
				var solidColor:SolidColor = new SolidColor();
				solidColor.fromXML(solidColorXML);
				
				_fillData.push(solidColor);
			}
			
			for each (var linearGradientXML:XML in XMLAssistant.getChildList(xml, [DOMXMLNodeName.LINEAR_GRADIENT]))
			{
				var linearGradient:Gradient = new Gradient(GradientType.LINEAR);
				linearGradient.fromXML(linearGradientXML);
				
				_fillData.push(linearGradient);
			}
			
			for each (var radialGradientXML:XML in XMLAssistant.getChildList(xml, [DOMXMLNodeName.RADIAL_GRADIENT]))
			{
				var radialGradient:Gradient = new Gradient(GradientType.RADIAL);
				radialGradient.fromXML(radialGradientXML);
				
				_fillData.push(radialGradient);
			}
		}
		
		public function get fill():IGraphicsFill
		{
			return _fillData[0].toGraphicsData()[0] as IGraphicsFill;
		}
		
		public function get index():int
		{
			return _index;
		}
		
		public function toGraphicsData():Vector.<IGraphicsData>
		{
			var graphicsData:Vector.<IGraphicsData> = new Vector.<IGraphicsData>();
			
			for each (var fillData:IGraphicsDrawable in _fillData)
			{
				graphicsData = graphicsData.concat(fillData.toGraphicsData());
			}
			
			return graphicsData;
		}
	}

}