/**
 * Generated by Apache Royale Compiler from flash\display\Graphics.as
 * flash.display.Graphics
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.Graphics');
/* Royale Dependency List: flash.display.BitmapData,flash.display.CapsStyle,flash.display.GradientType,flash.display.GraphicsBitmapFill,flash.display.GraphicsEndFill,flash.display.GraphicsGradientFill,flash.display.GraphicsPath,flash.display.GraphicsPathCommand,flash.display.GraphicsShaderFill,flash.display.GraphicsSolidFill,flash.display.GraphicsStroke,flash.display.GraphicsTrianglePath,flash.display.IGraphicsData,flash.display.LineScaleMode,flash.display.Shader,flash.geom.Matrix,org.apache.royale.utils.Language,XML*/

goog.require('org.xfltools.core.FlashJSObject');



/**
 * @flexjsignorecoercion createjs.Shape
 * @constructor
 * @extends {org.xfltools.core.FlashJSObject}
 */
flash.display.Graphics = function() {
  flash.display.Graphics.base(this, 'constructor');
  this._javascriptImplementation = window["flashjs_display_Graphics_construct"]();
};
goog.inherits(flash.display.Graphics, org.xfltools.core.FlashJSObject);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.Graphics', flash.display.Graphics);


/**
 * @export
 * @param {flash.display.BitmapData} bitmap
 * @param {flash.geom.Matrix=} matrix
 * @param {boolean=} repeat
 * @param {boolean=} smooth
 */
flash.display.Graphics.prototype.beginBitmapFill = function(bitmap, matrix, repeat, smooth) {
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  repeat = typeof repeat !== 'undefined' ? repeat : true;
  smooth = typeof smooth !== 'undefined' ? smooth : false;
  if (smooth == true) {
    throw new Error("Error - Sub Flash does not yet support smoothing for bitmap fills");
  }
  this._javascriptImplementation.beginBitmapFill(bitmap.javascriptImplementation, repeat, matrix.javascriptImplementation);
};


/**
 * @export
 * @param {number} color
 * @return {string}
 */
flash.display.Graphics.colorStringFromUint = function(color) {
  var /** @type {string} */ colorString = color.toString(16);
  while (colorString.length < 6) {
    colorString = "0" + colorString;
  }
  return "#" + colorString;
};


/**
 * @export
 * @param {number} alpha
 * @return {string}
 */
flash.display.Graphics.alphaStringFromUint = function(alpha) {
  var /** @type {number} */ intValue = Math.round(alpha * 255);
  var /** @type {string} */ alphaString = intValue.toString(16);
  while (alphaString.length < 2) {
    alphaString = "0" + alphaString;
  }
  return alphaString;
};


/**
 * @export
 * @param {number} color
 * @param {number=} alpha
 */
flash.display.Graphics.prototype.beginFill = function(color, alpha) {
  alpha = typeof alpha !== 'undefined' ? alpha : 1.0;
  this._javascriptImplementation.graphics.beginFill(flash.display.Graphics.colorStringFromUint(color) + flash.display.Graphics.alphaStringFromUint(alpha));
};


/**
 * @export
 * @param {string} type
 * @param {Array} colors
 * @param {Array} alphas
 * @param {Array} ratios
 * @param {flash.geom.Matrix=} matrix
 * @param {string=} spreadMethod
 * @param {string=} interpolationMethod
 * @param {number=} focalPointRatio
 */
flash.display.Graphics.prototype.beginGradientFill = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  spreadMethod = typeof spreadMethod !== 'undefined' ? spreadMethod : "pad";
  interpolationMethod = typeof interpolationMethod !== 'undefined' ? interpolationMethod : "rgb";
  focalPointRatio = typeof focalPointRatio !== 'undefined' ? focalPointRatio : 0;
  var /** @type {Array} */ colorStrings = [];
  var foreachiter0_target = colors;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var colorValue = foreachiter0_target[foreachiter0];
  {
    colorStrings.push(flash.display.Graphics.colorStringFromUint(colorValue));
  }}
  
  for (var /** @type {number} */ i = 0; i < alphas.length; i++) {
    if (i < colorStrings.length) {
      colorStrings[i] += flash.display.Graphics.alphaStringFromUint(alphas[i]);
    }
  }
  switch (type) {
    case flash.display.GradientType.LINEAR:
      matrix.cacheCjsLinearGradientValues();
      this._javascriptImplementation.beginLinearGradientFill(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1);
      break;
    case flash.display.GradientType.RADIAL:
      matrix.cacheCjsRadialGradientValues();
      this._javascriptImplementation.beginRadialGradientFill(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillRadius0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1, matrix.cjsGradientFillRadius1);
      break;
    default:
      break;
  }
};


