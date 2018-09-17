package flash.filters
{
	public class BlurFilter extends BitmapFilter
	{
		public function get blurX():Number
		{
			return _javascriptImplementation.blurX;
    	}
		
    	public function set blurX(value:Number):void
		{
			_javascriptImplementation.blurX = value;
		}		

	    public function get blurY():Number
		{
			return _javascriptImplementation.blurY;
	    }
	
	    public function set blurY(value:Number):void
		{
			_javascriptImplementation.blurY = value;
		}	

	    public function get quality():int
		{
			return _javascriptImplementation.quality;
    	}
	
	    public function set quality(value:int):void
		{
			_javascriptImplementation.quality = value;
		}
		
		public function BlurFilter(blurX:Number = 4.0, blurY:Number = 4.0, quality:int = 1)
		{
			_javascriptImplementation = window["flashjs_filters_BlurFilter_construct"](blurX, blurY, quality);
		}		
		
		override public function clone():BitmapFilter
		{
			return new BlurFilter(blurX, blurY, quality);
		}		
	}
}
