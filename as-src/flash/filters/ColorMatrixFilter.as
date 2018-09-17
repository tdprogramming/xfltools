package flash.filters
{
	public class ColorMatrixFilter extends BitmapFilter
	{
		public function get matrix():Array
		{
			return _javascriptImplementation.matrix;
    	}		

    	public function set matrix(value:Array):void
		{
			_javascriptImplementation.matrix = value;
		}

		public function ColorMatrixFilter(matrix:Array = null)
		{
			_javascriptImplementation = window["flashjs_filters_ColorMatrixFilter_construct"](matrix);
		}

		override public function clone():BitmapFilter
		{
			return new ColorMatrixFilter(matrix);
		}
	}
}