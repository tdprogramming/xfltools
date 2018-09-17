package org.xfltools.xfldom 
{
	import flash.events.Event;
	import flash.utils.Dictionary;
	import org.xfltools.utils.XMLAssistant;
	
	/**
	 * ...
	 * @author ...
	 */
	public class DOMComponentFactory 
	{
		private static const XML_NODE_NAME_TO_CLASS:Dictionary = generateXMLNodeNameToClass();
		
		private static var _domLibrary:DOMLibrary = new DOMLibrary();
		
		public static function getDOMComponentArray(xml:XML, nodeNames:Array, clazz:Class = null):Array
		{
			var result:Array = [];
			
			if (!clazz)
			{
				clazz = XML_NODE_NAME_TO_CLASS[nodeNames[nodeNames.length - 1]];
			}
			
			for each (var childXML:XML in XMLAssistant.getChildList(xml, nodeNames))
			{
				var domComponent:IDOMComponent = new clazz();
				domComponent.fromXML(childXML);
				result.push(domComponent);
			}
			
			return result;
 		}
		
		public static function populateSymbols(rootFolderURL:String, documentXML:XML, loadedCallback:Function):void
		{
			var symbolList:Vector.<XML> = XMLAssistant.getChildList(documentXML, [DOMXMLNodeName.SYMBOLS, DOMXMLNodeName.INCLUDE]);
			var symbolURLs:Vector.<String> = new <String>[];
			
			for each (var symbolXML:XML in symbolList)
			{
				symbolURLs.push(rootFolderURL + "/LIBRARY/" + symbolXML.@href);
			}
			
			_domLibrary.addEventListener(Event.COMPLETE, loadedCallback);
			_domLibrary.load(symbolURLs);
		}
		
		public static function instantiateSymbol(symbolName:String):DOMSymbolInstance
		{
			return _domLibrary.instantiateSymbol(symbolName);
		}
		
		private static function generateXMLNodeNameToClass():Dictionary
		{
			var result:Dictionary = new Dictionary();
			
			result[DOMXMLNodeName.DOM_DOCUMENT] = DOMDocument;
			result[DOMXMLNodeName.DOM_FRAME] = DOMFrame;
			result[DOMXMLNodeName.DOM_LAYER] = DOMLayer;
			result[DOMXMLNodeName.DOM_SHAPE] = DOMShape;
			result[DOMXMLNodeName.DOM_SYMBOL_INSTANCE] = DOMSymbolInstance;
			result[DOMXMLNodeName.DOM_TIMELINE] = DOMTimeline;
			result[DOMXMLNodeName.MOTION_OBJECT_XML] = MotionObject;
			
			return result;
		}
		
	}

}