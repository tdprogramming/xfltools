package org.xfltools.core
{
	import flash.events.Event;

	public class EventListener
	{
		private var _type:String;
		private var _listener:Function;

		public function EventListener(type:String, listener:Function)
		{
			_type = type;
			_listener = listener;
		}

		public function respondToEvent(event:Event):void
		{
			if (_type == event.type)
			{
				_listener(event);
			}
		}

		public function matches(type:String, listener:Function):Boolean
		{
			return _type == type && _listener == listener;
		}
	}
}