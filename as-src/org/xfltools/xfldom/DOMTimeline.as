package org.xfltools.xfldom 
{
	import flash.display.DisplayObject;
	import flash.display.MovieClip;
	import org.xfltools.utils.XMLAssistant;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMTimeline implements IDOMComponent,IDOMFrameElement
	{
		private var _name:String;
		private var _layers:Vector.<DOMLayer>;
		
		public function DOMTimeline() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_name = xml.@name;
			
			_layers = Vector.<DOMLayer>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.LAYERS, DOMXMLNodeName.DOM_LAYER]));
		}
		
		public function get layers():Vector.<DOMLayer>
		{
			return _layers;
		}
		
		public function toDisplayObject():DisplayObject
		{
			var result:MovieClip = new MovieClip();
			
			for (var i:int = _layers.length - 1; i >= 0; i--)
			{
				result.addChild(_layers[i].toDisplayObject());
			}			
			
			return result;
		}
	}

}