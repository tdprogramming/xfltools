function flashjs_events_Event_construct(type, bubbles, cancelable)
{
	return new createjs.Event(type, bubbles, cancelable);
}