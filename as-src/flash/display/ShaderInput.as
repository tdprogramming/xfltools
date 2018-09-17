package flash.display
{
	public final dynamic class ShaderInput
	{
		private var _channels:int;

		public function get channels():int
		{
			return _channels;
		}

 	 	public var height:int;

		private var _index:int;

		public function get index():int
		{
			return _index;
		}

 	 	public var input:Object;

 	 	public var width:int;
	}
}