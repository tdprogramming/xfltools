package flash.events
{
	import org.xfltools.core.ApplicationFactory;
	import org.xfltools.core.FlashJSObject;
	import org.xfltools.core.EventListener;
	
	public class EventDispatcher extends FlashJSObject implements IEventDispatcher
	{
		private var _eventListeners:Vector.<EventListener>;
		private var _createJSTicker:Object;

		public function EventDispatcher(target:IEventDispatcher = null)
		{
			_javascriptImplementation = window["flashjs_events_EventDispatcher_construct"]();
			
			_eventListeners = new Vector.<EventListener>();
		}

		protected function startFrameTicker():void
		{
			_createJSTicker = window["getCreateJSTicker"]();
			_createJSTicker.addEventListener(Event.TICK, dispatchEnterFrame);
		}
;
		/**
		 * Create JS only "ticks" objects in the display list whereas flash ticks everything.
		 */
		protected function dispatchEnterFrame(event:Object):void
		{
			dispatchEvent(new Event(Event.ENTER_FRAME));
		}

		/**
		 * TODO - home brew events system doesn't bubble events up and down the display list yet, only adds an event listener to this object
		 */
		public function addEventListener(type:String, listener:Function, useCapture:Boolean=false, priority:int=0, useWeakReference:Boolean = false):void
		{
			if (type == Event.ENTER_FRAME && _createJSTicker == null)
			{
				_createJSTicker = window["getCreateJSTicker"]();
				_createJSTicker.addEventListener(Event.TICK, dispatchEnterFrame);
			}
		
			var numListeners:int = _eventListeners.length;

			for (var i:int = 0; i < numListeners; i++)
			{
				if (_eventListeners[i].matches(type, listener))
				{
					return;		// already listening
				}
			}

			_eventListeners.push(new EventListener(type, listener));
		}

	    public function removeEventListener(type:String, listener:Function, useCapture:Boolean=false):void
    	{
			var numListeners:int = _eventListeners.length;

			for (var i:int = numListeners - 1; i >= 0; i--)
			{
				if (_eventListeners[i].matches(type, listener))
				{
					_eventListeners.splice(i, 1);
				}
			}
    	} 

	    public function dispatchEvent(event:Event):Boolean
	    {
	    	event.target = this;

	    	for each (var eventListener:EventListener in _eventListeners)
	    	{
	    		eventListener.respondToEvent(event);
	    	}	
	    	
	    	return true;
	    } 

	    public function hasEventListener(type:String):Boolean
	    {
	    	return _javascriptImplementation.hasEventListener(type);
	    } 

	    public function willTrigger(type:String):Boolean
	    {
	    	return _javascriptImplementation.willTrigger(type);
	    }
	}
}