/**
 * Generated by Apache Royale Compiler from flash\display\GraphicsBitmapFill.as
 * flash.display.GraphicsBitmapFill
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.GraphicsBitmapFill');
/* Royale Dependency List: flash.display.BitmapData,flash.geom.Matrix,XML*/

goog.require('flash.display.IGraphicsData');
goog.require('flash.display.IGraphicsFill');



/**
 * @constructor
 * @implements {flash.display.IGraphicsFill}
 * @implements {flash.display.IGraphicsData}
 * @param {flash.display.BitmapData=} bitmapData
 * @param {flash.geom.Matrix=} matrix
 * @param {boolean=} repeat
 * @param {boolean=} smooth
 */
flash.display.GraphicsBitmapFill = function(bitmapData, matrix, repeat, smooth) {
  bitmapData = typeof bitmapData !== 'undefined' ? bitmapData : null;
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  repeat = typeof repeat !== 'undefined' ? repeat : true;
  smooth = typeof smooth !== 'undefined' ? smooth : false;
  this.bitmapData = bitmapData;
  this.matrix = matrix;
  this.repeat = repeat;
  this.smooth = smooth;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.GraphicsBitmapFill', flash.display.GraphicsBitmapFill);


/**
 * @export
 * @type {flash.display.BitmapData}
 */
flash.display.GraphicsBitmapFill.prototype.bitmapData;


/**
 * @export
 * @type {flash.geom.Matrix}
 */
flash.display.GraphicsBitmapFill.prototype.matrix;


/**
 * @export
 * @type {boolean}
 */
flash.display.GraphicsBitmapFill.prototype.repeat;


/**
 * @export
 * @type {boolean}
 */
flash.display.GraphicsBitmapFill.prototype.smooth;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.GraphicsBitmapFill.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GraphicsBitmapFill', qName: 'flash.display.GraphicsBitmapFill', kind: 'class' }], interfaces: [flash.display.IGraphicsFill, flash.display.IGraphicsData] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.GraphicsBitmapFill.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'bitmapData': { type: 'flash.display.BitmapData'},
        'matrix': { type: 'flash.geom.Matrix'},
        'repeat': { type: 'Boolean'},
        'smooth': { type: 'Boolean'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'GraphicsBitmapFill': { type: '', declaredBy: 'flash.display.GraphicsBitmapFill', parameters: function () { return [  { index: 1, type: 'flash.display.BitmapData', optional: true },{ index: 2, type: 'flash.geom.Matrix', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Boolean', optional: true } ]; }}
      };
    }
  };
};