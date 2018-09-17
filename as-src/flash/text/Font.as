package flash.text
{
	public class Font
	{
		public var fontName:String;
	 	public var fontStyle:String;
	 	public var fontType:String;

		public static function enumerateFonts(enumerateDeviceFonts:Boolean = false):Array
		{
			// TODO 
			return [];
		}

		public function hasGlyphs(str:String):Boolean
		{
			// TODO
			return false;
		}

		public static function registerFont(font:Class):void
		{
			// TODO
		}
	}
}