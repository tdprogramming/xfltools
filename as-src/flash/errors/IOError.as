package flash.errors
{
	public class IOError extends Error
	{
		public function IOError(message:String = "")
		{
			this.message = message;
		}
	}
}