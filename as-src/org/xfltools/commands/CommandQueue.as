package org.xfltools.commands 
{
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class CommandQueue extends EventDispatcher 
	{
		private var _locked:Boolean = false;
		private var _commands:Vector.<AbstractCommand> = new <AbstractCommand>[];
		
		public function CommandQueue() 
		{
			super();
		}
		
		public function queue(command:AbstractCommand):void
		{
			if (_locked)
			{
				throw new Error("ERROR - CommandQueue.queue() - cannot queue a command after execution has started.");
			}
			
			_commands.push(command);
		}
		
		public function execute():void
		{
			if (_locked)
			{
				throw new Error("ERROR - CommandQueue.execute() - cannot call execute twice.");
			}
			
			_locked = true;
			
			nextCommand();
		}
		
		private function nextCommand(event:Event = null):void
		{
			if (event)
			{
				_commands[0].removeEventListener(Event.COMPLETE, nextCommand);
				_commands.shift();
			}
			
			if (!_commands.length)
			{
				complete();
				return;
			}
			
			_commands[0].addEventListener(Event.COMPLETE, nextCommand);
			_commands[0].execute();
		}
		
		protected function complete():void
		{
			_locked = false;
			dispatchEvent(new Event(Event.COMPLETE));
		}
	}

}