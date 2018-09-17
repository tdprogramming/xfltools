package org.xfltools.xfldom 
{
	import flash.utils.Dictionary;
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class Property implements IDOMComponent 
	{
		public static const ID_MOTION_X:String = "Motion_X";
		public static const ID_MOTION_Y:String = "Motion_Y";
		public static const ID_ROTATION_Z:String = "Rotation_Z";
		public static const ID_DEPTH:String = "Depth";
		public static const ID_SKEW_X:String = "Skew_X";
		public static const ID_SKEW_Y:String = "Skew_Y";
		public static const ID_SCALE_X:String = "Scale_X";
		public static const ID_SCALE_Y:String = "Scale_Y";
		
		private static const XFL_KEY_TO_FLASH_KEY:Dictionary = generateXFLKeyToFlashKey();
		
		private var _id:String;
		private var _enabled:Boolean;
		private var _ignoreTimeMap:Boolean;
		private var _readOnly:Boolean;
		private var _visible:Boolean;
		private var _keyframes:Vector.<Keyframe>;
		
		public function Property() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			_enabled = parseInt(xml.@enabled) == 1;
			_id = xml.@id;
			_ignoreTimeMap = parseInt(xml.@ignoreTimeMap) == 1;
			_readOnly = parseInt(xml.@readonly) == 1;
			_visible = parseInt(xml.@visible) == 1;
			_keyframes = Vector.<Keyframe>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.KEY_FRAME], Keyframe));
		}
		
		public function getTweenData():Vector.<TweenVO>
		{
			var result:Vector.<TweenVO> = new <TweenVO>[];
			
			for each (var keyFrame:Keyframe in _keyframes)
			{
				var tweenVO:TweenVO = new TweenVO(keyFrame.timeValue);
				
				tweenVO.addVar(XFL_KEY_TO_FLASH_KEY[_id], keyFrame.anchor.y);		// In my tests meaningful values only seem to be stored on y of the pair, probably not actualy a point value? Needs more investigation
			
				result.push(tweenVO);
			}
			
			return result;
		}
		
		private static function generateXFLKeyToFlashKey():Dictionary
		{
			var result:Dictionary = new Dictionary();
			
			result[ID_MOTION_X] = "x";
			result[ID_MOTION_Y] = "y";
			result[ID_ROTATION_Z] = "rotation";
			result[ID_SCALE_X] = "scaleX";
			result[ID_SCALE_Y] = "scaleY";
			
			return result;
		}	
		
		public function get id():String
		{
			return _id;
		}
	}
}