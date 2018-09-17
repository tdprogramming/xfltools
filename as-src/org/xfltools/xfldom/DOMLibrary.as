package org.xfltools.xfldom 
{
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.utils.Dictionary;
	import org.xfltools.commands.CommandQueue;
	import org.xfltools.commands.LoadDOMSymbolItemCommand;
	
	public class DOMLibrary extends EventDispatcher
	{
		private var _symbols:Dictionary = new Dictionary();
		
		public function DOMLibrary() 
		{
			
		}	
		
		public function load(symbolURLs:Vector.<String>):void
		{
			var commandQueue:CommandQueue = new CommandQueue();
			
			for each (var symbolURL:String in symbolURLs)
			{
				commandQueue.queue(new LoadDOMSymbolItemCommand(symbolURL, this));
			}
			
			commandQueue.addEventListener(Event.COMPLETE, onLoadComplete);
			commandQueue.execute();
		}
		
		private function onLoadComplete(event:Event):void
		{
			var commandQueue:CommandQueue = event.target as CommandQueue;
			commandQueue.removeEventListener(Event.COMPLETE, onLoadComplete);
	
			dispatchEvent(new Event(Event.COMPLETE));
		}
		
		public function addSymbol(domSymbolItem:DOMSymbolItem):void
		{
			_symbols[domSymbolItem.name] = domSymbolItem;
		}
		
		public function instantiateSymbol(symbolName:String):DOMSymbolInstance
		{
			if (!_symbols[symbolName])
			{
				throw new Error("ERROR - DOMLibrary.instantiateSymbol() - no symbol with name: " + symbolName);
				return null;
			}
			
			return DOMSymbolItem(_symbols[symbolName]).instantiate();
		}
	}
}