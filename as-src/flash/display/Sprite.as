package flash.display
{
	import flash.geom.Rectangle;
	import flash.display.Graphics;

	public class Sprite extends DisplayObjectContainer
	{
		public function Sprite()
		{
			super();
			_graphics = new Graphics();
			_javascriptImplementation.addChild(_graphics.javascriptImplementation);
		}

		public var buttonMode:Boolean;		// TODO

		public var dropTarget:DisplayObject;	// TODO

		private var _graphics:Graphics;

		public var hitArea:Sprite;		// TODO

		//public var soundTransform : flash.media:soundTransform   // TODO

		public var useHandCursor:Boolean; 

		public function get graphics():Graphics
		{
			return _graphics;
		}

		public function startDrag(lockCenter:Boolean = false, bounds:Rectangle = null):void
		{
			// TODO
		}

		public function startTouchDrag(touchPointID:int, lockCenter:Boolean = false, bounds:Rectangle = null):void
		{
			// TODO
		}

		public function stopDrag():void
		{
			// TODO
		}

		public function stopTouchDrag(touchPointID:int):void
		{
			// TODO
		}
	}
}