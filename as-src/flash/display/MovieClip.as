package flash.display
{
	import flash.utils.Dictionary;

	public class MovieClip extends Sprite
	{
		private var _currentFrame:int;
		private var _timeline:Object;
		private var _tweensByDisplayObject:Dictionary;
		
		public function MovieClip()
		{
			super();

			_timeline = window["flashjs_display_MovieClip_getTimeline"]();
			_tweensByDisplayObject = new Dictionary();
		}

		public function tweenChild(child:DisplayObject, props:Object, duration:Number):void
		{
			if (_tweensByDisplayObject[child] == null)
			{
				_tweensByDisplayObject[child] = window["flashjs_display_MovieClip_getTween"](child);
				_timeline.addTween(_tweensByDisplayObject[child]);
			}
		
			_tweensByDisplayObject[child].to(props, duration * 1000);
			
			_timeline.updateDuration();
		}

		public function get currentFrame():int
		{
			return _currentFrame;
		}

 	 	private var _currentFrameLabel:String;

 	 	public function get currentFrameLabel():String
 	 	{
 	 		return _currentFrameLabel;
 	 	}

		private var _currentLabel:String;

		public function get currentLabel():String
		{
			return _currentLabel;
		}

		private var _currentLabels:Array;

		public function get currentLabels():Array
		{
			return [];
		}

		private var _currentScene:Scene;

		public function get currentScene():Scene
		{
			return _currentScene;
		}

 	 	public var enabled:Boolean;

 	 	private var _framesLoaded:int;

 	 	public function get framesLoaded():int
 	 	{
 	 		return _framesLoaded;
 	 	}

 	 	private var _isPlaying:Boolean;

 	 	public function get isPlaying():Boolean
 	 	{
 	 		return _isPlaying;
 	 	}

 	 	private var _scenes:Array;

 	 	public function get scenes():Array
 	 	{
 	 		return _scenes;
 	 	}

 	 	private var _totalFrames:int;

 	 	public function get totalFrames():int
 	 	{
 	 		return _totalFrames;
 	 	}

 	 	public var trackAsMenu:Boolean;

		public function gotoAndPlay(frame:Object, scene:String = null):void
		{

		}

		public function gotoAndStop(frame:Object, scene:String = null):void
		{

		}

		public function nextFrame():void
		{

		}

		public function nextScene():void
		{

		}

		public function play():void
		{

		}
 	 	
		public function prevFrame():void
		{

		}

		public function prevScene():void
		{

		}

		public function stop():void
		{

		}
	}
}