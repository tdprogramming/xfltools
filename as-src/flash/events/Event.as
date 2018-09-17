package flash.events
{
	import org.xfltools.core.FlashJSObject;

	public class Event extends FlashJSObject
	{
		private var _bubbles:Boolean;
		private var _cancelable:Boolean;
		private var _currentTarget:Object;
		private var _eventPhase:uint;
		private var _target:Object;
		private var _type:String;
		private var _isDefaultPrevented:Boolean = false;

		/**
		 * @flexjsignorecoercion createjs.Event;
		 */
		public function Event(type:String, bubbles:Boolean = false, cancelable:Boolean = false)
		{
			_javascriptImplementation = window["flashjs_events_Event_construct"](type, bubbles, cancelable);
			_type = type;
		}

		public function clone():flash.events.Event
		{
			return new flash.events.Event(type, bubbles, cancelable);
		}

		public function isDefaultPrevented():Boolean
		{
			return _isDefaultPrevented;
		}

		public function preventDefault():void
		{
			// TODO
			_isDefaultPrevented = true;
		}

		public function stopImmediatePropagation():void
		{
			// TODO
		}

		public function stopPropagation():void
		{
			// TODO
		}

		public function get bubbles():Boolean
		{
			return _bubbles;
		}
		
		public function get cancelable():Boolean
		{
			return cancelable;
		}
		
		public function get currentTarget():Object
		{
			return _currentTarget;
		}

		public function get eventPhase():uint
		{
			return _eventPhase;
		}
		
		public function set target(newValue:Object):void
		{
			_target = newValue;
		}

		public function get target():Object
		{
			return _target;
		}

		public function get type():String
		{
			return _type;
		}

 	 	public static const ACTIVATE:String = "activate";
 	 	public static const ADDED:String = "added";
 	 	public static const ADDED_TO_STAGE:String = "addedToStage";
 	 	public static const BROWSER_ZOOM_CHANGE:String = "browserZoomChange";
 	 	public static const CANCEL:String = "cancel";
 	 	public static const CHANGE:String = "change";
 	 	public static const CHANNEL_MESSAGE:String = "channelMessage";
 	 	public static const CHANNEL_STATE:String = "channelState";
 	 	public static const CLEAR:String = "clear";
 	 	public static const CLOSE:String = "close";
 	 	public static const CLOSING:String = "closing";
 	 	public static const COMPLETE:String = "complete";
 	 	public static const CONNECT:String = "connect";
 	 	public static const CONTEXT3D_CREATE:String = "context3DCreate";
 	 	public static const COPY:String = "copy";
 	 	public static const CUT:String = "cut";
 	 	public static const DEACTIVATE:String = "deactivate";
 	 	public static const DISPLAYING:String = "displaying";
 	 	public static const ENTER_FRAME:String = "enterFrame";
 	 	public static const EXIT_FRAME:String = "exitFrame";
 	 	public static const EXITING:String = "exiting";
 	 	public static const FRAME_CONSTRUCTED:String = "frameConstructed";
 	 	public static const FRAME_LABEL:String = "frameLabel";
 	 	public static const FULLSCREEN:String = "fullScreen";
 	 	public static const HTML_BOUNDS_CHANGE:String = "htmlBoundsChange";
 	 	public static const HTML_DOM_INITIALIZE:String = "htmlDOMInitialize";
 	 	public static const HTML_RENDER:String = "htmlRender";
 	 	public static const ID3:String = "id3";
 	 	public static const INIT:String = "init";
 	 	public static const LOCATION_CHANGE:String = "locationChange";
 	 	public static const MOUSE_LEAVE:String = "mouseLeave";
 	 	public static const NETWORK_CHANGE:String = "networkChange";
 	 	public static const OPEN:String = "open";
 	 	public static const PASTE:String = "paste";
 	 	public static const PREPARING:String = "preparing";
 	 	public static const REMOVED:String = "removed";
 	 	public static const REMOVED_FROM_STAGE:String = "removedFromStage";
 	 	public static const RENDER:String = "render";
 	 	public static const RESIZE:String = "resize";
 	 	public static const SCROLL:String = "scroll";
 	 	public static const SELECT:String = "select";
 	 	public static const SELECT_ALL:String = "selectAll";
 	 	public static const SOUND_COMPLETE:String = "soundComplete";
 	 	public static const STANDARD_ERROR_CLOSE:String = "standardErrorClose";
 	 	public static const STANDARD_INPUT_CLOSE:String = "standardInputClose";
 	 	public static const STANDARD_OUTPUT_CLOSE:String = "standardOutputClose";
 	 	public static const SUSPEND:String = "suspend";
 	 	public static const TAB_CHILDREN_CHANGE:String = "tabChildrenChange";
 	 	public static const TAB_ENABLED_CHANGE:String = "tabEnabledChange";
 	 	public static const TAB_INDEX_CHANGE:String = "tabIndexChange";
		public static const TEXT_INTERACTION_MODE_CHANGE:String = "textInteractionModeChange";
 	 	public static const TEXTURE_READY:String = "textureReady";
 	 	public static const TICK:String = "tick";
 	 	public static const UNLOAD:String = "unload";
 	 	public static const USER_IDLE:String = "userIdle";
 	 	public static const USER_PRESENT:String = "userPresent";
 	 	public static const VIDEO_FRAME:String = "videoFrame";
 	 	public static const WORKER_STATE:String = "workerState";
	}
}