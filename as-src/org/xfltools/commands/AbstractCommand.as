package org.xfltools.commands 
{
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class AbstractCommand extends EventDispatcher 
	{
		
		public function AbstractCommand() 
		{
			super();
			
		}
		
		public function execute():void
		{
			// Override me
		}
		
		protected function complete():void
		{
			dispatchEvent(new Event(Event.COMPLETE));
		}
		
	}

}