package flash.filters
{
	public class DisplacementMapFilter extends BitmapFilter
	{
    	public function get alpha():Number
		{
			// TODO
			return 0;
    	}		

    	public function set alpha(value:Number):void
		{
			// TODO
		}

		public function get color():uint
		{
			// TODO
			return 0;
    	}

    	public function set color(value:uint):void
		{
			// TODO
    	}

		public function get componentX():uint
		{
			// TODO
			return 0;
    	}

    	public function set componentX(value:uint):void
		{
			// TODO
    	}

		public function get componentY():uint
		{
			// TODO
			return 0;
    	}

    	public function set componentY(value:uint):void
		{
			// TODO
    	}
	
		public function get mapBitmap():BitmapData
		{
			// TODO
			return null;
    	}

    	public function set mapBitmap(value:BitmapData):void
		{
			// TODO
    	}

		public function get mapPoint():Point
		{
			// TODO
			return null;
    	}

    	public function set mapPoint(value:Point):void
		{
			// TODO
    	}

		public function get mode():String
		{
			// TODO
			return null;
    	}

    	public function set mode(value:String):void
		{
			// TODO
    	}

		public function get scaleX():Number
		{
			// TODO
			return 0;
    	}

    	public function set scaleX(value:Number):void
		{
			// TODO
    	}

		public function get scaleY():Number
		{
			// TODO
			return 0;
    	}

    	public function set scaleY(value:Number):void
		{
			// TODO
    	}

		public function DisplacementMapFilter(mapBitmap:BitmapData = null, mapPoint:Point = null, componentX:uint = 0, componentY:uint = 0, scaleX:Number = 0.0, scaleY:Number = 0.0, mode:String = "wrap", color:uint = 0, alpha:Number = 0.0)
		{
			// TODO
		}

		override public function clone():BitmapFilter
		{
			return null;
		}
	}
}