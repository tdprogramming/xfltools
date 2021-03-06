/**
 * Generated by Apache Royale Compiler from flash\display\DisplayObject.as
 * flash.display.DisplayObject
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.DisplayObject');
/* Royale Dependency List: flash.accessibility.AccessibilityProperties,flash.display.DisplayObjectContainer,flash.display.LoaderInfo,flash.display.Shader,flash.display.Stage,flash.geom.Matrix,flash.geom.Point,flash.geom.Rectangle,flash.geom.Transform,flash.geom.Vector3D,org.xfltools.core.ApplicationFactory,org.xfltools.core.FlashJSObject,XML*/

goog.require('flash.events.EventDispatcher');
goog.require('flash.display.IBitmapDrawable');



/**
 * @constructor
 * @extends {flash.events.EventDispatcher}
 * @implements {flash.display.IBitmapDrawable}
 */
flash.display.DisplayObject = function() {
  flash.display.DisplayObject.base(this, 'constructor');
  this._javascriptImplementation = window["flashjs_display_DisplayObject_construct"]();
};
goog.inherits(flash.display.DisplayObject, flash.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.DisplayObject', flash.display.DisplayObject);


/**
 * @private
 * @type {Array}
 */
flash.display.DisplayObject.prototype._filters;


/**
 * @export
 * @type {flash.accessibility.AccessibilityProperties}
 */
flash.display.DisplayObject.prototype.accessibilityProperties;


/**
 * @export
 * @type {string}
 */
flash.display.DisplayObject.prototype.blendMode;


/**
 * @export
 * @type {flash.display.Shader}
 */
flash.display.DisplayObject.prototype.blendShader;


/**
 * @export
 * @type {boolean}
 */
flash.display.DisplayObject.prototype.cacheAsBitmap;


/**
 * @export
 * @type {flash.geom.Matrix}
 */
flash.display.DisplayObject.prototype.cacheAsBitmapMatrix;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.height;


/**
 * @export
 * @type {flash.display.LoaderInfo}
 */
flash.display.DisplayObject.prototype.loaderInfo;


/**
 * @export
 * @type {flash.display.DisplayObject}
 */
flash.display.DisplayObject.prototype.mask;


/**
 * @export
 * @type {Object}
 */
flash.display.DisplayObject.prototype.metaData;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.mouseX;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.mouseY;


/**
 * @export
 * @type {string}
 */
flash.display.DisplayObject.prototype.name;


/**
 * @export
 * @type {Object}
 */
flash.display.DisplayObject.prototype.opaqueBackground;


/**
 * @export
 * @type {flash.display.DisplayObjectContainer}
 */
flash.display.DisplayObject.prototype.parent;


/**
 * @export
 * @type {flash.display.DisplayObject}
 */
flash.display.DisplayObject.prototype.root;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.rotationX;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.rotationY;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.rotationZ;


/**
 * @export
 * @type {flash.geom.Rectangle}
 */
flash.display.DisplayObject.prototype.scale9Grid;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.scaleZ;


/**
 * @export
 * @type {flash.geom.Rectangle}
 */
flash.display.DisplayObject.prototype.scrollRect;


/**
 * @export
 * @type {flash.geom.Transform}
 */
flash.display.DisplayObject.prototype.transform;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.width;


/**
 * @export
 * @type {number}
 */
flash.display.DisplayObject.prototype.z;


/**
 * @export
 * @param {flash.display.DisplayObject} targetCoordinateSpace
 * @return {flash.geom.Rectangle}
 */
flash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
  return this._javascriptImplementation.getBounds();
};


/**
 * @export
 * @param {flash.display.DisplayObject} targetCoordinateSpace
 * @return {flash.geom.Rectangle}
 */
flash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
  return new flash.geom.Rectangle();
};


/**
 * @export
 * @param {flash.geom.Point} point
 * @return {flash.geom.Point}
 */
flash.display.DisplayObject.prototype.globalToLocal = function(point) {
  var /** @type {Object} */ globalToLocalResult = this._javascriptImplementation.globalToLocal(point.javascriptImplementation);
  return new flash.geom.Point(globalToLocalResult.x, globalToLocalResult.y);
};


