package org.xfltools.xfldom 
{
	import flash.display.DisplayObject;
	import flash.display.MovieClip;
	import org.xfltools.utils.XMLAssistant;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMLayer implements IDOMComponent,IDOMFrameElement
	{
		private var _frames:Vector.<DOMFrame>;
		private var _name:String;
		private var _color:String;
		private var _current:Boolean;
		private var _isSelected:Boolean;
		
		public function DOMLayer() 
		{
			
		}
		
		public function fromXML(xml:XML):void 
		{
			_name = xml.@name;
			_color = xml.@color;
			_current = xml.@current == "true";
			_isSelected = xml.@isSelected == "true";
			
			_frames = new Vector.<DOMFrame>();
			
			for each (var frameXML:XML in XMLAssistant.getChildList(xml, ["frames", "DOMFrame"]))
			{
				var domFrame:DOMFrame = new DOMFrame();
				domFrame.fromXML(frameXML);
				_frames.push(domFrame);
			}
		}
		
		public function get frames():Vector.<DOMFrame>
		{
			return _frames;
		}
		
		public function toDisplayObject():DisplayObject
		{
			var result:MovieClip = new MovieClip();
			
			for each (var frame:DOMFrame in _frames)
			{
				result.addChild(frame.toDisplayObject());
			}
			
			return result;
		}
	}

}