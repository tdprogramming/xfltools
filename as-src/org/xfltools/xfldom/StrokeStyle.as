package org.xfltools.xfldom 
{
	import flash.display.GraphicsSolidFill;
	import flash.display.GraphicsStroke;
	import flash.display.IGraphicsData;
	import org.xfltools.utils.XMLAssistant;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class StrokeStyle implements IDOMComponent,IGraphicsDrawable
	{
		private var _index:int;
		private var _scaleMode:String;
		private var _caps:String;
 	 	private var _fill:FillStyle;
 	 	private var _joints:String;
 	 	private var _miterLimit:Number;
 	 	private var _pixelHinting:Boolean;
 	 	private var _thickness:Number;
		
		public function StrokeStyle() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_index = parseInt(xml.@index);
			
			var solidStrokeXML:XML = XMLAssistant.getChildList(xml, ["SolidStroke"])[0];
			
			if (solidStrokeXML)
			{
				_thickness = solidStrokeXML.hasOwnProperty("@weight") ? parseFloat(solidStrokeXML.@weight) : 1;
				_caps = solidStrokeXML.hasOwnProperty("@caps") ? solidStrokeXML.@caps : "none";
				_pixelHinting = solidStrokeXML.@pixelHinting == "true";
				_scaleMode = solidStrokeXML.hasOwnProperty("@scaleMode") ? solidStrokeXML.@scaleMode : "normal";
				_joints = solidStrokeXML.hasOwnProperty("@joints") ? solidStrokeXML.@joints : "round";
				_miterLimit = solidStrokeXML.hasOwnProperty("@miterLimit") ? parseFloat(solidStrokeXML.@miterLimit) : 3.0;
			}
		
			var fillXML:XML = XMLAssistant.getChildList(xml, ["SolidStroke", "fill"])[0];
			
			if (fillXML)
			{
				_fill = new FillStyle();
				_fill.fromXML(fillXML);
			}
		}
		
		public function get index():int
		{
			return _index;
		}
		
		public function toGraphicsData():Vector.<IGraphicsData>
		{
			var graphicsData:Vector.<IGraphicsData> = new Vector.<IGraphicsData>();
			
			var fill:GraphicsSolidFill = _fill ? _fill.solidFill : null;
			
			var stroke:GraphicsStroke = new GraphicsStroke(_thickness, _pixelHinting, _scaleMode, _caps, _joints, _miterLimit, fill);
				
			graphicsData.push(stroke);
			
			return graphicsData;
		}
	}

}