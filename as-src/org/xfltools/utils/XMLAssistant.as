package org.xfltools.utils 
{
	import flash.geom.Point;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class XMLAssistant 
	{
		public static function getChildList(xml:XML, childNames:Array):Vector.<XML>
		{
			var result:Vector.<XML> = new Vector.<XML>;
			
			while (childNames.length > 1)
			{
				var childList:Vector.<XML> = getChildListByName(xml, childNames.shift());
				
				if (!childList.length)
				{
					break;
				}
				
				xml = childList[0];
			}
			
			if (xml)
			{
				for (var i:int = 0; i < xml.children().length(); i++)
				{
					if (xml.children()[i].localName() == childNames[0])
					{
						result.push(xml.children()[i]);
					}
				}
			}
			
			return result;
		}
		
		private static function getChildListByName(xml:XML, childName:String):Vector.<XML>
		{
			var result:Vector.<XML> = new Vector.<XML>;
			
			for (var i:int = 0; i < xml.children().length(); i++)
			{
				if (xml.children()[i].localName() == childName)
				{
					result.push(xml.children()[i]);
				}
			}
			
			return result;
		}
		
		public static function stringToPoint(input:String):Point
		{
			var splitInput:Array = input.split(",");
			return new Point(parseFloat(splitInput[0]), parseFloat(splitInput[1]));
		}
	}

}