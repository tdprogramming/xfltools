package org.xfltools.xfldom 
{
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class TweenVO 
	{
		private var _time:Number;
		private var _vars:Object;
		
		
		public function TweenVO(time:Number) 
		{
			_time = time;
			_vars = {};
		}
		
		public function get time():Number
		{
			return _time;
		}
		
		public function set time(value:Number):void
		{
			_time = value;
		}
		
		public function get vars():Object
		{
			return _vars;
		}
		
		public function addVar(key:String, value:Number):void
		{
			_vars[key] = value;
		}
	}

}