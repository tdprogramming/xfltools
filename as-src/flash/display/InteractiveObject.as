package flash.display
{
	import flash.geom.Rectangle;
	import flash.accessibility.AccessibilityImplementation;

	public class InteractiveObject extends DisplayObject
	{
		public var accessibilityImplementation:AccessibilityImplementation;		// TODO

		public var contextMenu:NativeMenu;		// TODO

		public var doubleClickEnabled:Boolean;	// TODO

		public var focusRect:Object;			// TODO

		public var mouseEnabled:Boolean;		// TODO

 	 	public var needsSoftKeyboard:Boolean;	// TODO

 	 	public var softKeyboard:String;			// TODO

 	 	public var oftKeyboardInputAreaOfInterest:Rectangle;		// TODO

 	 	public var tabEnabled:Boolean;			// TODO

 	 	public var tabIndex:int;				// TODO

		public function requestSoftKeyboard():Boolean
		{
			// TODO
			return false;
		}
	}
}