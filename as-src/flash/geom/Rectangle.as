package flash.geom
{
	import org.xfltools.core.FlashJSObject;

	public class Rectangle extends FlashJSObject
	{
		private var _javascriptImplementation:Object;

		/**
		 * @flexjsignorecoercion createjs.Rectangle
		 */
		public function Rectangle(x:Number = 0, y:Number = 0, width:Number = 0, height:Number = 0)
		{
			_javascriptImplementation = window["flashjs_geom_Rectangle_construct"](x, y, width, height);
		}

		public var bottom:Number;		// TODO
		
		public var bottomRight:Point;	// TODO

		public function set height(newValue:Number):void
 		{
 			_javascriptImplementation.height = newValue;
 		}

 		public function get height():Number
 		{
 			return _javascriptImplementation.height;
 		}

		public var left:Number;		// TODO

		public var right:Number;		// TODO

		public var size:Point;			// TODO

 		public var top:Number;			// TODO

 		public var topLeft:Point;		// TODO

 		public function set width(newValue:Number):void
 		{
 			_javascriptImplementation.width = newValue;
 		}

 		public function get width():Number
 		{
 			return _javascriptImplementation.width;
 		}

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

		public function clone():flash.geom.Rectangle
		{
			return new flash.geom.Rectangle(this.x, this.y, this.width, this.height);
		}

		public function contains(x:Number, y:Number):Boolean
		{
			return _javascriptImplementation.contains(x, y);
		}

		public function containsPoint(point:Point):Boolean
		{
			return contains(point.x, point.y);
		}

		public function containsRect(rect:flash.geom.Rectangle):Boolean
		{
			return _javascriptImplementation.contains(rect.x, rect.y, rect.width, rect.height);
		}

		public function copyFrom(sourceRect:flash.geom.Rectangle):void
		{
			this.x = sourceRect.x;
			this.y = sourceRect.y;
			this.width = sourceRect.width;
			this.height = sourceRect.height;
		}

		public function equals(toCompare:flash.geom.Rectangle):Boolean
		{
			return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
		}

		public function inflate(dx:Number, dy:Number):void
		{
			// TODO
		}

		public function inflatePoint(point:Point):void
		{
			// TODO
		}

		public function intersection(toIntersect:flash.geom.Rectangle):flash.geom.Rectangle
		{
			var intersectionResult:Object = _javascriptImplementation.intersection(toIntersect.javascriptImplementation);
			return new flash.geom.Rectangle(intersectionResult.x, intersectionResult.y, intersectionResult.width, intersectionResult.height);
		}

		public function intersects(toIntersect:flash.geom.Rectangle):Boolean
		{
			return _javascriptImplementation.intersects(toIntersect.javascriptImplementation);
		}

		public function isEmpty():Boolean
		{
			return _javascriptImplementation.isEmpty();
		}

		public function offset(dx:Number, dy:Number):void
		{
			this.x += dx;
			this.y += dy;
		}

		public function offsetPoint(point:Point):void
		{
			offset(point.x, point.y);
		}

		public function setEmpty():void
		{
			_javascriptImplementation.setValues(0, 0, 0, 0);
		}

		public function setTo(xa:Number, ya:Number, widtha:Number, heighta:Number):void
		{
			_javascriptImplementation.setValues(xa, ya, widtha, heighta);
		}
	 	
		public function union(toUnion:flash.geom.Rectangle):flash.geom.Rectangle
		{
			var unionResult:Object = _javascriptImplementation.union(toUnion.javascriptImplementation);
			return new flash.geom.Rectangle(unionResult.x, unionResult.y, unionResult.width, unionResult.height);
		}
	}
}