/**
 * @export
 * @param {flash.geom.Point} point
 * @return {flash.geom.Vector3D}
 */
flash.display.DisplayObject.prototype.globalToLocal3D = function(point) {
  return null;
};


/**
 * @export
 * @param {flash.display.DisplayObject} obj
 * @return {boolean}
 */
flash.display.DisplayObject.prototype.hitTestObject = function(obj) {
  return false;
};


/**
 * @export
 * @param {number} x
 * @param {number} y
 * @param {boolean=} shapeFlag
 * @return {boolean}
 */
flash.display.DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag) {
  shapeFlag = typeof shapeFlag !== 'undefined' ? shapeFlag : false;
  return this._javascriptImplementation.hitTest(x, y);
};


/**
 * @export
 * @param {flash.geom.Vector3D} point3d
 * @return {flash.geom.Point}
 */
flash.display.DisplayObject.prototype.local3DToGlobal = function(point3d) {
  return null;
};


/**
 * @export
 * @param {flash.geom.Point} point
 * @return {flash.geom.Point}
 */
flash.display.DisplayObject.prototype.localToGlobal = function(point) {
  return null;
};


flash.display.DisplayObject.prototype.get__alpha = function() {
  return this._javascriptImplementation.alpha;
};


flash.display.DisplayObject.prototype.set__alpha = function(newValue) {
  this._javascriptImplementation.alpha = newValue;
};


flash.display.DisplayObject.prototype.get__filters = function() {
  return this._filters;
};


flash.display.DisplayObject.prototype.set__filters = function(value) {
  this._filters = value;
  var /** @type {Array} */ jsFilters = [];
  var foreachiter0_target = this._filters;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var filter = foreachiter0_target[foreachiter0];
  {
    jsFilters.push(filter.javascriptImplementation);
  }}
  
  this._javascriptImplementation.filters = jsFilters;
  if (this._javascriptImplementation.getCacheDataURL() == null) {
    var /** @type {flash.geom.Rectangle} */ bounds = this.getBounds(this);
    this._javascriptImplementation.cache(bounds.x, bounds.y, bounds.width, bounds.height);
  } else {
    this._javascriptImplementation.updateCache();
  }
};


flash.display.DisplayObject.prototype.get__rotation = function() {
  return this._javascriptImplementation.rotation;
};


flash.display.DisplayObject.prototype.set__rotation = function(newValue) {
  this._javascriptImplementation.rotation = newValue;
};


flash.display.DisplayObject.prototype.get__scaleX = function() {
  return this._javascriptImplementation.scaleX;
};


flash.display.DisplayObject.prototype.set__scaleX = function(newValue) {
  this._javascriptImplementation.scaleX = newValue;
};


flash.display.DisplayObject.prototype.get__scaleY = function() {
  return this._javascriptImplementation.scaleY;
};


flash.display.DisplayObject.prototype.set__scaleY = function(newValue) {
  this._javascriptImplementation.scaleY = newValue;
};


flash.display.DisplayObject.prototype.get__stage = function() {
  return org.xfltools.core.ApplicationFactory.stage;
};


flash.display.DisplayObject.prototype.get__visible = function() {
  return this._javascriptImplementation.visible;
};


flash.display.DisplayObject.prototype.set__visible = function(newValue) {
  this._javascriptImplementation.visible = newValue;
};


flash.display.DisplayObject.prototype.get__x = function() {
  return this._javascriptImplementation.x;
};


flash.display.DisplayObject.prototype.set__x = function(newValue) {
  this._javascriptImplementation.x = newValue;
};


flash.display.DisplayObject.prototype.get__y = function() {
  return this._javascriptImplementation.y;
};


flash.display.DisplayObject.prototype.set__y = function(newValue) {
  this._javascriptImplementation.y = newValue;
};


