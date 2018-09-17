package flash.utils
{
	import org.apache.royale.utils.BinaryData;

	/**
	 * Wrapper for Apache Byte Array
	 */
	public class ByteArray
	{
		private var _binaryData:BinaryData;

		internal function get binaryData():BinaryData
		{
			return _binaryData;
		}
		
		/**
		 * The number of bytes of data available for reading from the current position in the byte array to the end of the array.
		 */
		public function get bytesAvailable():uint
		{
			return _binaryData.bytesAvailable;
		}

		/**
		 * Denotes the default object encoding for the ByteArray class to use for a new ByteArray instance.
		 */
		public static function get defaultObjectEncoding():uint
		{
			// TODO
			return 0;
		}


		public function set endian(value:String):void
		{
			_binaryData.endian = value;	
		}
		
		public function get endian():String
		{
			return _binaryData.endian;	
		}

		public function set length(value:uint):void
		{
			_binaryData.length = value;
		}

		public function get length():uint
		{
			return _binaryData.length;
		}
		
		public function set objectEncoding(value:uint):void
		{
			// NO-OP because Royale only supports actionscript 3, the value will always be 3	
		}

		public function get objectEncoding():uint
		{
			return 3;
		}
	
		public function set position(value:uint):void
		{
			_binaryData.position = value;
 	 	}

		public function get position():uint
		{
			return _binaryData.position;
 	 	}		
 	 	
		public function get shareable():Boolean
		{
			// TODO, for now, always false
			return false;
		}
		
    	public function set shareable(value:Boolean):void
		{
			// TODO, for now, always false
 	 	}
 	 	
		/**
		 * Creates a ByteArray instance representing a packed array of bytes, so that you can use the methods and properties in this class to optimize your data storage and stream.
		 */
		public function ByteArray()
		{
			_binaryData = new BinaryData();
		}

		/**
		 * In a single atomic operation, compares an integer value in this byte array with another integer value and, if they match, swaps those bytes with another value.
		 * Please note that this is emulated for compatibility so won't be useful for performance
		 */ 	 	
		public function atomicCompareAndSwapIntAt(byteIndex:int, expectedValue:int, newValue:int):int
		{
			if (_binaryData.length <= byteIndex)
			{
				throw new Error("Error, index out of bounds");
			}
		
			var oldValue:int = _binaryData.array[byteIndex];
		
			if (_binaryData.array[byteIndex] == expectedValue)
			{
				_binaryData.writeByteAt(byteIndex, newValue);
			}
			
			return oldValue;
		}
		
		/**
		 * In a single atomic operation, compares this byte array's length with a provided value and, if they match, changes the length of this byte array.
		 * Please note that this is emulated for compatibility so won't be useful for performance
		 */		
		public function atomicCompareAndSwapLength(expectedLength:int, newLength:int):int
		{
			var oldValue:int = _binaryData.length;
		
			if (_binaryData.length == expectedLength)
			{
				_binaryData.length = newLength;
			}
			
			return oldValue;
		}

		public function clear():void
		{
			_binaryData.length = 0;
		}

		/**
		 * Compresses the byte array.
		 */		
		public function compress(algorithm:String):void
		{
			// TODO
		}		

		/**
		 * Compresses the byte array using the deflate compression algorithm.
		 */ 	 	
		public function deflate():void
		{
			// TODO	
		}

		/**
		 * Decompresses the byte array using the deflate compression algorithm.
		 */		
		public function inflate():void
		{
			// TODO	
		}
		
		/**
		 * Reads a Boolean value from the byte stream.
		 */
		public function readBoolean():Boolean
		{
			return _binaryData.readBoolean();
		}		

		/**
		 * Reads a signed byte from the byte stream.
		 */ 	 	
		public function readByte():int
		{
			return _binaryData.readByte();
		}

		/**
		 * Reads the number of data bytes, specified by the length parameter, from the byte stream.
		 */
		public function readBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void
		{
			_binaryData.readBytes(bytes.binaryData, offset, length);
		}

		/**
		 * Reads an IEEE 754 double-precision (64-bit) floating-point number from the byte stream.
		 */
		public function readDouble():Number
		{
			return _binaryData.readDouble();
		}

		/**
		 * Reads an IEEE 754 single-precision (32-bit) floating-point number from the byte stream.
		 */		
		public function readFloat():Number
		{
			return _binaryData.readFloat();
		}

		/**
		 * Reads a signed 32-bit integer from the byte stream.
		 */		
		public function readInt():int
		{
			return _binaryData.readInt();
		}

		/**
		 * Reads a multibyte string of specified length from the byte stream using the specified character set.
		 */
		public function readMultiByte(length:uint, charSet:String):String
		{
			// TODO
			return "";
		}

		/**
		 * Reads an object from the byte array, encoded in AMF serialized format.
		 */
		public function readObject():*
		{
			// TODO
			return null;
		}

		/**
		 * Reads a signed 16-bit integer from the byte stream.
		 */
		public function readShort():int
		{
			return _binaryData.readShort();	
		}

		/**
		 * Reads an unsigned byte from the byte stream.
		 */ 	 	
		public function readUnsignedByte():uint
		{
			return _binaryData.readUnsignedByte();
		}

		/**
		 * Reads an unsigned 32-bit integer from the byte stream.
		 */ 	 	
		public function readUnsignedInt():uint
		{
			return _binaryData.readUnsignedInt();
		}

		/**
		 * Reads an unsigned 16-bit integer from the byte stream.
		 */
		public function readUnsignedShort():uint
		{
			return _binaryData.readUnsignedShort();	
		}

		/**
		 * Reads a UTF-8 string from the byte stream.
		 */
		public function readUTF():String
		{
			return _binaryData.readUTF();
		}		

		/**
		 * Reads a sequence of UTF-8 bytes specified by the length parameter from the byte stream and returns a string.
		 */ 	 	
		public function readUTFBytes(length:uint):String
		{
			return _binaryData.readUTFBytes(length);
		}

		/**
		 * Provides an overridable method for customizing the JSON encoding of values in an ByteArray object.
		 * Commented ATM as throws Flex JS compile error 
		 */ 	 	
		//public function toJSON(k:String):*
		//{
			// TODO
		//	return null;
		//}		

		/**
		 * Converts the byte array to a string.
		 */ 	 	
		public function toString():String
		{
			// TODO
			return "";	
		}		

		/**
		 * Decompresses the byte array.
		 */ 	 	
		public function uncompress(algorithm:String):void
		{
			// TODO
		}		
 	 	
		/**
		 * Writes a Boolean value.
		 */
		public function writeBoolean(value:Boolean):void
		{
			_binaryData.writeBoolean(value);
		}
 	 	
		/**
		 * Writes a byte to the byte stream.
		 */
		public function writeByte(value:int):void
		{
			_binaryData.writeByte(value);
		}

		/**
		 * Writes a sequence of length bytes from the specified byte array, bytes, starting offset(zero-based index) bytes into the byte stream.
		 */ 	 	
		public function writeBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void
		{
			_binaryData.writeBytes(bytes.binaryData, offset, length);
		}
 	 	
		/**
		 * Writes an IEEE 754 double-precision (64-bit) floating-point number to the byte stream.
		 */
		public function writeDouble(value:Number):void
		{
			_binaryData.writeDouble(value);
		}
 	 	
		/**
		 * Writes an IEEE 754 single-precision (32-bit) floating-point number to the byte stream.
		 */
		public function writeFloat(value:Number):void
		{
			_binaryData.writeFloat(value);
		}
		
		/**
		 * Writes a 32-bit signed integer to the byte stream.
		 */ 	 	
		public function writeInt(value:int):void
		{
			_binaryData.writeInt(value);
		}		
		
		/**
		 * Writes a multibyte string to the byte stream using the specified character set.
		 */ 	 	
		public function writeMultiByte(value:String, charSet:String):void
		{
			// TODO
		}
		
		/**
		 * Writes an object into the byte array in AMF serialized format.
		 */ 	 	
		public function writeObject(object:*):void
		{
			// TODO
		}		
		
		/**
		 * Writes a 16-bit integer to the byte stream.
		 */ 	 	
		public function writeShort(value:int):void
		{
			_binaryData.writeShort(value);
		}		
		
		/**
		 * Writes a 32-bit unsigned integer to the byte stream.
		 */ 	 	
		public function writeUnsignedInt(value:uint):void
		{
			_binaryData.writeUnsignedInt(value);
		}		
		
		/**
		 * Writes a UTF-8 string to the byte stream.
		 */ 	 	
		public function writeUTF(value:String):void
		{
			_binaryData.writeUTF(value);
		}		
		 
		/**
	 	 * Writes a UTF-8 string to the byte stream.
 		 */	 	
		public function writeUTFBytes(value:String):void
		{
			_binaryData.writeUTFBytes(value);
		}
	}
}