function flashjs_display_MovieClip_getTimeline()
{
	return new createjs.Timeline({ loop: -1 });
}

function flashjs_display_MovieClip_getTween(displayObject)
{
	return new createjs.Tween.get(displayObject);
}