package org.xfltools.xfldom 
{
	import org.xfltools.utils.XMLAssistant;
	import flash.geom.Point;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class Keyframe implements IDOMComponent 
	{
		private var _anchor:Point;
		private var _next:Point;
		private var _previous:Point;
		private var _timeValue:Number;
		private var _roving:Boolean;
		
		public function Keyframe() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			_anchor = XMLAssistant.stringToPoint(xml.@anchor);
			_next = XMLAssistant.stringToPoint(xml.@next);
			_previous = XMLAssistant.stringToPoint(xml.@previous);
			_roving = parseInt(xml.@roving) == 1;
			_timeValue = parseFloat(xml.@timevalue);
		}
		
		public function get anchor():Point
		{
			return _anchor;
		}
		
		public function get timeValue():Number
		{
			return _timeValue;
		}
	}
}