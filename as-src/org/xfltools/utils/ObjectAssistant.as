package org.xfltools.utils 
{
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class ObjectAssistant 
	{
		
		public static function shallowClone(source:Object):Object
		{
			var result:Object = {};
			
			for (var key:String in source)
			{
				result[key] = source[key];
			}
			
			return result;
		}
		
	}

}