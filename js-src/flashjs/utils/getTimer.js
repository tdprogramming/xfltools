var flashjs_utils_getTimer_baseTime = new Date().getTime();

function flashjs_utils_getTimer()
{
	return new Date().getTime() - flashjs_utils_getTimer_baseTime;
}