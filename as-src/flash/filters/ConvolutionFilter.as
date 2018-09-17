package flash.filters
{
	public class ConvolutionFilter extends BitmapFilter
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

		public function get bias():Number
		{
			// TODO			
			return 0;
    	}		

	    public function set bias(value:Number):void
		{
			// TODO
		}	

	    public function get clamp():Boolean
		{
			// TODO
			return false;
    	}		

    	public function set clamp(value:Boolean):void
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

    	public function get divisor():Number
		{
			// TODO
			return 0;
    	}

    	public function set divisor(value:Number):void
		{
			// TODO	
		}		
		
		public function get matrix():Array
		{
			// TODO
			return [];
    	}
		
    	public function set matrix(value:Array):void
		{
			// TODO
		}

	    public function get matrixX():Number
		{
			// TODO
			return 0;
    	}		

    	public function set matrixX(value:Number):void
		{
			// TODO	
		}		

    	public function get matrixY():Number
		{
			// TODO
			return 0;
    	}		

    	public function set matrixY(value:Number):void
		{
			// TODO			
		}
	
		public function get preserveAlpha():Boolean
		{
			// TODO
			return false;			
    	}		

    	public function set preserveAlpha(value:Boolean):void
		{
			// TODO			
		}

		public function ConvolutionFilter(matrixX:Number = 0, matrixY:Number = 0, matrix:Array = null, divisor:Number = 1.0, bias:Number = 0.0, preserveAlpha:Boolean = true, clamp:Boolean = true, color:uint = 0, alpha:Number = 0.0)
		{
			// TODO	
		}		

		override public function clone():BitmapFilter
		{
			return null;
		}
	}	
}
