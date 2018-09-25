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
				
				for each (var descriptor:String in edgeDescriptors)
				{
					if (!isStringEmpty(descriptor))
					{
						_edgeDescriptors.push(new EdgeDescriptor(descriptor, _strokeStyle, _fillStyle));
					}
				}
			}
		}
		
		private function isStringEmpty(input:String):Boolean
		{
			if (input.length == 0)
			{
				return true;
			}
		
			for (var i:int = 0; i < input.length; i++)
			{
				if (input.charAt(i) != " " && input.charAt(i) != "\n" && input.charAt(i) != "\r" && input.charAt(i) != "\r\n")
				{
					return false;
				} 
			}
			
			return true;
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