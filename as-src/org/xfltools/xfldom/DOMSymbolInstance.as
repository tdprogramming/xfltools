package org.xfltools.xfldom 
{
	import flash.display.DisplayObject;
	import flash.display.MovieClip;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import org.xfltools.utils.XMLAssistant;;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMSymbolInstance implements IDOMComponent,IDOMFrameElement 
	{
		private var _timeline:DOMTimeline;
		private var _matrix:Matrix;
		private var _transformationPoint:Point;
		
		public function DOMSymbolInstance() 
		{
			
		}
		
		
		public function fromXML(xml:XML):void 
		{
			var matrixXML:XML = XMLAssistant.getChildList(xml, [DOMXMLNodeName.MATRICES, DOMXMLNodeName.MATRIX])[0];
			
			_matrix = new Matrix();
			_matrix.tx = parseFloat(matrixXML.@tx);
			_matrix.ty = parseFloat(matrixXML.@ty);
			
			var pointXML:XML = XMLAssistant.getChildList(xml, [DOMXMLNodeName.TRANSFORMATION_POINT, DOMXMLNodeName.POINT])[0];
			
			_transformationPoint = new Point(parseFloat(pointXML.@x), parseFloat(pointXML.@y));
		}
		
		public function fromSymbolXML(xml:XML):void
		{
			_timeline = DOMComponentFactory.getDOMComponentArray(xml, [DOMXMLNodeName.TIMELINE, DOMXMLNodeName.DOM_TIMELINE])[0];
		}
		
		public function toDisplayObject():DisplayObject
		{
			return _timeline.toDisplayObject();
		}
		
		public function get matrix():Matrix
		{
			return _matrix;
		}
	}

}