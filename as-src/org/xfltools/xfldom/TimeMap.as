package org.xfltools.xfldom 
{
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class TimeMap implements IDOMComponent 
	{
		public static const QUADRATIC:String = "Quadratic";	// quadratic timeline type, more needed as they become known
		
		private var _strength:Number;
		private var _type:String;
		
		public function TimeMap() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			_strength = parseFloat(xml.@strength);
			_type = xml.@type;
		}
		
	}

}