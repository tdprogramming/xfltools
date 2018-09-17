package flash.net
{
	import flash.events.Event;
	import flash.events.EventDispatcher;

	public class URLLoader extends EventDispatcher
	{
		private var _bytesLoaded:uint = 0;
		private var _bytesTotal:uint = 0;
 	 	private var _data:*;
 	 	private var _dataFormat:String = "text";

		public function URLLoader(request:URLRequest = null)
		{
			_javascriptImplementation = window["flashjs_net_URLLoader_contruct"]();

			if (request)
			{
				load(request);
			}
		}

		public function load(request:URLRequest):void
		{
			/*complete: fired when a queue completes loading all files
error: fired when the queue encounters an error with any file.
progress: Progress for the entire queue has changed.
fileload: A single file has completed loading.
fileprogress: Progress for a single file has changes. Note that only files loaded with XHR (or possibly by plugins) will fire progress events other than 0 or 100%.
 queue.on("fileload", handleFileLoad, this);
 queue.on("complete", handleComplete, this);
Adding files and manifests
Add files you want to load using loadFile or add multiple files at a time using a list or a manifest definition using loadManifest. Files are appended to the end of the active queue, so you can use these methods as many times as you like, whenever you like.

 queue.loadFile("filePath/file.jpg");
 queue.loadFile({id:"image", src:"filePath/file.jpg"});
 queue.loadManifest(["filePath/file.jpg", {id:"image", src:"filePath/file.jpg"}]);

 // Use an external manifest
 queue.loadManifest("path/to/manifest.json");
 queue.loadManifest({src:"manifest.json", type:"manifest"});
If you pass false as the loadNow parameter, the queue will not kick of the load of the files, but it will not stop if it has already been started. Call the load method to begin a paused queue. Note that a paused queue will automatically resume when new files are added to it with a loadNow argument of true.

 queue.load();

 			*/

 			_javascriptImplementation.on("complete", onCompleteInternal);
 			_javascriptImplementation.loadFile({id:"data", src:request.url, type:"text"});		// Force raw text for now
		}

		private function onCompleteInternal(event:*):void
		{
			_data = _javascriptImplementation.getResult("data");	
			dispatchEvent(new Event(Event.COMPLETE));	
		}

		public function close():void
		{

		}

		public function get bytesLoaded():uint
		{
			return _bytesLoaded;
		}

 	 	public function get bytesTotal():uint
 	 	{
 	 		return _bytesTotal;
 	 	}

 	 	public function get data():*
 	 	{
 	 		return _data;
 	 	}

		public function get dataFormat():String
		{
			return _dataFormat;
		}
	}
}