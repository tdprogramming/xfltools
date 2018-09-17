package flash.display
{
	import flash.events.EventDispatcher;
	import flash.events.UncaughtErrorEvents;
	import flash.system.ApplicationDomain;
	import flash.utils.ByteArray;

	public class LoaderInfo
	{
		private var _actionScriptVersion:uint;		// TODO

		public function get actionScriptVersion():uint
		{
			return _actionScriptVersion;
		}

		/**
		 * When an external SWF file is loaded, all ActionScript 3.0 definitions contained in the loaded class are stored in the applicationDomain property.
		 */
 	 	public function get applicationDomain():ApplicationDomain
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * The bytes associated with a LoaderInfo object.
 	 	 */
		public function get bytes():ByteArray
		{
			// TODO
			return null;
		}

		/**
		 * The number of bytes that are loaded for the media.
		 */
 	 	public function get bytesLoaded():uint
 	 	{
 	 		// TODO
 	 		return 0;
 	 	}

 	 	/**
 	 	 * The number of compressed bytes in the entire media file.
 	 	 */
 	 	public function get bytesTotal():uint
 	 	{
 	 		// TODO
 	 		return 0;
 	 	}

 	 	/**
 	 	 * Expresses the trust relationship from content (child) to the Loader (parent).
 	 	 */
 	 	public function get childAllowsParent():Boolean
 	 	{
 	 		// TODO
 	 		return false;
 	 	}

 	 	/**
 	 	 * A object that can be set by the loaded content's code to expose properties and methods that can be accessed by code in the Loader object's sandbox.
 	 	 */
 	 	public function get childSandboxBridge():Object
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * The loaded object associated with this LoaderInfo object.
 	 	 */
 	 	public function get content():DisplayObject
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * The MIME type of the loaded file.
 	 	 */
 	 	public function get contentType():String
 	 	{
 	 		// TODO
 	 		return "";
 	 	}

 	 	/**
 	 	 * The nominal frame rate, in frames per second, of the loaded SWF file.
 	 	 */
 	 	public function get frameRate():Number
 	 	{
 	 		// TODO
 	 		return 0;
 	 	}

 	 	/**
 	 	 * The nominal height of the loaded file.
 	 	 */
 	 	public function get height():int
 	 	{
 	 		// TODO
 	 		return 0;
 	 	}

 	 	/**
 	 	 * Indicates if the LoaderInfo.url property has been truncated.
 	 	 */
 	 	public function get isURLInaccessible():Boolean
 	 	{
 	 		// TODO
 	 		return false;
 	 	}

 	 	/**
 	 	 * The Loader object associated with this LoaderInfo object.
 	 	 */
		public function get loader():Loader
		{
			// TODO
			return null;
		}

		/**
		 * The URL of the SWF file that initiated the loading of the media described by this LoaderInfo object.
		 */
 	 	public function get loaderURL():String
 	 	{
 	 		// TODO
 	 		return "";
 	 	}

 	 	/**
 	 	 * An object that contains name-value pairs that represent the parameters provided to the loaded SWF file.
 	 	 */
 	 	public function get parameters():Object
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * Expresses the trust relationship from Loader (parent) to the content (child).
 	 	 */
 	 	public function get parentAllowsChild():Boolean
 	 	{
 	 		// TODO
 	 		return false;
 	 	}

 	 	/**
 	 	 * A object that can be set by code in the Loader object's sandbox to expose properties and methods that can be accessed by the loaded content's code.
 	 	 */
 	 	public function get parentSandboxBridge():Object
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * Expresses the domain relationship between the loader and the content: true if they have the same origin domain; false otherwise.
 	 	 */
	 	public function get sameDomain():Boolean
	 	{
	 		// TODO
	 		return false;
	 	}

	 	/**
	 	 * An EventDispatcher instance that can be used to exchange events across security boundaries.
	 	 */
 	 	public function get sharedEvents():EventDispatcher
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * The file format version of the loaded SWF file.
 	 	 */
 	 	public function get swfVersion():uint
 	 	{
 	 		// TODO
 	 		return 0;
 	 	}

 	 	/**
 	 	 * An object that dispatches an uncaughtError event when an unhandled error occurs in code in this LoaderInfo object's SWF file.
 	 	 */
 	 	public function get uncaughtErrorEvents():UncaughtErrorEvents
 	 	{
 	 		// TODO
 	 		return null;
 	 	}

 	 	/**
 	 	 * The URL of the media being loaded.
 	 	 */
 	 	public function get url():String
 	 	{
 	 		// TODO
 	 		return "";
 	 	}

 	 	/**
 	 	 * The nominal width of the loaded content.
 	 	 */
 	 	public function get width():int
 	 	{
 	 		// TODO
 	 		return 0;
 	 	}
		
		/**
		 * Returns the LoaderInfo object associated with a SWF file defined as an object.
		 */
		public function getLoaderInfoByDefinition(object:Object):LoaderInfo
		{
			// TODO
			return null;
		}

/*
Events

complete
	Dispatched when data has loaded successfully.	LoaderInfo
 	 	
httpStatus
	Dispatched when a network request is made over HTTP and an HTTP status code can be detected.	LoaderInfo
 	 	
init
	Dispatched when the properties and methods of a loaded SWF file are accessible and ready for use.	LoaderInfo
 	 	
ioError
	Dispatched when an input or output error occurs that causes a load operation to fail.	LoaderInfo
 	 	
open
	Dispatched when a load operation starts.	LoaderInfo
 	 	
progress
	Dispatched when data is received as the download operation progresses.	LoaderInfo
 	 	
unload
	Dispatched by a LoaderInfo object whenever a loaded object is removed by using the unload() method of the Loader object, or when a second load is performed by the same Loader object and the original content is removed prior to the load beginning.
	*/
	}
}