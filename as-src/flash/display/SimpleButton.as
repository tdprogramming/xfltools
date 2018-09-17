package flash.display
{
	public class SimpleButton extends InteractiveObject
	{
		public var downState:DisplayObject;
 	 	public var enabled:Boolean;
 	 	public var hitTestState:DisplayObject;
 	 	public var overState:DisplayObject;
 	 	public var soundTransform : flash.media:SoundTransform;
 	 	public var trackAsMenu : Boolean;
 	 	public var upState : DisplayObject;
 	 	public var useHandCursor : Boolean;

		public function SimpleButton(upState:DisplayObject = null, overState:DisplayObject = null, downState:DisplayObject = null, hitTestState:DisplayObject = null)
		{
			this.downState = downState;
 	 		this.enabled = enabled;
 	 		this.hitTestState = hitTestState;
 	 		this.overState = overState;
 	 		this.soundTransform = soundTransform;
 	 		this.trackAsMenu = trackAsMenu;
 	 		this.upState = upState;
 	 		this.useHandCursor = useHandCursor;
		}
	}
}