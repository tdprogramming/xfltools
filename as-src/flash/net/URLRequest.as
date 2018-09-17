package flash.net
{
	public class URLRequest
	{
		/**
		 * Specifies whether authentication requests should be handled (true or not (false) for this request.
		 */
		// public var authenticate:Boolean;	// AIR ONLY

		/**
		 * Specifies whether successful response data should be cached for this request.
		 */
 	 	// public var cacheResponse:Boolean;	// AIR ONLY

 	 	/**
 	 	 * The MIME content type of the content in the the data property.
 	 	 */
 	 	public var contentType:String;

 	 	/**
 	 	 * An object containing data to be transmitted with the URL request.
 	 	 */
 	 	public var data:Object;

 	 	/**
 	 	 * A string that uniquely identifies the signed Adobe platform component to be stored to (or retrieved from) the Flash Player cache.
 	 	 */
 	 	public var digest:String;

 	 	/**
 	 	 * Specifies whether redirects are to be followed (true) or not (false).
 	 	 */
 	 	public var followRedirects:Boolean;

 	 	/**
 	 	 * Specifies the idle timeout value (in milliseconds) for this request.
 	 	 */
 	 	// public var idleTimeout:Number;		// AIR ONLY

 	 	/**
 	 	 * Specifies whether the HTTP protocol stack should manage cookies for this request.
 	 	 */
 	 	// public var manageCookies:Boolean;		// AIR ONLY

 	 	/**
 	 	 * Controls the HTTP form submission method.
 	 	 */
 	 	public var method:String;

 	 	/**
 	 	 * The array of HTTP request headers to be appended to the HTTP request.
 	 	 */
 	 	public var requestHeaders:Array;

 	 	/**
 	 	 * The URL to be requested.
 	 	 */
 	 	public var url:String;

 	 	/**
 	 	 * Specifies whether the local cache should be consulted before this URLRequest fetches data.
 	 	 */
 	 	// public var useCache:Boolean;		// AIR ONLY

 	 	/**
 	 	 * Specifies the user-agent string to be used in the HTTP request.
 	 	 */
 	 	public var userAgent:String;

 	 	/**
 	 	 * Creates a URLRequest object.
 	 	 */
		public function URLRequest(url:String = null)
		{
			this.url = url;
		}

		/**
		 * Allows substitution of a redirected URL from a source URLRequest for some portion of the URL in a new URLRequest.
		 */
		public function useRedirectedURL(sourceRequest:URLRequest, wholeURL:Boolean = false, pattern:* = null, replace:String = null):void
		{
			// TODO
		}
	}
}