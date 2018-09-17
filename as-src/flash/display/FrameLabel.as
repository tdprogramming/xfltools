package flash.display
{
	public class FrameLabel
	{
		private var _frame:int;
		private var _name:String;

		public function get frame():int
		{
			return _frame;
		}

 	 	public function get name():String
 	 	{
 	 		return _name;
 	 	}

		public function FrameLabel(name:String, frame:int)
		{
			_name = name;
			_frame = frame;
		}
	}
}