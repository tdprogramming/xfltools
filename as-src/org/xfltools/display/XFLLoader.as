package org.xfltools.display 
{
	import flash.display.IGraphicsData;
	import flash.display.MovieClip;
	import flash.display.Shape;
	import flash.events.Event;
	import flash.net.URLRequest;
	import flash.net.URLLoader;
	import org.xfltools.xfldom.DOMDocument;
	import org.xfltools.xfldom.DOMFrame;
	import org.xfltools.xfldom.DOMLayer;
	import org.xfltools.xfldom.DOMShape;
	import org.xfltools.xfldom.DOMTimeline;
	import org.xfltools.xfldom.DOMComponentFactory;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class XFLLoader 
	{
		private var _xml:XML;
		private var _rootTimeLine:MovieClip;
		private var _urlLoader:URLLoader;
		private var _domDocument:DOMDocument;
		private var _rootFolderURL:String;
		
		public function XFLLoader() 
		{
			_rootTimeLine = new MovieClip();
		}
		
		/**
		 * Load from the specified URL. The URL should be the parent folder of the xfl document
		 * @param	url
		 */
		public function load(url:String):void
		{
			_rootFolderURL = url;
			_urlLoader = new URLLoader();
			_urlLoader.addEventListener(Event.COMPLETE, onLoadComplete);
			_urlLoader.load(new URLRequest(_rootFolderURL + "/DOMDocument.xml"));
		}
		
		private function onLoadComplete(event:Event):void
		{
			_urlLoader.removeEventListener(Event.COMPLETE, onLoadComplete);
			
			_xml = new XML(_urlLoader.data);
			
			DOMComponentFactory.populateSymbols(_rootFolderURL, _xml, onLibraryLoadComplete);
		}
		
		private function onLibraryLoadComplete(event:Event):void
		{
			_domDocument = new DOMDocument();
			_domDocument.fromXML(_xml);
			renderDocument();
		}
		
		private function renderDocument():void
		{
			_rootTimeLine.addChild(_domDocument.toDisplayObject());
		}
		
		public function get rootTimeline():MovieClip
		{
			return _rootTimeLine;
		}
	}
}