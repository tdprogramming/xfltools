package flash.display
{
	import flash.utils.ByteArray;

	public class Shader
	{
		public var byteCode:ByteArray;
		public var data:ShaderData;

		public function Shader(code:ByteArray = null)
		{
			this.byteCode = code;
		}		
	}
}