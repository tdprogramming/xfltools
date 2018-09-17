package flash.display
{
	public class GraphicsPath implements IGraphicsPath, IGraphicsData
	{
		public var commands:Vector.<int>;
 	 	public var data:Vector.<Number>;
 	 	public var winding:String;

		public function GraphicsPath(commands:Vector.<int> = null, data:Vector.<Number> = null, winding:String = "evenOdd")
		{
			this.commands = commands;
 	 		this.data = data;
 	 		this.winding = winding;
		}

		public function cubicCurveTo(controlX1:Number, controlY1:Number, controlX2:Number, controlY2:Number, anchorX:Number, anchorY:Number):void
		{
			commands.push(GraphicsPathCommand.CUBIC_CURVE_TO);
			data.push(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY);
		}

		public function curveTo(controlX:Number, controlY:Number, anchorX:Number, anchorY:Number):void
		{
			commands.push(GraphicsPathCommand.CURVE_TO);
			data.push(controlX, controlY, anchorX, anchorY);
		}
 	 	
		public function lineTo(x:Number, y:Number):void
		{
			commands.push(GraphicsPathCommand.LINE_TO);
			data.push(x, y);
		}

		public function moveTo(x:Number, y:Number):void
		{
			commands.push(GraphicsPathCommand.MOVE_TO);
			data.push(x, y);
		}
 	 	
		public function wideLineTo(x:Number, y:Number):void
		{
			commands.push(GraphicsPathCommand.WIDE_LINE_TO);
			data.push(x, y);
		}
 	 	
		public function wideMoveTo(x:Number, y:Number):void
		{
			commands.push(GraphicsPathCommand.WIDE_MOVE_TO);
			data.push(x, y);
		}
	}
}