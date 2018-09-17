package flash.display
{
	import flash.geom.Matrix;

	public class GraphicsShaderFill implements 	IGraphicsFill, IGraphicsData
	{
		public var matrix:Matrix;
		public var shader:Shader;

		public function GraphicsShaderFill(shader:Shader = null, matrix:Matrix = null)
		{
			this.matrix = matrix;
			this.shader = shader;
		}
	}
}