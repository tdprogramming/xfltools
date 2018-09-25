package org.xfltools.xfldom 
{
	import flash.display.GraphicsGradientFill;
	import flash.display.IGraphicsData;
	
	import flash.geom.Matrix;
	
	import org.xfltools.utils.XMLAssistant;

	/**
	 * 
	 * @author Tim Diggle
	 */
	public class Gradient implements IDOMComponent,IGraphicsDrawable
	{
		private var _gradientType:String;
		private var _matrix:Matrix;
		private var _gradientEntries:Vector.<GradientEntry>;
		
		public function Gradient(gradientType:String = "linear") 
		{
			_gradientType = gradientType;
		}
		
		public function fromXML(xml:XML):void
		{
			_matrix = new Matrix();
			
			var matrixXML:XML = XMLAssistant.getChildList(xml, [DOMXMLNodeName.MATRICES, DOMXMLNodeName.MATRIX])[0];
			
			if (matrixXML.hasOwnProperty("@a"))
			{
				_matrix.a = parseFloat(matrixXML.@a);
			}
			
			if (matrixXML.hasOwnProperty("@b"))
			{
				_matrix.b = parseFloat(matrixXML.@b);
			}
			
			if (matrixXML.hasOwnProperty("@c"))
			{
				_matrix.c = parseFloat(matrixXML.@c);
			}
			
			if (matrixXML.hasOwnProperty("@d"))
			{
				_matrix.d = parseFloat(matrixXML.@d);
			}
			
			if (matrixXML.hasOwnProperty("@tx"))
			{
				_matrix.tx = parseFloat(matrixXML.@tx);
			}
			
			if (matrixXML.hasOwnProperty("@ty"))
			{
				_matrix.ty = parseFloat(matrixXML.@ty);
			}
			
			_gradientEntries = new Vector.<GradientEntry>();
			
			for each (var gradientEntryXML:XML in XMLAssistant.getChildList(xml, [DOMXMLNodeName.GRADIENT_ENTRY]))
			{
				var gradientEntry:GradientEntry = new GradientEntry();
				gradientEntry.fromXML(gradientEntryXML);
				
				_gradientEntries.push(gradientEntry);
			}
		}
		
		public function toGraphicsData():Vector.<IGraphicsData>
		{
			var colors:Array = [];
			var alphas:Array = [];
			var ratios:Array = [];
			
			for each (var gradientEntry:GradientEntry in _gradientEntries)
			{
				colors.push(gradientEntry.color);
				alphas.push(gradientEntry.alpha);
				ratios.push(gradientEntry.ratio);
			}
		
			return Vector.<IGraphicsData>([new GraphicsGradientFill(_gradientType, colors, alphas, ratios, _matrix)]);
		}
	}

}