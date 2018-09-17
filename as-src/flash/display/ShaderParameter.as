package flash.display
{
	public class ShaderParameter
	{
		private var _index:int;

		public function get index():int
		{
			return _index;
		}

		private var _type:String;

		public function get type():String
		{
			return _type;
		}

 	 	public var value:Array;

		public function ShaderParameter()
		{
		
		}
	}
}