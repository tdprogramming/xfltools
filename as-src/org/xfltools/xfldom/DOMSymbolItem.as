package org.xfltools.xfldom 
{
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMSymbolItem implements IDOMComponent 
	{
		private var _xml:XML;
		private var _name:String;
		
		public function instantiate():DOMSymbolInstance
		{
			var result:DOMSymbolInstance = new DOMSymbolInstance();
			
			result.fromSymbolXML(_xml);
			
			return result;
		}
		
		public function fromXML(xml:XML):void 
		{
			_xml = xml;
			_name = _xml.@name;
		}
		
		public function get name():String
		{
			return _name;
		}
	}

}