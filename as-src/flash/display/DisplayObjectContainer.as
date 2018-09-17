package flash.display
{
	import flash.display.DisplayObject;
	import flash.geom.Point;
	import flash.text.TextSnapshot;
	import org.xfltools.core.ApplicationFactory;

	public class DisplayObjectContainer extends InteractiveObject
	{
		protected var _children:Vector.<flash.display.DisplayObject>;

		public function DisplayObjectContainer()
		{
			trace("Construct DO Container");
				
			_children = new <flash.display.DisplayObject>[];
			_javascriptImplementation = window["flashjs_display_DisplayObjectContainer_construct"]();
			startFrameTicker();
		}

		public function set mouseChildren(newValue:Boolean):void
 		{
 			_javascriptImplementation.mouseChildren = newValue;
 		}

 		public function get mouseChildren():Boolean
 		{
 			return _javascriptImplementation.mouseChildren;
 		}

		public function get numChildren():int
		{
			return _javascriptImplementation.numChildren;
		}

		public var tabChildren:Boolean;				// TODO

	 		public var textSnapshot:TextSnapshot;		// TODO
	 	
		public function addChild(child:DisplayObject):DisplayObject
		{
			// TODO: Deal with use of addchild to bump items to the top of the z order
			_javascriptImplementation.addChild(child.javascriptImplementation);
			_children.push(child);
			ApplicationFactory.updateStage();
			return child;
		}

		public function addChildAt(child:DisplayObject, index:int):DisplayObject
		{
			_javascriptImplementation.addChild(child.javascriptImplementation, index);
			return child;
		}

		public function areInaccessibleObjectsUnderPoint(point:Point):Boolean
		{
			// TODO
			return false;
		}

		public function contains(child:DisplayObject):Boolean
		{
			return _javascriptImplementation.contains(child.javascriptImplementation);
		}

		public function getChildAt(index:int):DisplayObject
		{
			// TODO - need paralel cache of child objects, Create JS contains this method
			return null;
		}

		public function getChildByName(name:String):DisplayObject
		{
			// TODO - need paralel cache of child objects, Create JS contains this method
			return null;
		}

		public function getChildIndex(child:DisplayObject):int
		{
			return _javascriptImplementation.getChildIndex(child.javascriptImplementation);
		}

		public function getObjectsUnderPoint(point:Point):Array
		{
			// TODO - need paralel cache of child objects, Create JS contains this method
			return null;
		}

		public function removeChild(child:DisplayObject):DisplayObject
		{
			_javascriptImplementation.removeChild(child.javascriptImplementation);
			return child;
		}

		public function removeChildAt(index:int):DisplayObject
		{
			_javascriptImplementation.removeChildAt(index);
			return null;
		}
	
		public function removeChildren(beginIndex:int = 0, endIndex:int = 0x7fffffff):void
		{
			// TODO
		}

		public function setChildIndex(child:DisplayObject, index:int):void
		{
			_javascriptImplementation.setChildIndex(child.javascriptImplementation, index);
		}

		public function stopAllMovieClips():void
		{
			// TODO
		}

		public function swapChildren(child1:DisplayObject, child2:DisplayObject):void
		{
			_javascriptImplementation.swapChildren(child1.javascriptImplementation, child2.javascriptImplementation);
		}

		public function swapChildrenAt(index1:int, index2:int):void
		{
			_javascriptImplementation.swapChildrenAt(index1, index2);
		}
	}
}