/**
 * @export
 * @param {flash.display.Shader} shader
 * @param {flash.geom.Matrix=} matrix
 */
flash.display.Graphics.prototype.beginShaderFill = function(shader, matrix) {
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  throw new Error("Error - shaders are not currently supported in XFL Tools.");
};


/**
 * @export
 */
flash.display.Graphics.prototype.clear = function() {
  this._javascriptImplementation.graphics.clear();
};


/**
 * @export
 * @param {flash.display.Graphics} sourceGraphics
 */
flash.display.Graphics.prototype.copyFrom = function(sourceGraphics) {
  this.clear();
};


/**
 * @export
 * @param {number} controlX1
 * @param {number} controlY1
 * @param {number} controlX2
 * @param {number} controlY2
 * @param {number} anchorX
 * @param {number} anchorY
 */
flash.display.Graphics.prototype.cubicCurveTo = function(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY) {
  this._javascriptImplementation.graphics.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY);
};


/**
 * @export
 * @param {number} controlX
 * @param {number} controlY
 * @param {number} anchorX
 * @param {number} anchorY
 */
flash.display.Graphics.prototype.curveTo = function(controlX, controlY, anchorX, anchorY) {
  this._javascriptImplementation.graphics.quadraticCurveTo(controlX, controlY, anchorX, anchorY);
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 */
flash.display.Graphics.prototype.drawCircle = function(x, y, radius) {
  this._javascriptImplementation.graphics.drawCircle(x, y, radius);
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
flash.display.Graphics.prototype.drawEllipse = function(x, y, width, height) {
  this._javascriptImplementation.graphics.drawEllipse(x, y, width, height);
};


/**
 * @export
 * @param {Array} graphicsData
 */
flash.display.Graphics.prototype.drawGraphicsData = function(graphicsData) {
  var foreachiter1_target = graphicsData;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var graphicsDatum = foreachiter1_target[foreachiter1];
  {
    if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsBitmapFill)) {
      var /** @type {flash.display.GraphicsBitmapFill} */ graphicsBitmapFill = org.apache.royale.utils.Language.as(graphicsDatum, flash.display.GraphicsBitmapFill);
      this.beginBitmapFill(graphicsBitmapFill.bitmapData, graphicsBitmapFill.matrix, graphicsBitmapFill.repeat, graphicsBitmapFill.smooth);
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsEndFill)) {
      this.endFill();
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsGradientFill)) {
      var /** @type {flash.display.GraphicsGradientFill} */ graphicsGradientFill = org.apache.royale.utils.Language.as(graphicsDatum, flash.display.GraphicsGradientFill);
      this.beginGradientFill(graphicsGradientFill.type, graphicsGradientFill.colors, graphicsGradientFill.alphas, graphicsGradientFill.ratios, graphicsGradientFill.matrix, graphicsGradientFill.spreadMethod, graphicsGradientFill.interpolationMethod, graphicsGradientFill.focalPointRatio);
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsPath)) {
      var /** @type {flash.display.GraphicsPath} */ graphicsPath = org.apache.royale.utils.Language.as(graphicsDatum, flash.display.GraphicsPath);
      this.drawPath(graphicsPath.commands, graphicsPath.data, graphicsPath.winding);
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsShaderFill)) {
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsSolidFill)) {
      var /** @type {flash.display.GraphicsSolidFill} */ graphicsSolidFill = org.apache.royale.utils.Language.as(graphicsDatum, flash.display.GraphicsSolidFill);
      this.beginFill(graphicsSolidFill.color, graphicsSolidFill.alpha);
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsStroke)) {
      var /** @type {flash.display.GraphicsStroke} */ graphicsStroke = org.apache.royale.utils.Language.as(graphicsDatum, flash.display.GraphicsStroke);
      var /** @type {flash.display.GraphicsSolidFill} */ fill = org.apache.royale.utils.Language.as(graphicsStroke.fill, flash.display.GraphicsSolidFill);
      var /** @type {number} */ lineColor = Number(fill ? fill.color : 0);
      var /** @type {number} */ lineAlpha = fill ? fill.alpha : 1;
      this.lineStyle(graphicsStroke.thickness, lineColor, lineAlpha, graphicsStroke.pixelHinting, graphicsStroke.scaleMode, graphicsStroke.caps, graphicsStroke.joints, graphicsStroke.miterLimit);
    } else if (org.apache.royale.utils.Language.is(graphicsDatum, flash.display.GraphicsTrianglePath)) {
    }
  }}
  
};


