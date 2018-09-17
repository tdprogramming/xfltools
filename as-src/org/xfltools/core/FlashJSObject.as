package org.xfltools.core
{
	public class FlashJSObject
	{
		/**
		 * Use this to store an inlined Javascript implementation, such as a createjs DisplayObject
		 */
		protected var _javascriptImplementation:Object;

		public function get javascriptImplementation():Object
		{
			return _javascriptImplementation;
		}

		protected function throwSwfCompileError():void
		{
			throw new Error("Error - trying to instantiate a FlashJSObject Object when compiled for SWF. To target SWF, please compile your application using the standard Flex SDK.");
		}
	}
}