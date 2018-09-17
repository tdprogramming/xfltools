function flashjs_crypto_generateRandomBytes(numberRandomBytes) 
{
	var uint8Array = new Uint8Array(numberRandomBytes)

	window.crypto.getRandomValues(uint8Array);

	return uint8Array;
}