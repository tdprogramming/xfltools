package flash.errors
{
	public class StackOverflowError extends Error
	{
		public function StackOverflowError(message:String = "")
		{
			super(message);
		}
	}
}