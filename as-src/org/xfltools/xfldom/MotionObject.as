package org.xfltools.xfldom 
{
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class MotionObject implements IDOMComponent 
	{
		private var _animationCore:AnimationCore;
		
		public function MotionObject() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			_animationCore = DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.ANIMATION_CORE], AnimationCore)[0];
		}
		
		public function exportTweenData():Vector.<TweenVO>
		{
			return _animationCore.exportTweenData();
		}
		
	}

}