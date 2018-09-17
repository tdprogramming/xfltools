package org.xfltools.xfldom 
{
	import flash.display.GraphicsEndFill;
	import flash.display.GraphicsSolidFill;
	import flash.display.GraphicsPath;
	import flash.display.GraphicsPathCommand;
	import flash.display.GraphicsStroke;
	import flash.display.IGraphicsData;
	import flash.geom.Point;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class Edge implements IDOMComponent
	{
		private var _edgeDescriptors:Vector.<EdgeDescriptor>;
		private var _fillStyle:int;
		private var _strokeStyle:int;
		
		
		public function Edge(strokeStyle:int, fillStyle:int) 
		{
			_strokeStyle = strokeStyle;
			_fillStyle = fillStyle;
		}
		
		public function fromXML(xml:XML):void
		{
			_edgeDescriptors = new Vector.<EdgeDescriptor>();
			
			if (xml.hasOwnProperty("@edges"))
			{			
				var edgeDescriptors:Array = (xml.@edges.toString()).split("!");
				edgeDescriptors.shift();
				
				for each (var descriptor:String in edgeDescriptors)
				{
					if (descriptor != "")
					{
						_edgeDescriptors.push(new EdgeDescriptor(descriptor, _strokeStyle, _fillStyle));
					}
				}
			}
		}
		
		public function reverse():void
		{
			_edgeDescriptors.reverse();
			
			for each (var edge:EdgeDescriptor in _edgeDescriptors)
			{
				edge.reverse();
			}
		}
		
		public function get edgeDescriptors():Vector.<EdgeDescriptor>
		{
			return _edgeDescriptors;
		}
	}

}