package org.xfltools.commands 
{
	import flash.events.Event;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import org.xfltools.xfldom.DOMLibrary;
	import org.xfltools.xfldom.DOMSymbolItem;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class LoadDOMSymbolItemCommand extends AbstractCommand 
	{
		private var _fileURL:String;
		private var _domLibrary:DOMLibrary;
		
		public function LoadDOMSymbolItemCommand(fileURL:String, domLibrary:DOMLibrary) 
		{
			super();
			
			_fileURL = fileURL;
			_domLibrary = domLibrary;
		}
		
		override public function execute():void
		{
			var urlLoader:URLLoader = new URLLoader();
			urlLoader.addEventListener(Event.COMPLETE, onLoadComplete);
			urlLoader.load(new URLRequest(_fileURL));
		}
		
		private function onLoadComplete(event:Event):void
		{
			var urlLoader:URLLoader = event.target as URLLoader;
			urlLoader.removeEventListener(Event.COMPLETE, onLoadComplete);
			var xml:XML = new XML(urlLoader.data);
			var domSymbolItem:DOMSymbolItem = new DOMSymbolItem();
			domSymbolItem.fromXML(xml);
			_domLibrary.addSymbol(domSymbolItem);
			complete();
		}
		
	}

}