package org.xfltools.xfldom 
{
	import flash.display.DisplayObject;
	import flash.display.GraphicsEndFill;
	import flash.display.GraphicsPath;
	import flash.display.GraphicsPathCommand;
	import flash.display.GraphicsStroke;
	import flash.display.IGraphicsData;
	import flash.display.Shape;
	import org.xfltools.utils.XMLAssistant;
	
	/**
	 * ...
	 * @author Tim Diggle
	 */
	public class DOMShape implements IDOMComponent,IGraphicsDrawable,IDOMFrameElement
	{
		private var _fills:Vector.<FillStyle>;
		private var _strokes:Vector.<StrokeStyle>;
		private var _edgeDescriptors:Vector.<Vector.<EdgeDescriptor>>;
		
		public function DOMShape() 
		{
			
		}
		
		public function fromXML(xml:XML):void
		{
			_fills = new Vector.<FillStyle>();
			_strokes = new Vector.<StrokeStyle>();
			
			var strokeStyle:StrokeStyle;
			var fillStyle:FillStyle;
			
			for each (var strokeStyleXML:XML in XMLAssistant.getChildList(xml, ["strokes", "StrokeStyle"]))
			{
				strokeStyle = new StrokeStyle();
				strokeStyle.fromXML(strokeStyleXML);
				
				_strokes.push(strokeStyle);
			}
			
			for each (var fillStyleXML:XML in XMLAssistant.getChildList(xml, ["fills", "FillStyle"]))
			{
				fillStyle = new FillStyle();
				fillStyle.fromXML(fillStyleXML);
				
				_fills.push(fillStyle);
			}
			
			var edges:Vector.<Edge> = new Vector.<Edge>();
			
			var lastStrokeStyle:int = -1;
			var lastFillStyleLeft:int = -1;
			var lastFillStyleRight:int = -1;
			
			for each (var edgeXML:XML in XMLAssistant.getChildList(xml, ["edges", "Edge"]))
			{
				var fillStyleLeft:int = parseInt(edgeXML.@fillStyle0);
				var fillStyleRight:int = parseInt(edgeXML.@fillStyle1);
				
				var strokeStyleIndex:int = parseInt(edgeXML.@strokeStyle);
				
				if (!strokeStyleIndex && !lastFillStyleLeft && !fillStyleRight)
				{
					strokeStyleIndex = lastStrokeStyle;
					fillStyleLeft = lastFillStyleLeft;
					fillStyleRight = lastFillStyleRight;
				}
				
				var edge:Edge = new Edge(strokeStyleIndex, 0);
				edge.fromXML(edgeXML);
				edges.push(edge);
				
				edge = new Edge(0, fillStyleRight);
				edge.fromXML(edgeXML);
				edges.push(edge);
				
				if (fillStyleLeft)
				{
					edge = new Edge(0, fillStyleLeft);
					edge.fromXML(edgeXML);
					edge.reverse();
					edges.push(edge);
				}
				
				lastStrokeStyle = strokeStyleIndex;
				lastFillStyleLeft = fillStyleLeft;
				lastFillStyleRight = fillStyleRight;
			}
			
			var edgeDescriptors:Vector.<EdgeDescriptor> = new Vector.<EdgeDescriptor>();
			
			for each (edge in edges)
			{
				edgeDescriptors = edgeDescriptors.concat(edge.edgeDescriptors);
			}
			
			sortEdgeDescriptors(edgeDescriptors);
		}
		
		private function sortEdgeDescriptors(edgeDescriptors:Vector.<EdgeDescriptor>):void
		{
			_edgeDescriptors = new Vector.<Vector.<EdgeDescriptor>>();
			
			while (edgeDescriptors.length > 0)
			{
				var currentSet:Vector.<EdgeDescriptor> = new <EdgeDescriptor>[edgeDescriptors.shift()];
				
				findFriendEdges(currentSet, edgeDescriptors);
				
				_edgeDescriptors.push(currentSet);
			}
			
			_edgeDescriptors.sort(sortFillsFirst);
		}
		
		private function sortFillsFirst(edgeDescriptorA:Vector.<EdgeDescriptor>, edgeDescriptorB:Vector.<EdgeDescriptor>):int
		{
			if (edgeDescriptorA[0].fillStyle && !edgeDescriptorB[0].fillStyle)
			{
				return -1;
			}
			else if (!edgeDescriptorA[0].fillStyle && edgeDescriptorB[0].fillStyle)
			{
				return 1;
			}
			
			return 0;
		}
		
		private function findFriendEdges(theseEdges:Vector.<EdgeDescriptor>, allEdges:Vector.<EdgeDescriptor>):void
		{
			var friendFound:Boolean = false;
			
			for (var i:int = 0; i < allEdges.length; i++)
			{
				if (allEdges[i].strokeStyle == theseEdges[0].strokeStyle && allEdges[i].fillStyle == theseEdges[0].fillStyle)
				{
					if (allEdges[i].start.equals(theseEdges[theseEdges.length - 1].end))
					{
						theseEdges.push(allEdges.splice(i, 1)[0]);
						friendFound = true;
						break;
					}
					
					else if (allEdges[i].end.equals(theseEdges[0].start))
					{
						theseEdges.unshift(allEdges.splice(i, 1)[0]);
						friendFound = true;
						break;
					}
				}
			}
			
			if (friendFound)
			{
				findFriendEdges(theseEdges, allEdges);
			}
		}
		
		private function fillStyleFromIndex(fillIndex:int):FillStyle
		{
			for each (var fillStyle:FillStyle in _fills)
			{
				if (fillStyle.index == fillIndex)
				{
					return fillStyle;
				}
			}
			
			return null;
		}
		
		private function strokeStyleFromIndex(strokeIndex:int):StrokeStyle
		{
			for each (var strokeStyle:StrokeStyle in _strokes)
			{
				if (strokeStyle.index == strokeIndex)
				{
					return strokeStyle;
				}
			}
			
			return null;
		}
		
		public function toGraphicsData():Vector.<IGraphicsData>
		{
			var graphicsData:Vector.<IGraphicsData> = new Vector.<IGraphicsData>();
			
			var pathCoordinates:Vector.<Number> = new Vector.<Number>();
			var pathCommands:Vector.<int> = new Vector.<int>();
            
			for each (var edgeSet:Vector.<EdgeDescriptor> in _edgeDescriptors)
			{
				if (edgeSet[0].strokeStyle > 0)
				{
					var strokeStyle:StrokeStyle = strokeStyleFromIndex(edgeSet[0].strokeStyle);
						
					graphicsData = graphicsData.concat(strokeStyle.toGraphicsData());
				}
				
				else if (edgeSet[0].fillStyle > 0)
				{
					var fillStyle:FillStyle = fillStyleFromIndex(edgeSet[0].fillStyle);
						
					graphicsData = graphicsData.concat(fillStyle.toGraphicsData());
					
				}
				
				pathCoordinates = new Vector.<Number>();
				pathCommands = new Vector.<int>();
					
				pathCommands[0] = GraphicsPathCommand.MOVE_TO;
				pathCoordinates.push(edgeSet[0].start.x, edgeSet[0].start.y);
				
				for each (var edgeDescriptor:EdgeDescriptor in edgeSet)
				{
					if (edgeDescriptor.control)
					{
						pathCommands.push(GraphicsPathCommand.CURVE_TO);
						pathCoordinates.push(edgeDescriptor.control.x, edgeDescriptor.control.y, edgeDescriptor.end.x, edgeDescriptor.end.y);
					}
					else
					{
						pathCommands.push(GraphicsPathCommand.LINE_TO);
						pathCoordinates.push(edgeDescriptor.end.x, edgeDescriptor.end.y);
					}
				}
				
				var graphicsPath:GraphicsPath = new GraphicsPath(pathCommands, pathCoordinates);
			
				graphicsData.push(graphicsPath);
				
				if (edgeSet[0].fillStyle > 0)
				{
					graphicsData.push(new GraphicsEndFill());
				}
			}
			
			return graphicsData;
		}
		
		public function toDisplayObject():DisplayObject
		{
			var graphicsData:Vector.<IGraphicsData> = this.toGraphicsData();
						
			var shape:Shape = new Shape();
			shape.graphics.drawGraphicsData(graphicsData);
						
			return shape;
		}
	}
}