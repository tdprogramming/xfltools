package org.xfltools.xfldom 
{
	import flash.display.DisplayObject;
	import flash.display.MovieClip;
	import flash.geom.Point;
	import org.xfltools.utils.XMLAssistant;
	import org.xfltools.utils.ObjectAssistant;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMFrame implements IDOMComponent,IDOMFrameElement
	{
		private var _index:int;
		private var _keyMode:int;
		private var _elements:Vector.<IDOMFrameElement>;
		private var _motionObject:MotionObject;
		
		public function DOMFrame() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			_index = parseInt(xml.@index);
			_keyMode = parseInt(xml.@keyMode);
			
			_elements = Vector.<IDOMFrameElement>(DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.ELEMENTS, DOMXMLNodeName.DOM_SHAPE]));
			
			var symbolInstanceXML:Vector.<XML> = XMLAssistant.getChildList(xml, [DOMXMLNodeName.ELEMENTS, DOMXMLNodeName.DOM_SYMBOL_INSTANCE]);
			
			for each (var symbolXML:XML in symbolInstanceXML)
			{
				var domSymbolInstance:DOMSymbolInstance = DOMComponentFactory.instantiateSymbol(symbolXML.@libraryItemName);
				domSymbolInstance.fromXML(symbolXML);
				_elements.push(domSymbolInstance);
			}
						
			var motionObjects:Array = DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.MOTION_OBJECT_XML]);
			
			if (motionObjects.length)
			{
				_motionObject = motionObjects[0];
			}
		}
		
		public function get elements():Vector.<IDOMFrameElement>
		{
			return _elements;
		}
		
		public function toDisplayObject():DisplayObject
		{
			var movieClip:MovieClip = new MovieClip;
			
			var tweenVOs:Vector.<TweenVO> = _motionObject ? _motionObject.exportTweenData() : new <TweenVO>[];
			
			for each (var element:IDOMFrameElement in _elements)
			{
				var startingPosition:Point = new Point();
				
				if (element is DOMSymbolInstance)
				{
					startingPosition.x = DOMSymbolInstance(element).matrix.tx;
					startingPosition.y = DOMSymbolInstance(element).matrix.ty;
				}
				
				var displayObject:DisplayObject = element.toDisplayObject();
				
				displayObject.x = startingPosition.x;
				displayObject.y = startingPosition.y;
				
				movieClip.addChild(displayObject);
				
				for (var i:int = 0; i < tweenVOs.length; i++)
				{
					var vars:Object = ObjectAssistant.shallowClone(tweenVOs[i].vars);
					
					if (vars.hasOwnProperty("x"))
					{
						vars.x += startingPosition.x;
					}
					
					if (vars.hasOwnProperty("y"))
					{
						vars.y += startingPosition.y;
					}
					
					if (vars.hasOwnProperty("scaleX"))
					{
						vars.scaleX /= 100;
					}
					
					if (vars.hasOwnProperty("scaleY"))
					{
						vars.scaleY /= 100;
					}
					
					var duration:Number = i > 0 ? tweenVOs[i].time - tweenVOs[i - 1].time : tweenVOs[i].time;
					movieClip.tweenChild(displayObject, vars, duration);
				}
			}
			
			return movieClip;
		}
	}
}