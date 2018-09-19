function getCreateJSTicker()
{
	return createjs.Ticker;
}

function getCreateJSStage(canvasName)
{
	var result = new createjs.Stage(canvasName);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", result);

	return result;
}