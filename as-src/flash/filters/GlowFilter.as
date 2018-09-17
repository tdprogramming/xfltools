package flash.filters
{
	public class GlowFilter extends BitmapFilter
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
		
		public function get blurX():Number
		{
			// TODO
			return 0;
    	}

    	public function set blurX(value:Number):void
		{
			// TODO
		}

		public function get blurY():Number
		{
			// TODO
			return 0;
    	}

    	public function set blurY(value:Number):void
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

		public function get inner():Boolean
		{
			// TODO
			return false;
    	}

    	public function set inner(value:Boolean):void
		{
			// TODO
    	}

		public function get knockout():Boolean
		{
			// TODO
			return false;
    	}

    	public function set knockout(value:Boolean):void
		{
			// TODO
    	}

		public function get quality():int
		{
			// TODO
			return 0;
    	}

    	public function set quality(value:int):void
		{
			// TODO
    	}

		public function get strength():Number
		{
			// TODO
			return 0;
    	}

    	public function set strength(value:Number):void
		{
			// TODO
    	}

		public function GlowFilter(color:uint = 0xFF0000, alpha:Number = 1.0, blurX:Number = 6.0, blurY:Number = 6.0, strength:Number = 2, quality:int = 1, inner:Boolean = false, knockout:Boolean = false)
		{
			// TODO
		}

		override public function clone():BitmapFilter
		{
			// TODO
			return null;
		}
	}
}
