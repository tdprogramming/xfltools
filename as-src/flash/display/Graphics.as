package flash.display
{
	import org.xfltools.core.FlashJSObject;

	import flash.display.BitmapData;
	import flash.geom.Matrix;

	public class Graphics extends FlashJSObject
	{
		/**
		 * @flexjsignorecoercion createjs.Shape
		 */
		public function Graphics()
		{
			_javascriptImplementation = window["flashjs_display_Graphics_construct"]();
		}
			
		public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Boolean = true, smooth:Boolean = false):void
		{
			if (smooth == true)
			{
				throw new Error("Error - Sub Flash does not yet support smoothing for bitmap fills");
			}

			_javascriptImplementation.beginBitmapFill(bitmap.javascriptImplementation, repeat, matrix.javascriptImplementation);
		}
		
		public static function colorStringFromUint(color:uint):String
		{
			var colorString:String = color.toString(16);

			while (colorString.length < 6)
			{
				colorString = "0" + colorString;
			}

			return "#" + colorString;
		}

		public static function alphaStringFromUint(alpha:Number):String
		{
			var intValue:int = Math.round (alpha * 255);

			var alphaString:String = intValue.toString(16);

			while (alphaString.length < 2)
			{
				alphaString = "0" + alphaString;
			}

			return alphaString;
		}

		public function beginFill(color:uint, alpha:Number = 1.0):void
		{
			_javascriptImplementation.graphics.beginFill(Graphics.colorStringFromUint(color) + Graphics.alphaStringFromUint(alpha));
		}

		public function beginGradientFill(type:String, colors:Array, alphas:Array, ratios:Array, matrix:Matrix = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void
		{
			var colorStrings:Array = [];

			for each (var colorValue:int in colors)
			{
				colorStrings.push(Graphics.colorStringFromUint(colorValue));
			}

			for (var i:int = 0; i < alphas.length; i++)
			{
				if (i < colorStrings.length)
				{
					colorStrings[i] += Graphics.alphaStringFromUint(alphas[i]);
				}
			}

			switch (type)
			{
				case GradientType.LINEAR:
					matrix.cacheCjsLinearGradientValues();
					_javascriptImplementation.beginLinearGradientFill(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1); 
					break;
				case GradientType.RADIAL:
					matrix.cacheCjsRadialGradientValues();
					_javascriptImplementation.beginRadialGradientFill(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillRadius0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1, matrix.cjsGradientFillRadius1);
					break;
				default:
					break;
			}
		}

		public function beginShaderFill(shader:Shader, matrix:Matrix = null):void
		{
			// TODO
			throw new Error("Error - shaders are not currently supported in XFL Tools.");
		}

		public function clear():void
		{
			_javascriptImplementation.graphics.clear();
		}

		public function copyFrom(sourceGraphics:Graphics):void
		{
			// TODO
			clear();
		}

		public function cubicCurveTo(controlX1:Number, controlY1:Number, controlX2:Number, controlY2:Number, anchorX:Number, anchorY:Number):void
		{
			_javascriptImplementation.graphics.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY);
		}

		public function curveTo(controlX:Number, controlY:Number, anchorX:Number, anchorY:Number):void
		{
			_javascriptImplementation.graphics.quadraticCurveTo(controlX, controlY, anchorX, anchorY);
		}

		public function drawCircle(x:Number, y:Number, radius:Number):void
		{
			_javascriptImplementation.graphics.drawCircle(x, y, radius);
		}

		public function drawEllipse(x:Number, y:Number, width:Number, height:Number):void
		{
			_javascriptImplementation.graphics.drawEllipse(x, y, width, height);
		}

		public function drawGraphicsData(graphicsData:Vector.<IGraphicsData>):void
		{
			for each (var graphicsDatum:IGraphicsData in graphicsData)
			{
				if (graphicsDatum is GraphicsBitmapFill)
				{
					var graphicsBitmapFill:GraphicsBitmapFill = graphicsDatum as GraphicsBitmapFill;

					beginBitmapFill(graphicsBitmapFill.bitmapData, graphicsBitmapFill.matrix, graphicsBitmapFill.repeat, graphicsBitmapFill.smooth);
				}
				else if (graphicsDatum is GraphicsEndFill)
				{
					endFill();
				}
				else if (graphicsDatum is GraphicsGradientFill)
				{
					var graphicsGradientFill:GraphicsGradientFill = graphicsDatum as GraphicsGradientFill;

					 beginGradientFill(graphicsGradientFill.type, graphicsGradientFill.colors, graphicsGradientFill.alphas, graphicsGradientFill.ratios, graphicsGradientFill.matrix, graphicsGradientFill.spreadMethod, graphicsGradientFill.interpolationMethod, graphicsGradientFill.focalPointRatio);
				}
				else if (graphicsDatum is GraphicsPath)
				{
					var graphicsPath:GraphicsPath = graphicsDatum as GraphicsPath;

					 drawPath(graphicsPath.commands, graphicsPath.data, graphicsPath.winding)
				}
				else if (graphicsDatum is GraphicsShaderFill)
				{
					// TODO
				}
				else if (graphicsDatum is GraphicsSolidFill)
				{
					var graphicsSolidFill:GraphicsSolidFill = graphicsDatum as GraphicsSolidFill;
					beginFill(graphicsSolidFill.color, graphicsSolidFill.alpha);
				}
				else if (graphicsDatum is GraphicsStroke)
				{
					var graphicsStroke:GraphicsStroke = graphicsDatum as GraphicsStroke;
					
					// only supporting solid filled lines for now
					var fill:GraphicsSolidFill = graphicsStroke.fill as GraphicsSolidFill;
					var lineColor:uint = fill ? fill.color : 0;
					var lineAlpha:Number = fill ? fill.alpha : 1;

					lineStyle(graphicsStroke.thickness, lineColor, lineAlpha, graphicsStroke.pixelHinting, graphicsStroke.scaleMode, graphicsStroke.caps, graphicsStroke.joints, graphicsStroke.miterLimit);
				}
				else if (graphicsDatum is GraphicsTrianglePath)
				{
					// TODO
				}
			}
		}

		public function drawPath(commands:Vector.<int>, data:Vector.<Number>, winding:String = "evenOdd"):void
		{
			while (commands.length)
			{
				var commandCode:int = commands.shift();

				switch (commandCode)
				{
					case GraphicsPathCommand.CUBIC_CURVE_TO:
						cubicCurveTo(data.shift(), data.shift(), data.shift(), data.shift(), data.shift(), data.shift());
					 	break;
 	 				case GraphicsPathCommand.CURVE_TO:
 	 					curveTo(data.shift(), data.shift(), data.shift(), data.shift());
 	 					break;
 	 				case GraphicsPathCommand.LINE_TO:
 	 				case GraphicsPathCommand.WIDE_LINE_TO:
						lineTo(data.shift(), data.shift());
 	 					break;
 	 				case GraphicsPathCommand.MOVE_TO:
 	 				case GraphicsPathCommand.WIDE_MOVE_TO:
						moveTo(data.shift(), data.shift());
 	 					break;
 	 				case GraphicsPathCommand.NO_OP:
 	 					break;
				}
			}
		}

		public function drawRect(x:Number, y:Number, width:Number, height:Number):void
		{
			_javascriptImplementation.graphics.drawRect(x, y, width, height);
		}

		public function drawRoundRect(x:Number, y:Number, width:Number, height:Number, ellipseWidth:Number, ellipseHeight:Number = NaN):void
		{
			if (!isNaN(ellipseHeight))
			{
				throw new Error("Error - XFL Tools does not yet support ellipseHeight for rounded rectangle drawing");
			}

			_javascriptImplementation.graphics.drawRoundRect(x, y, width, height, ellipseWidth);
		}

		public function drawTriangles(vertices:Vector.<Number>, indices:Vector.<int> = null, uvtData:Vector.<Number> = null, culling:String = "none"):void
		{
			throw new Error("Error - drawTriangles is not currently supported by XFL Tools");
		}

		public function endFill():void
		{
			_javascriptImplementation.graphics.endFill();
		}

		public function lineBitmapStyle(bitmap:BitmapData, matrix:Matrix = null, repeat:Boolean = true, smooth:Boolean = false):void
		{
			// TODO - support matrix and smooth

			_javascriptImplementation.graphics.beginBitmapStroke(bitmap.javascriptImplementation, repeat ? "repeat" : "no-repeat");
		}

		public function lineGradientStyle(type:String, colors:Array, alphas:Array, ratios:Array, matrix:Matrix = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void
		{
			var colorStrings:Array = [];

			for each (var colorValue:int in colors)
			{
				colorStrings.push(Graphics.colorStringFromUint(colorValue));
			}

			for (var i:int = 0; i < alphas.length; i++)
			{
				if (i < colorStrings.length)
				{
					colorStrings[i] += Graphics.alphaStringFromUint(alphas[i]);
				}
			}

			switch (type)
			{
				case GradientType.LINEAR:
					matrix.cacheCjsLinearGradientValues();
					_javascriptImplementation.beginLinearGradientStroke(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1); 
					break;
				case GradientType.RADIAL:
					matrix.cacheCjsRadialGradientValues();
					_javascriptImplementation.beginRadialGradientStroke(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillRadius0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1, matrix.cjsGradientFillRadius1);
					break;
				default:
					break;
			}
		}

		public function lineShaderStyle(shader:Shader, matrix:Matrix = null):void
		{
			throw new Error("Error - Shaders are not supported in XFL Tools");
		}

		public function lineStyle(thickness:Number = NaN, color:uint = 0, alpha:Number = 1.0, pixelHinting:Boolean = false, scaleMode:String = "normal", caps:String = null, joints:String = null, miterLimit:Number = 3):void
		{
			// TODO - support pixel hinting and "vertical" scale mode

			var capsAsNumber:Number;

			switch (caps)
			{
				case null:
				case CapsStyle.NONE:
					capsAsNumber = 0;
					break;
				case CapsStyle.ROUND:
					capsAsNumber = 1;
					break;
				case CapsStyle.SQUARE:
					capsAsNumber = 2;
					break;
				default:
					capsAsNumber = 0;
					break;
			}

			var ignoreScale:Boolean = false;

			if (scaleMode == LineScaleMode.NONE)
			{
				ignoreScale = true;
			}

			_javascriptImplementation.graphics.setStrokeStyle(thickness, capsAsNumber, joints, miterLimit, ignoreScale);
			
			var colorString:String = Graphics.colorStringFromUint(color) + alphaStringFromUint(alpha);
			
			_javascriptImplementation.graphics.beginStroke(Graphics.colorStringFromUint(color) + alphaStringFromUint(alpha));
		}

		public function lineTo(x:Number, y:Number):void
		{
			_javascriptImplementation.graphics.lineTo(x, y);
		}

		public function moveTo(x:Number, y:Number):void
		{
			_javascriptImplementation.graphics.moveTo(x, y);
		}

		// TODO - need impl for IGraphicsData
		/*public function readGraphicsData(recurse:Boolean = true):Vector.<IGraphicsData>
		{

		}*/
	}
}