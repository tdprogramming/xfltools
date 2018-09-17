package flash.geom
{
	public class Vector3D
	{
		public static const X_AXIS:Vector3D = new Vector3D(1,0,0);
 	 	public static const Y_AXIS:Vector3D = new Vector3D(0,1,0);
 	 	public static const Z_AXIS:Vector3D = new Vector3D(0,0,1);

		private var _x:Number;
		private var _y:Number;
		private var _z:Number;
		private var _w:Number;

		public function get length():Number
		{
			// TODO
			return 0;
		}

		public function get lengthSquared():Number
		{
			// TODO
			return 0;
		}

 	 	public function set x(newValue:Number):void
 	 	{
 	 		_x = newValue;
 	 	}

 	 	public function get x():Number
 	 	{
 	 		return _x;
 	 	}

 	 	public function set y(newValue:Number):void
 	 	{
 	 		_y = newValue;
 	 	}

 	 	public function get y():Number
 	 	{
 	 		return _y;
 	 	}

 	 	public function set z(newValue:Number):void
 	 	{
 	 		_z = newValue;
 	 	}

 	 	public function get z():Number
 	 	{
 	 		return _z;
 	 	}

 	 	public function set w(newValue:Number):void
 	 	{
 	 		_w = newValue;
 	 	}

 	 	public function get w():Number
 	 	{
 	 		return _w;
 	 	}

		public function Vector3D(x:Number = 0, y:Number = 0, z:Number = 0, w:Number = 0)
		{
			_x = x;
			_y = y;
			_z = z;
			_w = w;
		}
 	 	
		public function add(a:Vector3D):Vector3D
		{
			// TODO - this is wrong
			_x = a.x;
			_y = a.y;
			_z = a.z;
			_w = a.w;

			return clone();
		}

		public static function angleBetween(a:Vector3D, b:Vector3D):Number
		{
			// TODO
			return 0;
		}

		public function clone():Vector3D
		{
			return new Vector3D(_x, _y, _z, _w);
		}
 	 	
		public function copyFrom(sourceVector3D:Vector3D):void
		{
			_x = sourceVector3D.x;
			_y = sourceVector3D.y;
			_z = sourceVector3D.z;
			_w = sourceVector3D.w;
		}
 	 	
		public function crossProduct(a:Vector3D):Vector3D
		{
			// TODO
			return null;
		}
 	 	
		public function decrementBy(a:Vector3D):void
		{
			_x -= a.x;
			_y -= a.y;
			_z -= a.z;
		}
 	 	
		public static function distance(pt1:Vector3D, pt2:Vector3D):Number
		{
			// TODO
			return 0;
		}
 	 	
		public function dotProduct(a:Vector3D):Number
		{
			// TODO
			return 0;
		}
 	 	
		public function equals(toCompare:Vector3D, allFour:Boolean = false):Boolean
		{
			var result:Boolean = (_x == toCompare.x && _y == toCompare.y && _z == toCompare.z);

			if (allFour)
			{
				result = (result && _w == toCompare.w);
			}

			return result;
		}

		public function incrementBy(a:Vector3D):void
		{
			_x += a.x;
			_y += a.y;
			_z += a.z;
		}

		public function nearEquals(toCompare:Vector3D, tolerance:Number, allFour:Boolean = false):Boolean
		{
			// TODO
			return false;
		}
 	 	
		public function negate():void
		{
			_x *= -1;
			_y *= -1;
			_z *= -1;
		}

		public function normalize():Number
		{
			// TODO
			return 0;
		}

		public function project():void
		{
			_x = _x / _w;
			_y = _y / _w;
			_z = _z / _w;
		}

		public function scaleBy(s:Number):void
		{
			_x *= s;
			_y *= s;
			_z *= s;
		}

		public function setTo(xa:Number, ya:Number, za:Number):void
		{
			_x = xa;
			_y = ya;
			_z = za;
		}

		public function subtract(a:Vector3D):Vector3D
		{
			return new Vector3D(a.x - _x, a.y - _y, a.z - _z);
		}

		public function toString():String
		{
			// TODO
			return "";
		}
	}
}