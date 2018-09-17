package flash.display
{
	public class ShaderJob
	{
		public var height:int;

		private var _progress:Number;

		public function get progress():Number
		{
			return _progress;
		}

		public var shader:Shader;

		public var target:Object;

		public var width:int;

		public function ShaderJob(shader:Shader = null, target:Object = null, width:int = 0, height:int = 0)
		{

		}
	}
}