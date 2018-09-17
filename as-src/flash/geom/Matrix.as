package flash.geom
{
	import org.xfltools.core.FlashJSObject;
	import flash.geom.Vector3D;
	import flash.geom.Point;

	public class Matrix extends FlashJSObject
	{
		// Values used when converting a gradient fill matrix to a set of four create JS gradient values
		private static const GRADIENT_SCALE_FACTOR:Number = 1638.4;

		private var _cjsGradientFillX0:Number;
		private var _cjsGradientFillY0:Number;
		private var _cjsGradientFillX1:Number;
		private var _cjsGradientFillY1:Number;
		private var _cjsGradientFillRadius0:Number;
		private var _cjsGradientFillRadius1:Number;

		public function get cjsGradientFillX0():Number
		{
			return _cjsGradientFillX0;
		}

		public function get cjsGradientFillY0():Number
		{
			return _cjsGradientFillY0;
		}

		public function get cjsGradientFillX1():Number
		{
			return _cjsGradientFillX1;
		}

		public function get cjsGradientFillY1():Number
		{
			return _cjsGradientFillY1;
		}

		public function get cjsGradientFillRadius0():Number
		{
			return _cjsGradientFillRadius0;
		}

		public function get cjsGradientFillRadius1():Number
		{
			return _cjsGradientFillRadius1;
		}

 	 	public function get a():Number
 	 	{
 	 		return _javascriptImplementation.a;
 	 	}

 	 	public function get b():Number
 	 	{
 	 		return _javascriptImplementation.b;
 	 	}

 	 	public function get c():Number
 	 	{
 	 		return _javascriptImplementation.c;
 	 	}

 	 	public function get d():Number
 	 	{
 	 		return _javascriptImplementation.d;
 	 	}

 	 	public function get tx():Number
 	 	{
 	 		return _javascriptImplementation.tx;
 	 	}

 	 	public function get ty():Number
 	 	{
 	 		return _javascriptImplementation.ty;
 	 	}

 	 	public function set a(newValue:Number):void
 	 	{
			_javascriptImplementation.a = newValue;
 	 	}

 	 	public function set b(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.b = newValue;
 	 	}

 	 	public function set c(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.c = newValue;
  	 	}

 	 	public function set d(newValue:Number):void
 	 	{
 			_javascriptImplementation.d = newValue;
 	 	}

 	 	public function set tx(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.tx = newValue;
 	 	}

 	 	public function set ty(newValue:Number):void
 	 	{
 	 		_javascriptImplementation.ty = newValue;
 	 	}

		public function Matrix(a:Number = 1, b:Number = 0, c:Number = 0, d:Number = 1, tx:Number = 0, ty:Number = 0)
		{
			_javascriptImplementation = window["flashjs_geom_Matrix_construct"](a, b, c, d, tx, ty);
		}
 	 	
		public function clone():Matrix
		{
			return new Matrix(a, b, c, d, tx, ty);
		}
 	 	
		public function concat(m:Matrix):void
		{
			_javascriptImplementation.appendMatrix(m.javascriptImplementation);
		}
 	 	
		public function copyColumnFrom(column:uint, vector3D:Vector3D):void
		{
			switch (column)
			{
				case 0:
					a = vector3D.x;
					b = vector3D.y;
					break;
				case 1:
					c = vector3D.x;
					d = vector3D.y;
					break;
				case 2:
					tx = vector3D.x;
					ty = vector3D.y;
					break;
				default:
					break;
			}
		}
	
		public function copyColumnTo(column:uint, vector3D:Vector3D):void
		{
			switch (column)
			{
				case 0:
					vector3D.x = a;
					vector3D.y = b;
					break;
				case 1:
					vector3D.x = c;
					vector3D.y = d;
					break;
				case 2:
					vector3D.x = tx;
					vector3D.y = ty;
					break;
				default:
					break;
			}
		}
 	 	
		public function copyFrom(sourceMatrix:Matrix):void
		{
			a = sourceMatrix.a;
			b = sourceMatrix.b;
			c = sourceMatrix.a;
			d = sourceMatrix.a;
			tx = sourceMatrix.a;
			ty = sourceMatrix.a;
			
		}
 	 	
		public function copyRowFrom(row:uint, vector3D:Vector3D):void
		{
			switch (row)
			{
				case 0:
					a = vector3D.x;
					c = vector3D.y;
					tx = vector3D.z;
					break;
				case 1:
					b = vector3D.x;
					d = vector3D.y;
					ty = vector3D.z;
					break;
				default:
					break;
			}
		}

		public function copyRowTo(row:uint, vector3D:Vector3D):void
		{
			switch (row)
			{
				case 0:
					vector3D.x = a;
					vector3D.y = c;
					vector3D.z = tx;
					break;
				case 1:
					vector3D.x = b;
					vector3D.y = d;
					vector3D.z = ty;
					break;
				default:
					break;
			}
		}
 	 	
		public function createBox(scaleX:Number, scaleY:Number, rotation:Number = 0, tx:Number = 0, ty:Number = 0):void
		{
			this.a = Math.cos(rotation) * scaleX;
			this.b = Math.sin(rotation);
			this.c = -1 * Math.sin(rotation);
			this.d = Math.cos(rotation) * scaleY;
			this.tx = tx;
			this.ty = ty;
		}

		public function createGradientBox(width:Number, height:Number, rotation:Number = 0, tx:Number = 0, ty:Number = 0):void
		{
			this.a = Math.cos(rotation) * (width / GRADIENT_SCALE_FACTOR);
			this.b = Math.sin(rotation);
			this.c = -1 * Math.sin(rotation);
			this.d = Math.cos(rotation) * (height / GRADIENT_SCALE_FACTOR);
			this.tx = tx + (width / 2);
			this.ty = ty + (height / 2);
		}

		public function cacheCjsLinearGradientValues(radial:Boolean = false):void
		{
			var rotation:Number = Math.asin(b);
			var width:Number = (a / (Math.cos(rotation))) * GRADIENT_SCALE_FACTOR;
			var height:Number = (d / (Math.cos(rotation))) * GRADIENT_SCALE_FACTOR;

			var xOffset:Number = tx - width / 2;
			var yOffset:Number = ty - height / 2;

			// In the createBox method, the rotate is done before the scale, therefore 
			// calculate the end point of the line as if it was in an identity matrix
			// Slightly messy calculation here, we're calculating the theoretical point of intersection with 
			// a 1 x 1 box for the start and end points of a line used by the create JS gradient fill.
			// TODO: I know there's a better and much less hacky way to do this with better Matrix/trig math
			// A rotation of 0 is horizontal straight across the x axis

			var originX:Number = 0;
			var originY:Number = 0;
			var destinationX:Number = 0;
			var destinationY:Number = 0;

			if (rotation == 0)
			{
				originX = 0;
				originY = 0;
				destinationX = 1;
				destinationY = 0;
			}
			else if (rotation > 0 && rotation < Math.PI / 4)
			{
				originX = 0;
				originY = 0;
				destinationX = 1;
				destinationY = Math.tan(rotation);
			}
			else if (rotation == Math.PI / 4)
			{
				originX = 0;
				originY = 0;
				destinationX = 1;
				destinationY = 1;				
			}
			else if (rotation > Math.PI / 4 && rotation < Math.PI / 2)
			{
				originX = 0;
				originY = 0;
				destinationX = Math.tan(Math.PI / 2 - rotation);
				destinationY = 1;	
			}
			else if (rotation == Math.PI / 2)
			{
				originX = 0;
				originY = 0;
				destinationX = 0;
				destinationY = 1;
			}
			else if (rotation > Math.PI / 2 && rotation < Math.PI * 0.75)
			{
				originX = 1;
				originY = 0;
				destinationX = Math.tan(rotation - Math.PI / 2);
				destinationY = 1;	
			}
			else if (rotation == Math.PI * 0.75)
			{
				originX = 1;
				originY = 0;
				destinationX = 0;
				destinationY = 1;
			}
			else if (rotation > Math.PI * 0.75 && rotation < Math.PI)
			{
				originX = 1;
				originY = 0;
				destinationX = 0;
				destinationY = Math.tan(Math.PI - rotation);
			}
			else if (rotation == Math.PI)
			{
				originX = 1;
				originY = 0;
				destinationX = 0;
				destinationY = 0;
			}
			else if (rotation > Math.PI && rotation < Math.PI * 1.25)
			{
				originX = 1;
				originY = 1;
				destinationX = 0;
				destinationY = -Math.tan(rotation - Math.PI);
			}
			else if (rotation == Math.PI * 1.25)
			{
				originX = 1;
				originY = 1;
				destinationX = 0;
				destinationY = 0;				
			}
			else if (rotation > Math.PI * 1.25 && rotation < Math.PI * 1.5)
			{
				originX = 1;
				originY = 1;
				destinationX = Math.tan(Math.PI * 1.5 - rotation);
				destinationY = 0;
			}
			else if (rotation == Math.PI * 1.5)
			{
				originX = 0;
				originY = 1;
				destinationX = 0;
				destinationY = 0;
			}
			else if (rotation > Math.PI * 1.5 && rotation < Math.PI * 1.75)
			{
				originX = 0;
				originY = 1;
				destinationX = Math.tan(rotation - Math.PI * 1.5);
				destinationY = 0;
			}
			else if (rotation == Math.PI * 1.75)
			{
				originX = 0;
				originY = 1;
				destinationX = 1;
				destinationY = 0;	
			}
			else if (rotation > Math.PI * 1.75 && rotation < Math.PI * 2)
			{
				originX = 0;
				originY = 1;
				destinationX = 1;
				destinationY = Math.tan(Math.PI * 2 - rotation);	
			}

			// Scale the line points to the box
			_cjsGradientFillX0 = originX * width + xOffset;
			_cjsGradientFillY0 = originY * height + yOffset;
			_cjsGradientFillX1 = destinationX * width + xOffset;
			_cjsGradientFillY1 = destinationY * height + yOffset;
		}

		public function cacheCjsRadialGradientValues():void
		{
			var rotation:Number = Math.asin(b);
			var width:Number = (a / (Math.cos(rotation))) * GRADIENT_SCALE_FACTOR;
			var height:Number = (d / (Math.cos(rotation))) * GRADIENT_SCALE_FACTOR;

			var xOffset:Number = tx - width / 2;
			var yOffset:Number = ty - height / 2;
			

			// Scale the line points to the box
			_cjsGradientFillX0 = _cjsGradientFillX1 = width / 2 + xOffset;
			_cjsGradientFillY0 = _cjsGradientFillY1 = height / 2 + yOffset;
			_cjsGradientFillRadius0 = 0;
			_cjsGradientFillRadius1 = width / 2;		// TODO: Eliptical gradient fills are not supported
		}

		public function deltaTransformPoint(point:Point):Point
		{
			var deltaMatrix:Matrix = this.clone();
			deltaMatrix.tx = 0;
			deltaMatrix.ty = 0;

			var result:Object = deltaMatrix.javascriptImplementation.transformPoint(point.x, point.y);
			return new Point(result.x, result.y);
		}
 	 	
		public function identity():void
		{
			this.a = 1;
			this.b = 0;
			this.c = 0;
			this.d = 1;
			this.tx = 0;
			this.ty = 0;
		}

		public function invert():void
		{
			_javascriptImplementation.invert();
		}
 	 	
		public function rotate(angle:Number):void
		{
			_javascriptImplementation.rotate(angle);	
		}
 	 	
		public function scale(sx:Number, sy:Number):void
		{
			_javascriptImplementation.scale(sx, sy);
		}
 	 	
		public function setTo(aa:Number, ba:Number, ca:Number, da:Number, txa:Number, tya:Number):void
		{
			this.a = aa;
			this.b = ba;
			this.c = ca;
			this.d = da;
			this.tx = txa;
			this.ty = tya;
		}
 	 	
		public function toString():String
		{
			return "(a=" + a.toString() + ", b=" + b.toString() + ", c=" + c.toString() + ", d=" + d.toString() + ", tx=" + tx.toString() + ", ty=" + ty.toString() + ")";
		}
 	 	
		public function transformPoint(point:Point):Point
		{
			var result:Object = _javascriptImplementation.transformPoint(point.x, point.y);
			return new Point(result.x, result.y);
		}
 	 	
		public function translate(dx:Number, dy:Number):void
		{
			this.tx += dx;
			this.ty += dy;
		}
	}
}