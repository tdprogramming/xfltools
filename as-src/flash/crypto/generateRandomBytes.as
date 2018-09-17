package flash.display.crypto
{
	import flash.utils.ByteArray;

	function generateRandomBytes(numberRandomBytes:uint):ByteArray
	{
		var result:ByteArray = new ByteArray;

		var randomArray:Array = window["flashjs_crypto_generateRandomBytes"]();

		for (var i:int = 0; i < randomArray.length; i++)
		{
			result.writeByte(randomArray[i]);
		}

		return result;
	}

}