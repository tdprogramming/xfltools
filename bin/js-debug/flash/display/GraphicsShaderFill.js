/**
 * Generated by Apache Royale Compiler from flash\display\GraphicsShaderFill.as
 * flash.display.GraphicsShaderFill
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.GraphicsShaderFill');
/* Royale Dependency List: flash.display.Shader,flash.geom.Matrix,XML*/

goog.require('flash.display.IGraphicsData');
goog.require('flash.display.IGraphicsFill');



/**
 * @constructor
 * @implements {flash.display.IGraphicsFill}
 * @implements {flash.display.IGraphicsData}
 * @param {flash.display.Shader=} shader
 * @param {flash.geom.Matrix=} matrix
 */
flash.display.GraphicsShaderFill = function(shader, matrix) {
  shader = typeof shader !== 'undefined' ? shader : null;
  matrix = typeof matrix !== 'undefined' ? matrix : null;
  this.matrix = matrix;
  this.shader = shader;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.GraphicsShaderFill', flash.display.GraphicsShaderFill);


/**
 * @export
 * @type {flash.geom.Matrix}
 */
flash.display.GraphicsShaderFill.prototype.matrix;


/**
 * @export
 * @type {flash.display.Shader}
 */
flash.display.GraphicsShaderFill.prototype.shader;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.GraphicsShaderFill.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GraphicsShaderFill', qName: 'flash.display.GraphicsShaderFill', kind: 'class' }], interfaces: [flash.display.IGraphicsFill, flash.display.IGraphicsData] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.GraphicsShaderFill.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'matrix': { type: 'flash.geom.Matrix'},
        'shader': { type: 'flash.display.Shader'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'GraphicsShaderFill': { type: '', declaredBy: 'flash.display.GraphicsShaderFill', parameters: function () { return [  { index: 1, type: 'flash.display.Shader', optional: true },{ index: 2, type: 'flash.geom.Matrix', optional: true } ]; }}
      };
    }
  };
};