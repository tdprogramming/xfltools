package flash.filters
{
	public class DropShadowFilter extends BitmapFilter
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
		
		public function get angle():Number
		{
			// TODO
			return 0;
    	}
		
	    public function set angle(value:Number):void
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

		public function get distance():Number
		{
			// TODO
			return 0;
    	}		

    	public function set distance(value:Number):void
		{
			// TODO
		}

		public function get hideObject():Boolean
		{
			// TODO
			return false;
    	}		

    	public function set hideObject(value:Boolean):void
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

		public function DropShadowFilter(distance:Number = 4.0, angle:Number = 45, color:uint = 0, alpha:Number = 1.0, blurX:Number = 4.0, blurY:Number = 4.0, strength:Number = 1.0, quality:int = 1, inner:Boolean = false, knockout:Boolean = false, hideObject:Boolean = false)
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
