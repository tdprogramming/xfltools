package flash.display
{
	public class JPEGXREncoderOptions
	{
		public var colorSpace:String;
		public var quantization:uint;
		public var trimFlexBits:uint;

		public function JPEGXREncoderOptions(quantization:uint = 20, colorSpace:String = "auto", trimFlexBits:uint = 0)
		{
			this.colorSpace = colorSpace;
			this.quantization = quantization;
			this.trimFlexBits = trimFlexBits;
		}
	}
} 