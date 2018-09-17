package flash.display
{
	public class Bitmap extends DisplayObject
	{
		public var bitmapData:BitmapData;
		public var pixelSnapping:String;
 	 	public var smoothing:Boolean;

 	 	public function Bitmap(bitmapData:BitmapData = null, pixelSnapping:String = "auto", smoothing:Boolean = false)
		{
			if (bitmapData)
			{
				_javascriptImplementation = window["flashjs_display_Bitmap_construct"](bitmapData.canvas);
			}
		}
	}
}