Object.defineProperties(flash.display.DisplayObject.prototype, /** @lends {flash.display.DisplayObject.prototype} */ {
/**
  * @export
  * @type {number} */
alpha: {
get: flash.display.DisplayObject.prototype.get__alpha,
set: flash.display.DisplayObject.prototype.set__alpha},
/**
  * @export
  * @type {Array} */
filters: {
get: flash.display.DisplayObject.prototype.get__filters,
set: flash.display.DisplayObject.prototype.set__filters},
/**
  * @export
  * @type {number} */
rotation: {
get: flash.display.DisplayObject.prototype.get__rotation,
set: flash.display.DisplayObject.prototype.set__rotation},
/**
  * @export
  * @type {number} */
scaleX: {
get: flash.display.DisplayObject.prototype.get__scaleX,
set: flash.display.DisplayObject.prototype.set__scaleX},
/**
  * @export
  * @type {number} */
scaleY: {
get: flash.display.DisplayObject.prototype.get__scaleY,
set: flash.display.DisplayObject.prototype.set__scaleY},
/**
  * @export
  * @type {flash.display.Stage} */
stage: {
get: flash.display.DisplayObject.prototype.get__stage},
/**
  * @export
  * @type {boolean} */
visible: {
get: flash.display.DisplayObject.prototype.get__visible,
set: flash.display.DisplayObject.prototype.set__visible},
/**
  * @export
  * @type {number} */
x: {
get: flash.display.DisplayObject.prototype.get__x,
set: flash.display.DisplayObject.prototype.set__x},
/**
  * @export
  * @type {number} */
y: {
get: flash.display.DisplayObject.prototype.get__y,
set: flash.display.DisplayObject.prototype.set__y}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.DisplayObject.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DisplayObject', qName: 'flash.display.DisplayObject', kind: 'class' }], interfaces: [flash.display.IBitmapDrawable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.DisplayObject.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'accessibilityProperties': { type: 'flash.accessibility.AccessibilityProperties'},
        'blendMode': { type: 'String'},
        'blendShader': { type: 'flash.display.Shader'},
        'cacheAsBitmap': { type: 'Boolean'},
        'cacheAsBitmapMatrix': { type: 'flash.geom.Matrix'},
        'height': { type: 'Number'},
        'loaderInfo': { type: 'flash.display.LoaderInfo'},
        'mask': { type: 'flash.display.DisplayObject'},
        'metaData': { type: 'Object'},
        'mouseX': { type: 'Number'},
        'mouseY': { type: 'Number'},
        'name': { type: 'String'},
        'opaqueBackground': { type: 'Object'},
        'parent': { type: 'flash.display.DisplayObjectContainer'},
        'root': { type: 'flash.display.DisplayObject'},
        'rotationX': { type: 'Number'},
        'rotationY': { type: 'Number'},
        'rotationZ': { type: 'Number'},
        'scale9Grid': { type: 'flash.geom.Rectangle'},
        'scaleZ': { type: 'Number'},
        'scrollRect': { type: 'flash.geom.Rectangle'},
        'transform': { type: 'flash.geom.Transform'},
        'width': { type: 'Number'},
        'z': { type: 'Number'}
      };
    },
    accessors: function () {
      return {
        'alpha': { type: 'Number', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'filters': { type: 'Array', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'rotation': { type: 'Number', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'scaleX': { type: 'Number', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'scaleY': { type: 'Number', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'stage': { type: 'flash.display.Stage', access: 'readonly', declaredBy: 'flash.display.DisplayObject'},
        'visible': { type: 'Boolean', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'flash.display.DisplayObject'}
      };
    },
    methods: function () {
      return {
        'DisplayObject': { type: '', declaredBy: 'flash.display.DisplayObject'},
        'getBounds': { type: 'flash.geom.Rectangle', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.display.DisplayObject', optional: false } ]; }},
        'getRect': { type: 'flash.geom.Rectangle', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.display.DisplayObject', optional: false } ]; }},
        'globalToLocal': { type: 'flash.geom.Point', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.geom.Point', optional: false } ]; }},
        'globalToLocal3D': { type: 'flash.geom.Vector3D', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.geom.Point', optional: false } ]; }},
        'hitTestObject': { type: 'Boolean', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.display.DisplayObject', optional: false } ]; }},
        'hitTestPoint': { type: 'Boolean', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'local3DToGlobal': { type: 'flash.geom.Point', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.geom.Vector3D', optional: false } ]; }},
        'localToGlobal': { type: 'flash.geom.Point', declaredBy: 'flash.display.DisplayObject', parameters: function () { return [  { index: 1, type: 'flash.geom.Point', optional: false } ]; }}
      };
    }
  };
};
