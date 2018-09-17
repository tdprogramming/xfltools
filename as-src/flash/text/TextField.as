package flash.text
{
	import flash.display.DisplayObject;
	import flash.display.InteractiveObject;
	import flash.geom.Rectangle;

	public class TextField extends InteractiveObject
	{

		public function TextField()
		{
			_javascriptImplementation = window["flashjs_text_TextField_construct"]();
		}

		public var alwaysShowSelection:Boolean;
		public var antiAliasType:String;
		public var autoSize:String;
		public var background:Boolean;
		public var backgroundColor:uint;
 	 	public var border:Boolean;
 	 	public var borderColor:uint;
 	 	public var bottomScrollV:int;
 	 	public var caretIndex:int;
 	 	public var condenseWhite:Boolean;
 	 	public var defaultTextFormat:flash.text.TextFormat;
 	 	public var displayAsPassword:Boolean;
 	 	public var embedFonts:Boolean;
 	 	public var gridFitType:String;
 	 	public var htmlText:String;
 	 	public var length:int;
 	 	public var maxChars:int;
 	 	public var maxScrollH:int;
 	 	public var maxScrollV:int;
 	 	public var mouseWheelEnabled:Boolean;
 	 	public var multiline:Boolean;
 	 	public var numLines:int;
 	 	public var restrict:String;
 	 	public var scrollH:int;
 	 	public var scrollV:int;
 	 	public var selectable:Boolean;
 	 	public var selectionBeginIndex:int;
 	 	public var selectionEndIndex:int;
 	 	public var sharpness:Number;
 	 	public var styleSheet:StyleSheet;
 	 	public var textColor:uint;
 	 	public var textHeight:Number;
 	 	public var textInteractionMode:String;
 	 	public var textWidth:Number;
 	 	public var thickness:Number;
 	 	public var type:String;
 	 	public var useRichTextClipboard:Boolean;
 	 	public var wordWrap:Boolean;

 	 	public function set text(newValue:String):void
 	 	{
 	 		_javascriptImplementation.text = newValue;
 	 	}

 	 	public function get text():String
 	 	{
 	 		return _javascriptImplementation.text;
 	 	}

 	 	/**
 	 	 * Appends the string specified by the newText parameter to the end of the text of the text field.
 	 	 */
		public function appendText(newText:String):void
		{
			// TODO
		}

		public function getCharBoundaries(charIndex:int):Rectangle
		{
			// TODO
			return null;
		}

		public function getCharIndexAtPoint(x:Number, y:Number):int
		{
			// TODO
			return 0;
		}

		public function getFirstCharInParagraph(charIndex:int):int
		{
			// TODO
			return 0;
		}

		public function getImageReference(id:String):DisplayObject
		{
			// TODO
			return null;
		}

		public function getLineIndexAtPoint(x:Number, y:Number):int
		{
			// TODO
			return 0;
		}

		public function getLineIndexOfChar(charIndex:int):int
		{
			// TODO
			return 0;
		}

		public function getLineLength(lineIndex:int):int
		{
			// TODO
			return 0;
		}

		public function getLineMetrics(lineIndex:int):flash.text.TextLineMetrics
		{
			// TODO
			return null;
		}

		public function getLineOffset(lineIndex:int):int
		{
			// TODO
			return 0;
		}

		public function getLineText(lineIndex:int):String
		{
			// TODO
			return null;
		}

		public function getParagraphLength(charIndex:int):int
		{
			// TODO
			return 0;
		}

		public function getTextFormat(beginIndex:int = -1, endIndex:int = -1):flash.text.TextFormat
		{
			// TODO
			return null;
		}

		public function isFontCompatible(fontName:String, fontStyle:String):Boolean
		{
			// TODO
			return false;
		}

		public function replaceSelectedText(value:String):void
		{
			// TODO
		}

		public function replaceText(beginIndex:int, endIndex:int, newText:String):void
		{
			// TODO
		}

		public function setSelection(beginIndex:int, endIndex:int):void
		{
			// TODO
		}

		public function setTextFormat(format:flash.text.TextFormat, beginIndex:int = -1, endIndex:int = -1):void
		{
			// TODO
		}
	}
}