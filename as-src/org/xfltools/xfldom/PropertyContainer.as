package org.xfltools.xfldom 
{
	import flash.utils.Dictionary;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class PropertyContainer implements IDOMComponent
	{
		public static const ID_HEAD:String = "headContainer";
		public static const ID_BASIC_MOTION:String = "Basic_Motion";
		public static const ID_TRANSFORMATION:String = "Transformation";
		public static const ID_COLORS:String = "Colors";
		public static const ID_FILTERS:String = "Filters";
		
		private var _id:String;
		private var _propertyContainers:Vector.<PropertyContainer>;
		private var _properties:Vector.<Property>;
		
		public function PropertyContainer() 
		{
			
		}
		
		public function fromXML(xml:XML):void 
		{
			_id = xml.@id;
			
			_propertyContainers = Vector.<PropertyContainer>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.PROPERTY_CONTAINER], PropertyContainer));
			_properties = Vector.<Property>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.PROPERTY], Property));
		}
		
		public function get id():String
		{
			return _id;
		}
		
		
		
		public function getTweenData():Vector.<TweenVO>
		{
			var result:Vector.<TweenVO> = new <TweenVO>[];
			
			for each (var property:Property in _properties)
			{
				result = result.concat(property.getTweenData());
			}
			
			for each (var propertyContainer:PropertyContainer in _propertyContainers)
			{
				result = result.concat(propertyContainer.getTweenData());
			}
			
			return result;
		}
	}
}