/**
 * Generated by Apache Royale Compiler from flash\display\Scene.as
 * flash.display.Scene
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.Scene');
/* Royale Dependency List: XML*/



/**
 * @constructor
 */
flash.display.Scene = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.Scene', flash.display.Scene);


/**
 * @export
 * @type {Array}
 */
flash.display.Scene.prototype.labels;


/**
 * @export
 * @type {string}
 */
flash.display.Scene.prototype.name;


/**
 * @export
 * @type {number}
 */
flash.display.Scene.prototype.numFrames = 0;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.Scene.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Scene', qName: 'flash.display.Scene', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.Scene.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'labels': { type: 'Array'},
        'name': { type: 'String'},
        'numFrames': { type: 'int'}
      };
    },
    accessors: function () {return {};},
    methods: function () {return {};}
  };
};