/**
 * @export
 * @param {Array} commands
 * @param {Array} data
 * @param {string=} winding
 */
flash.display.Graphics.prototype.drawPath = function(commands, data, winding) {
  winding = typeof winding !== 'undefined' ? winding : "evenOdd";
  while (commands.length) {
    var /** @type {number} */ commandCode = commands.shift();
    switch (commandCode) {
      case flash.display.GraphicsPathCommand.CUBIC_CURVE_TO:
        this.cubicCurveTo(data.shift(), data.shift(), data.shift(), data.shift(), data.shift(), data.shift());
        break;
      case flash.display.GraphicsPathCommand.CURVE_TO:
        this.curveTo(data.shift(), data.shift(), data.shift(), data.shift());
        break;
      case flash.display.GraphicsPathCommand.LINE_TO:
      
      case flash.display.GraphicsPathCommand.WIDE_LINE_TO:
        this.lineTo(data.shift(), data.shift());
        break;
      case flash.display.GraphicsPathCommand.MOVE_TO:
      
      case flash.display.GraphicsPathCommand.WIDE_MOVE_TO:
        this.moveTo(data.shift(), data.shift());
        break;
      case flash.display.GraphicsPathCommand.NO_OP:
        break;
    }
  }
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
flash.display.Graphics.prototype.drawRect = function(x, y, width, height) {
  this._javascriptImplementation.graphics.drawRect(x, y, width, height);
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} ellipseWidth
 * @param {number=} ellipseHeight
 */
flash.display.Graphics.prototype.drawRoundRect = function(x, y, width, height, ellipseWidth, ellipseHeight) {
  ellipseHeight = typeof ellipseHeight !== 'undefined' ? ellipseHeight : NaN;
  if (!isNaN(ellipseHeight)) {
    throw new Error("Error - XFL Tools does not yet support ellipseHeight for rounded rectangle drawing");
  }
  this._javascriptImplementation.graphics.drawRoundRect(x, y, width, height, ellipseWidth);
};


/**
 * @export
 * @param {Array} vertices
 * @param {Array=} indices
 * @param {Array=} uvtData
 * @param {string=} culling
 */
flash.display.Graphics.prototype.drawTriangles = function(vertices, indices, uvtData, culling) {
  indices = typeof indices !== 'undefined' ? indices : null;
  uvtData = typeof uvtData !== 'undefined' ? uvtData : null;
  culling = typeof culling !== 'undefined' ? culling : "none";
  throw new Error("Error - drawTriangles is not currently supported by XFL Tools");
};


/**
 * @export
 */
flash.display.Graphics.prototype.endFill = function() {
  this._javascriptImplementation.graphics.endFill();
};


/**
 * @export
 * @param {flash.display.BitmapData} bitmap
 * @param {flash.geom.Matrix=} matrix
 * @param {boolean=} repeat
 * @param {boolean=} smooth
 */
flash.display.Graphics.prototype.lineBitmapStyle = function(bitmap, matrix, repeat, smooth) {
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  repeat = typeof repeat !== 'undefined' ? repeat : true;
  smooth = typeof smooth !== 'undefined' ? smooth : false;
  this._javascriptImplementation.graphics.beginBitmapStroke(bitmap.javascriptImplementation, repeat ? "repeat" : "no-repeat");
};


/**
 * @export
 * @param {string} type
 * @param {Array} colors
 * @param {Array} alphas
 * @param {Array} ratios
 * @param {flash.geom.Matrix=} matrix
 * @param {string=} spreadMethod
 * @param {string=} interpolationMethod
 * @param {number=} focalPointRatio
 */
flash.display.Graphics.prototype.lineGradientStyle = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  spreadMethod = typeof spreadMethod !== 'undefined' ? spreadMethod : "pad";
  interpolationMethod = typeof interpolationMethod !== 'undefined' ? interpolationMethod : "rgb";
  focalPointRatio = typeof focalPointRatio !== 'undefined' ? focalPointRatio : 0;
  var /** @type {Array} */ colorStrings = [];
  var foreachiter2_target = colors;
  for (var foreachiter2 in foreachiter2_target) 
  {
  var colorValue = foreachiter2_target[foreachiter2];
  {
    colorStrings.push(flash.display.Graphics.colorStringFromUint(colorValue));
  }}
  
  for (var /** @type {number} */ i = 0; i < alphas.length; i++) {
    if (i < colorStrings.length) {
      colorStrings[i] += flash.display.Graphics.alphaStringFromUint(alphas[i]);
    }
  }
  switch (type) {
    case flash.display.GradientType.LINEAR:
      matrix.cacheCjsLinearGradientValues();
      this._javascriptImplementation.beginLinearGradientStroke(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1);
      break;
    case flash.display.GradientType.RADIAL:
      matrix.cacheCjsRadialGradientValues();
      this._javascriptImplementation.beginRadialGradientStroke(colorStrings, ratios, matrix.cjsGradientFillX0, matrix.cjsGradientFillY0, matrix.cjsGradientFillRadius0, matrix.cjsGradientFillX1, matrix.cjsGradientFillY1, matrix.cjsGradientFillRadius1);
      break;
    default:
      break;
  }
};


