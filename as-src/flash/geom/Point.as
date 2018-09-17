package flash.geom
{
	import org.xfltools.core.FlashJSObject;

	public class Point extends FlashJSObject
	{
		public function Point(x:Number = 0, y:Number = 0)
		{
			_javascriptImplementation = window["flashjs_geom_Point_construct"](x, y);
		}

		public var length:Number;

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

 		public function add(v:flash.geom.Point):flash.geom.Point
 		{
 			// TODO
 			return new flash.geom.Point();
 		}

		public function clone():flash.geom.Point
		{
			var cloneResult:Object = _javascriptImplementation.clone();
			return new flash.geom.Point(cloneResult.x, cloneResult.y);
		}

		public function copyFrom(sourcePoint:flash.geom.Point):void
		{
			this.x = sourcePoint.x;
			this.y = sourcePoint.y;
		}

		public static function distance(pt1:flash.geom.Point, pt2:flash.geom.Point):Number
		{
			// TODO
			return 0;
		}

		public function equals(toCompare:flash.geom.Point):Boolean
		{
			return this.x == toCompare.x && this.y == toCompare.y;
		}

		public static function interpolate(pt1:flash.geom.Point, pt2:flash.geom.Point, f:Number):flash.geom.Point
		{
			// TODO
			return new flash.geom.Point();
		}

		public function normalize(thickness:Number):void
		{
			// TODO
		}

		public function offset(dx:Number, dy:Number):void
		{
			// TODO
		}

		public static function polar(len:Number, angle:Number):flash.geom.Point
		{
			// TODO
			return new flash.geom.Point();
		}

		public function setTo(xa:Number, ya:Number):void
		{
			this.x = xa;
			this.y = ya;
		}

		public function subtract(v:flash.geom.Point):flash.geom.Point
		{
			// TODO
			return new flash.geom.Point();
		}
	}
}