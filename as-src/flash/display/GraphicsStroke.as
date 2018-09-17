package flash.display
{
	public class GraphicsStroke implements IGraphicsStroke, IGraphicsData
	{
		public var caps:String;
		public var fill:IGraphicsFill;
		public var joints:String;
		public var miterLimit:Number;
		public var pixelHinting:Boolean;
		public var scaleMode:String;
		public var thickness:Number;

		public function GraphicsStroke(thickness:Number = NaN, pixelHinting:Boolean = false, scaleMode:String = "normal", caps:String = "none", joints:String = "round", miterLimit:Number = 3.0, fill:IGraphicsFill = null)
		{
			this.caps = caps;
			this.fill = fill;
			this.joints = joints;
			this.miterLimit = miterLimit;
			this.pixelHinting = pixelHinting;
			this.scaleMode = scaleMode;
			this.thickness = thickness;
		}
	}
}