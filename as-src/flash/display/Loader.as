package flash.display
{
	import org.xfltools.display.XFLLoader;

	import flash.events.Event;
	import flash.net.URLRequest;
	import flash.system.LoaderContext;
	import flash.utils.ByteArray;

	public class Loader extends DisplayObjectContainer
	{
		private static const CONTENT_TYPE_IMAGE:String = "CONTENT_TYPE_IMAGE";
		private static const CONTENT_TYPE_XFL:String = "CONTENT_TYPE_XFL";

		private var _content:DisplayObject;
		private var _contentJavascriptImplementation:Object;
		private var _contentType:String;
		
		private var _xflLoader:XFLLoader;
		
		public function get content():DisplayObject
		{
			return _content;
		}
		
		private var _contentLoaderInfo:LoaderInfo;

 	 	public function contentLoaderInfo():LoaderInfo
 	 	{
 	 		return _contentLoaderInfo;
 	 	}
 	 	
 	 	/*
 	 	TODO - need implementation for UncaughtErrorEvents
 	 	private var _uncaughtErrorEvents:UncaughtErrorEvents;

 	 	public function get uncaughtErrorEvents():UncaughtErrorEvents
 	 	{
 	 		return _uncaughtErrorEvents;
 	 	}
 	 	*/

 	 	/**
 	 	 * @flexjsignorecoercion createjs.Container
 	 	 */
		public function Loader()
		{
			super();
		}
 	 	
 	 	/**
 	 	 * Cancels a load() method operation that is currently in progress for the Loader instance.
 	 	 */
		public function close():void
		{

		}

		/**
		 * Loads a SWF, JPEG, progressive JPEG, unanimated GIF, or PNG file into an object that is a child of this Loader object.
		 */
		public function load(request:URLRequest, context:LoaderContext = null):void
		{
			var urlParts:Array = request.url.split(".");

			var fileExt:String = urlParts[urlParts.length - 1].toLowerCase();

			switch(fileExt)
			{
				case "png":
				case "jpg":
				case "jpeg":
				case "gif":
					_contentType = CONTENT_TYPE_IMAGE;
					_contentJavascriptImplementation = window["flashjs_display_Loader_creatContentJSImplementation"](_javascriptImplementation, fileExt, request.url);
					addEventListener(Event.ENTER_FRAME, onTick);
					_javascriptImplementation.addChild(_contentJavascriptImplementation);
					break;				
				case "swf":
					urlParts[urlParts.length - 1] = "xfl";
					loadXFL(urlParts.join("."));
					break;
				case "xfl":
					loadXFL(request.url);
					break;
				default:
					throw new Error("Error, Loader file format not supported: " + fileExt);
					break;
			}
		}
		
		private function loadXFL(url:String):void
		{
			_xflLoader = new XFLLoader();
			_xflLoader.load(url);	
			addChild(_xflLoader.rootTimeline);
		}

		private function onTick(tickEvent:Event):void
		{
			if (_contentJavascriptImplementation.image == null)
			{
				trace("js imp image is null");
			}
			else
			{
				if (_contentJavascriptImplementation.image.complete)
				{
					onLoadComplete();
				}
			}
		}

		private function onLoadComplete():void
		{
			removeEventListener(Event.ENTER_FRAME, onTick);
			var loadedContent:Object = _contentJavascriptImplementation.image;

			switch (_contentType)
			{
				case CONTENT_TYPE_IMAGE:
					var bitmapData:BitmapData = new BitmapData(loadedContent.width, loadedContent.height);
        				bitmapData.initFromImageElement(loadedContent);
        				_content = new flash.display.Bitmap(bitmapData);
        		
        				addChild(_content);
					break;
				default:
				
					break;
			}

			dispatchEvent(new Event(Event.COMPLETE));
		}

		/**
		 * Loads from binary data stored in a ByteArray object.
		 */
		public function loadBytes(bytes:ByteArray, context:LoaderContext = null):void
		{

		}

		/**
		 * Loads an IFilePromise instance. - AIR ONLY
		 */
    	//public function loadFilePromise(promise:IFilePromise, context:LoaderContext = null):void

    	/**
    	 * Removes a child of this Loader object that was loaded by using the load() method.
    	 */
		public function unload():void
		{

		}

		/**
		 * Attempts to unload child SWF file contents and stops the execution of commands from loaded SWF files.
		 */
		public function unloadAndStop(gc:Boolean = true):void
		{

		}
	}
}