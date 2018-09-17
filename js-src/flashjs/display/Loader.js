function flashjs_display_Loader_creatContentJSImplementation(thisObject, fileExt, url) 	 	
{
	switch(fileExt)
	{
		case "png":
		case "jpg":
		case "jpeg":
		case "gif":
			return new createjs.Bitmap(url);
			break;				
		default:
			throw new Error("Error, Loader file format not supported: " + fileExt);
			break;
	}	
}