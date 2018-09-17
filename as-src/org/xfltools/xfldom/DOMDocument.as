package org.xfltools.xfldom 
{
	import flash.display.DisplayObject;
	import org.xfltools.utils.XMLAssistant;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMDocument implements IDOMComponent,IDOMFrameElement
	{
		private var _timelines:Vector.<DOMTimeline>;
		private var _symbols:Vector.<DOMSymbolItem>;
		
		public function DOMDocument() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_timelines = Vector.<DOMTimeline>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.TIMELINES, DOMXMLNodeName.DOM_TIMELINE]));
		}
		
		public function get timelines():Vector.<DOMTimeline>
		{
			return _timelines;
		}
		
		public function toDisplayObject():DisplayObject
		{
			return _timelines[0].toDisplayObject();
		}
	}

}