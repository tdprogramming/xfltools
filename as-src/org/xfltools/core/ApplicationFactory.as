package org.xfltools.core
{
	import flash.display.Stage;
	import flash.events.EventDispatcher;

	/**
	 * Creates a "classic" Flash document class style entry point for a main class
	 * which extends flash.display.Sprite
	 */
	public class ApplicationFactory
	{
		public static var stage:flash.display.Stage;
		public static var jsStage:Object;
		public static var stageMouseX:Number;
		public static var stageMouseY:Number;
		
		public static function createApplication(mainInstance:Object, width:int, height:int, framerate:int = 30):void
        {
	        var body:Object;
	        var canvas:Object;
	            
            // For createjs, the application is the same as the canvas
			// and it provides convenient access to the stage.
            
            jsStage = window["getCreateJSStage"]('createJSCanvas');

            //Create a Shape DisplayObject.
		    //Add main instance to stage display list.
		    jsStage.addChild(mainInstance.javascriptImplementation);
		    //Update stage will render next frame
		    jsStage.update();
		    jsStage.enableDOMEvents();
		    jsStage.enableMouseOver(20);
		    jsStage.mouseMoveOutside = true;

		    jsStage.addEventListener("stagemousemove", onStageMouseMove);
		    jsStage.addEventListener("click", onStageClick);
			jsStage.addEventListener("stagemousedown", onStageMouseDown);
			jsStage.addEventListener("mouseenter", onStageMouseEnter);
			jsStage.addEventListener("mouseleave", onStageMouseLeave);
			jsStage.addEventListener("mouseout", onStageMouseOut);
			jsStage.addEventListener("mouseover", onStageMouseOver);
			jsStage.addEventListener("mousemove", onStageMouseMove);
			
		    stage = mainInstance as flash.display.Stage;

		    window["getCreateJSTicker"]().framerate= framerate;		// The tick (enter frame) event is only dispatched to objects on stage, needs to go to every event dispatcher''
        }

        private static function onStageMouseMove(event:Object):void
        {
        	stageMouseX = event.stageX;
        	stageMouseY = event.stageY;
        	updateStage();
        }

        public static function updateStage():void
		{
			jsStage.update();
		}


		private static function onStageClick(event:Object):void
		{
		}

		private static function onStageMouseDown(event:Object):void
		{
		}

		private static function onStageMouseEnter(event:Object):void
		{
		}

		private static function onStageMouseLeave(event:Object):void
		{
		}

		private static function onStageMouseOut(event:Object):void
		{
		}

		private static function onStageMouseOver(event:Object):void
		{
		}
	}
}