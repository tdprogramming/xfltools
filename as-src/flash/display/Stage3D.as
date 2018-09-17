package flash.display
{
	import flash.events.EventDispatcher;
	import flash.display3D.Context3D;

	public class Stage3D extends EventDispatcher
	{
		private var _context3D:Context3D;

		public function get context3D():Context3D
		{
			return _context3D;
		}

		private var _visible:Boolean;

 	 	public function get visible():Boolean
 	 	{
 	 		return _visible;
 	 	}

 	 	public var x:Number;

 	 	public var y:Number;

 	 	public function Stage3D()
 	 	{

 	 	}

		public function requestContext3D(context3DRenderMode:String = "auto", profile:String = "baseline"):void
		{

		}

		public function requestContext3DMatchingProfiles(profiles:Vector.<String>):void
		{

		}
}