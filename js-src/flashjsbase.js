function getCreateJSTicker()
{
	return createjs.Ticker;
}

function getCreateJSStage(canvasName)
{
	var result = new createjs.Stage(canvasName);

	return result;
}