/**
 * @export
 * @param {flash.display.Shader} shader
 * @param {flash.geom.Matrix=} matrix
 */
flash.display.Graphics.prototype.lineShaderStyle = function(shader, matrix) {
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  throw new Error("Error - Shaders are not supported in XFL Tools");
};


/**
 * @export
 * @param {number=} thickness
 * @param {number=} color
 * @param {number=} alpha
 * @param {boolean=} pixelHinting
 * @param {string=} scaleMode
 * @param {string=} caps
 * @param {string=} joints
 * @param {number=} miterLimit
 */
flash.display.Graphics.prototype.lineStyle = function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit) {
  thickness = typeof thickness !== 'undefined' ? thickness : NaN;
  color = typeof color !== 'undefined' ? color : 0;
  alpha = typeof alpha !== 'undefined' ? alpha : 1.0;
  pixelHinting = typeof pixelHinting !== 'undefined' ? pixelHinting : false;
  scaleMode = typeof scaleMode !== 'undefined' ? scaleMode : "normal";
  caps = typeof caps !== 'undefined' ? caps : null;
  joints = typeof joints !== 'undefined' ? joints : null;
  miterLimit = typeof miterLimit !== 'undefined' ? miterLimit : 3;
  var /** @type {number} */ capsAsNumber;
  switch (caps) {
    case null:
    
    case flash.display.CapsStyle.NONE:
      capsAsNumber = 0;
      break;
    case flash.display.CapsStyle.ROUND:
      capsAsNumber = 1;
      break;
    case flash.display.CapsStyle.SQUARE:
      capsAsNumber = 2;
      break;
    default:
      capsAsNumber = 0;
      break;
  }
  var /** @type {boolean} */ ignoreScale = false;
  if (scaleMode == flash.display.LineScaleMode.NONE) {
    ignoreScale = true;
  }
  this._javascriptImplementation.graphics.setStrokeStyle(thickness, capsAsNumber, joints, miterLimit, ignoreScale);
  var /** @type {string} */ colorString = flash.display.Graphics.colorStringFromUint(color) + flash.display.Graphics.alphaStringFromUint(alpha);
  this._javascriptImplementation.graphics.beginStroke(flash.display.Graphics.colorStringFromUint(color) + flash.display.Graphics.alphaStringFromUint(alpha));
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 */
flash.display.Graphics.prototype.lineTo = function(x, y) {
  this._javascriptImplementation.graphics.lineTo(x, y);
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 */
flash.display.Graphics.prototype.moveTo = function(x, y) {
  this._javascriptImplementation.graphics.moveTo(x, y);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.Graphics.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Graphics', qName: 'flash.display.Graphics', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.Graphics.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'Graphics': { type: '', declaredBy: 'flash.display.Graphics'},
        'beginBitmapFill': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'flash.display.BitmapData', optional: false },{ index: 2, type: 'flash.geom.Matrix', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Boolean', optional: true } ]; }},
        '|colorStringFromUint': { type: 'String', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'uint', optional: false } ]; }},
        '|alphaStringFromUint': { type: 'String', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'beginFill': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'uint', optional: false },{ index: 2, type: 'Number', optional: true } ]; }},
        'beginGradientFill': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Array', optional: false },{ index: 3, type: 'Array', optional: false },{ index: 4, type: 'Array', optional: false },{ index: 5, type: 'flash.geom.Matrix', optional: true },{ index: 6, type: 'String', optional: true },{ index: 7, type: 'String', optional: true },{ index: 8, type: 'Number', optional: true } ]; }},
        'beginShaderFill': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'flash.display.Shader', optional: false },{ index: 2, type: 'flash.geom.Matrix', optional: true } ]; }},
        'clear': { type: 'void', declaredBy: 'flash.display.Graphics'},
        'copyFrom': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'flash.display.Graphics', optional: false } ]; }},
        'cubicCurveTo': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Number', optional: false },{ index: 4, type: 'Number', optional: false },{ index: 5, type: 'Number', optional: false },{ index: 6, type: 'Number', optional: false } ]; }},
        'curveTo': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Number', optional: false },{ index: 4, type: 'Number', optional: false } ]; }},
        'drawCircle': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Number', optional: false } ]; }},
        'drawEllipse': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Number', optional: false },{ index: 4, type: 'Number', optional: false } ]; }},
        'drawGraphicsData': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Vector.<flash.display.IGraphicsData>', optional: false } ]; }},
        'drawPath': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Vector.<int>', optional: false },{ index: 2, type: 'Vector.<Number>', optional: false },{ index: 3, type: 'String', optional: true } ]; }},
        'drawRect': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Number', optional: false },{ index: 4, type: 'Number', optional: false } ]; }},
        'drawRoundRect': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Number', optional: false },{ index: 4, type: 'Number', optional: false },{ index: 5, type: 'Number', optional: false },{ index: 6, type: 'Number', optional: true } ]; }},
        'drawTriangles': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Vector.<Number>', optional: false },{ index: 2, type: 'Vector.<int>', optional: true },{ index: 3, type: 'Vector.<Number>', optional: true },{ index: 4, type: 'String', optional: true } ]; }},
        'endFill': { type: 'void', declaredBy: 'flash.display.Graphics'},
        'lineBitmapStyle': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'flash.display.BitmapData', optional: false },{ index: 2, type: 'flash.geom.Matrix', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Boolean', optional: true } ]; }},
        'lineGradientStyle': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Array', optional: false },{ index: 3, type: 'Array', optional: false },{ index: 4, type: 'Array', optional: false },{ index: 5, type: 'flash.geom.Matrix', optional: true },{ index: 6, type: 'String', optional: true },{ index: 7, type: 'String', optional: true },{ index: 8, type: 'Number', optional: true } ]; }},
        'lineShaderStyle': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'flash.display.Shader', optional: false },{ index: 2, type: 'flash.geom.Matrix', optional: true } ]; }},
        'lineStyle': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: true },{ index: 2, type: 'uint', optional: true },{ index: 3, type: 'Number', optional: true },{ index: 4, type: 'Boolean', optional: true },{ index: 5, type: 'String', optional: true },{ index: 6, type: 'String', optional: true },{ index: 7, type: 'String', optional: true },{ index: 8, type: 'Number', optional: true } ]; }},
        'lineTo': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        'moveTo': { type: 'void', declaredBy: 'flash.display.Graphics', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }}
      };
    }
  };
};
