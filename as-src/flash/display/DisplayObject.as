package flash.display
{
	import org.xfltools.core.ApplicationFactory;
	import org.xfltools.core.FlashJSObject;

	import flash.accessibility.AccessibilityProperties;
	import flash.events.EventDispatcher;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import flash.geom.Rectangle;
	import flash.geom.Transform;
	import flash.geom.Vector3D;
	import org.apache.royale.textLayout.property.ArrayProperty;

	public class DisplayObject extends EventDispatcher implements IBitmapDrawable
	{
		private var _filters:Array;
	
		public var accessibilityProperties:AccessibilityProperties;		// TODO

		
		public function DisplayObject()
		{
			_javascriptImplementation = window["flashjs_display_DisplayObject_construct"]();
		}

 	 	public function set alpha(newValue:Number):void
		{
			_javascriptImplementation.alpha = newValue;
		}

		public function get alpha():Number
		{
			return _javascriptImplementation.alpha;
		}

 	 	public var blendMode:String;		// TODO
 	 	
 	 	public var blendShader:Shader;		// TODO

 	 	public var cacheAsBitmap:Boolean;	// TODO - see cache() method of DisplayObject

 	 	public var cacheAsBitmapMatrix:Matrix;	// TODO

 	 	public function set filters(value:Array):void
		{
			_filters = value;
			
			var jsFilters:Array = [];
			
			for each (var filter:FlashJSObject in _filters)
			{
				jsFilters.push(filter.javascriptImplementation);
			}
			
			_javascriptImplementation.filters = jsFilters;
			
			if (_javascriptImplementation.getCacheDataURL() == null)
			{
				var bounds:Rectangle = getBounds(this);
				_javascriptImplementation.cache(bounds.x, bounds.y, bounds.width, bounds.height);
			}
			else
			{
				_javascriptImplementation.updateCache();
			}
		}
		
		public function get filters():Array
		{
			return _filters;
		}

 	 	public var height:Number;		// TODO

 	 	public var loaderInfo:LoaderInfo;	// TODO

 	 	public var mask:flash.display.DisplayObject;		// TODO

		public var metaData:Object;			// TODO

 	 	public var mouseX:Number;			// TODO

 	 	public var mouseY:Number;			// TODO

 	 	public var name:String;				// TODO

 	 	public var opaqueBackground:Object;	// TODO

 	 	public var parent:flash.display.DisplayObjectContainer;	// Set and read in displayObjectContainer

 	 	public var root:flash.display.DisplayObject;		// TODO

 	 	public function set rotation(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.rotation = newValue;
 	 	}

		public function get rotation():Number
 	 	{
 	 		return _javascriptImplementation.rotation;
 	 	} 	 	

		public var rotationX:Number;		// TODO

 	 	public var rotationY:Number;		// TODO

 	 	public var rotationZ:Number;		// TODO

 	 	public var scale9Grid:Rectangle;	// TODO

 	 	public function set scaleX(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.scaleX = newValue;
 	 	}

 	 	public function get scaleX():Number
 	 	{
 	 		return _javascriptImplementation.scaleX;
 	 	}

 	 	public function set scaleY(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.scaleY = newValue;
 	 	}

 	 	public function get scaleY():Number
 	 	{
 	 		return _javascriptImplementation.scaleY;
 	 	}

 	 	public var scaleZ:Number;	// TODO

 	 	public var scrollRect:Rectangle;	// TODO

 	 	public function get stage():Stage
 	 	{
 	 		return ApplicationFactory.stage;
 	 	}

 	 	public var transform:Transform; 	// TODO

 	 	public function set visible(newValue:Boolean):void
 	 	{
 	 		_javascriptImplementation.visible = newValue;
 	 	}

 	 	public function get visible():Boolean
 	 	{
 	 		return _javascriptImplementation.visible;
 	 	}

 	 	public var width:Number;

 	 	public function set x(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.x = newValue;
 	 	}

 	 	public function get x():Number
 	 	{
 	 		return _javascriptImplementation.x;
 	 	}

 	 	public function set y(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.y = newValue;
 	 	}

 	 	public function get y():Number
 	 	{
 	 		return _javascriptImplementation.y;
 	 	}
 	 	
 	 	public var z:Number;		// TODO

		// Methods

		public function getBounds(targetCoordinateSpace:flash.display.DisplayObject):Rectangle
		{
			// TODO - only returns bounds in local co-ordinate space
			return _javascriptImplementation.getBounds();
		}

		public function getRect(targetCoordinateSpace:flash.display.DisplayObject):Rectangle
		{
			// TODO
			return new Rectangle();
		}

		public function globalToLocal(point:Point):Point
		{
			var globalToLocalResult:Object = _javascriptImplementation.globalToLocal(point.javascriptImplementation);
			return new Point(globalToLocalResult.x, globalToLocalResult.y);
		}

		public function globalToLocal3D(point:Point):Vector3D
		{
			// TODO
			return null;
		}

		public function hitTestObject(obj:flash.display.DisplayObject):Boolean
		{
			// TODO
			return false;
		}

		public function hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
		{
			return _javascriptImplementation.hitTest(x, y);
		}

		public function local3DToGlobal(point3d:Vector3D):Point
		{
			// TODO
			return null;
		}

		public function localToGlobal(point:Point):Point
		{
			// TODO
			return null;
		}
	}
}