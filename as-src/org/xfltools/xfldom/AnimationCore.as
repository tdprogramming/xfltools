package org.xfltools.xfldom 
{
	import flash.utils.Dictionary;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class AnimationCore implements IDOMComponent 
	{
		private var _timeScale:Number;
		private var _duration:Number;
		private var _version:int;
		private var _timeMap:TimeMap;
		private var _propertyContainers:Vector.<PropertyContainer>;
		
		public function AnimationCore() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			_timeScale = parseFloat(xml.@TimeScale);
			_version = parseInt(xml.@Version);
			_duration = parseFloat(xml.@duration);
			
			_timeMap = DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.TIME_MAP], TimeMap)[0];
			
			// Skipping the "metadata" tag in the animation XML for now. 
			
			_propertyContainers = Vector.<PropertyContainer>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.PROPERTY_CONTAINER], PropertyContainer));
		}
		
		public function exportTweenData():Vector.<TweenVO>
		{
			var result:Vector.<TweenVO> = new <TweenVO>[];
			
			for each (var propertyContainer:PropertyContainer in _propertyContainers)
			{
				result = result.concat(propertyContainer.getTweenData());
			}
			
			// Consolidate keyframe data with matching time values
			for (var i:int = result.length - 1; i >= 0; i--)
			{
				for (var ii:int = 0; ii < i; ii++)
				{
					if (result[ii].time == result[i].time)
					{
						for (var key:String in result[i].vars)
						{
							result[ii].addVar(key, result[i].vars[key]);
						}
						
						result.splice(i, 1);
						
						break;
					}
				}
			}
			
			for each (var tweenVO:TweenVO in result)
			{
				tweenVO.time /= _timeScale;
			}
			
			return result;
		}
	}
}