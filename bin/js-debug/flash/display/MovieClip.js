/**
 * Generated by Apache Royale Compiler from flash\display\MovieClip.as
 * flash.display.MovieClip
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.MovieClip');
/* Royale Dependency List: flash.display.DisplayObject,flash.display.Scene,flash.utils.Dictionary,XML*/

goog.require('flash.display.Sprite');



/**
 * @constructor
 * @extends {flash.display.Sprite}
 */
flash.display.MovieClip = function() {
  flash.display.MovieClip.base(this, 'constructor');
  this._timeline = window["flashjs_display_MovieClip_getTimeline"]();
  this._tweensByDisplayObject = new flash.utils.Dictionary();
};
goog.inherits(flash.display.MovieClip, flash.display.Sprite);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.MovieClip', flash.display.MovieClip);


/**
 * @private
 * @type {number}
 */
flash.display.MovieClip.prototype._currentFrame = 0;


/**
 * @private
 * @type {Object}
 */
flash.display.MovieClip.prototype._timeline;


/**
 * @private
 * @type {flash.utils.Dictionary}
 */
flash.display.MovieClip.prototype._tweensByDisplayObject;


/**
 * @export
 * @param {flash.display.DisplayObject} child
 * @param {Object} props
 * @param {number} duration
 */
flash.display.MovieClip.prototype.tweenChild = function(child, props, duration) {
  if (this._tweensByDisplayObject[child] == null) {
    this._tweensByDisplayObject[child] = window["flashjs_display_MovieClip_getTween"](child);
    this._timeline.addTween(this._tweensByDisplayObject[child]);
  }
  this._tweensByDisplayObject[child].to(props, duration * 1000);
  this._timeline.updateDuration();
};


/**
 * @private
 * @type {string}
 */
flash.display.MovieClip.prototype._currentFrameLabel;


/**
 * @private
 * @type {string}
 */
flash.display.MovieClip.prototype._currentLabel;


/**
 * @private
 * @type {Array}
 */
flash.display.MovieClip.prototype._currentLabels;


/**
 * @private
 * @type {flash.display.Scene}
 */
flash.display.MovieClip.prototype._currentScene;


/**
 * @export
 * @type {boolean}
 */
flash.display.MovieClip.prototype.enabled;


/**
 * @private
 * @type {number}
 */
flash.display.MovieClip.prototype._framesLoaded = 0;


/**
 * @private
 * @type {boolean}
 */
flash.display.MovieClip.prototype._isPlaying;


/**
 * @private
 * @type {Array}
 */
flash.display.MovieClip.prototype._scenes;


/**
 * @private
 * @type {number}
 */
flash.display.MovieClip.prototype._totalFrames = 0;


/**
 * @export
 * @type {boolean}
 */
flash.display.MovieClip.prototype.trackAsMenu;


/**
 * @export
 * @param {Object} frame
 * @param {string=} scene
 */
flash.display.MovieClip.prototype.gotoAndPlay = function(frame, scene) {
  scene = typeof scene !== 'undefined' ? scene : null;
};


/**
 * @export
 * @param {Object} frame
 * @param {string=} scene
 */
flash.display.MovieClip.prototype.gotoAndStop = function(frame, scene) {
  scene = typeof scene !== 'undefined' ? scene : null;
};


/**
 * @export
 */
flash.display.MovieClip.prototype.nextFrame = function() {
};


/**
 * @export
 */
flash.display.MovieClip.prototype.nextScene = function() {
};


/**
 * @export
 */
flash.display.MovieClip.prototype.play = function() {
};


/**
 * @export
 */
flash.display.MovieClip.prototype.prevFrame = function() {
};


/**
 * @export
 */
flash.display.MovieClip.prototype.prevScene = function() {
};


/**
 * @export
 */
flash.display.MovieClip.prototype.stop = function() {
};


flash.display.MovieClip.prototype.get__currentFrame = function() {
  return this._currentFrame;
};


flash.display.MovieClip.prototype.get__currentFrameLabel = function() {
  return this._currentFrameLabel;
};


flash.display.MovieClip.prototype.get__currentLabel = function() {
  return this._currentLabel;
};


flash.display.MovieClip.prototype.get__currentLabels = function() {
  return [];
};


flash.display.MovieClip.prototype.get__currentScene = function() {
  return this._currentScene;
};


flash.display.MovieClip.prototype.get__framesLoaded = function() {
  return this._framesLoaded;
};


flash.display.MovieClip.prototype.get__isPlaying = function() {
  return this._isPlaying;
};


flash.display.MovieClip.prototype.get__scenes = function() {
  return this._scenes;
};


flash.display.MovieClip.prototype.get__totalFrames = function() {
  return this._totalFrames;
};


Object.defineProperties(flash.display.MovieClip.prototype, /** @lends {flash.display.MovieClip.prototype} */ {
/**
  * @export
  * @type {number} */
currentFrame: {
get: flash.display.MovieClip.prototype.get__currentFrame},
/**
  * @export
  * @type {string} */
currentFrameLabel: {
get: flash.display.MovieClip.prototype.get__currentFrameLabel},
/**
  * @export
  * @type {string} */
currentLabel: {
get: flash.display.MovieClip.prototype.get__currentLabel},
/**
  * @export
  * @type {Array} */
currentLabels: {
get: flash.display.MovieClip.prototype.get__currentLabels},
/**
  * @export
  * @type {flash.display.Scene} */
currentScene: {
get: flash.display.MovieClip.prototype.get__currentScene},
/**
  * @export
  * @type {number} */
framesLoaded: {
get: flash.display.MovieClip.prototype.get__framesLoaded},
/**
  * @export
  * @type {boolean} */
isPlaying: {
get: flash.display.MovieClip.prototype.get__isPlaying},
/**
  * @export
  * @type {Array} */
scenes: {
get: flash.display.MovieClip.prototype.get__scenes},
/**
  * @export
  * @type {number} */
totalFrames: {
get: flash.display.MovieClip.prototype.get__totalFrames}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.MovieClip.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MovieClip', qName: 'flash.display.MovieClip', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.MovieClip.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'enabled': { type: 'Boolean'},
        'trackAsMenu': { type: 'Boolean'}
      };
    },
    accessors: function () {
      return {
        'currentFrame': { type: 'int', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'currentFrameLabel': { type: 'String', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'currentLabel': { type: 'String', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'currentLabels': { type: 'Array', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'currentScene': { type: 'flash.display.Scene', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'framesLoaded': { type: 'int', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'isPlaying': { type: 'Boolean', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'scenes': { type: 'Array', access: 'readonly', declaredBy: 'flash.display.MovieClip'},
        'totalFrames': { type: 'int', access: 'readonly', declaredBy: 'flash.display.MovieClip'}
      };
    },
    methods: function () {
      return {
        'MovieClip': { type: '', declaredBy: 'flash.display.MovieClip'},
        'tweenChild': { type: 'void', declaredBy: 'flash.display.MovieClip', parameters: function () { return [  { index: 1, type: 'flash.display.DisplayObject', optional: false },{ index: 2, type: 'Object', optional: false },{ index: 3, type: 'Number', optional: false } ]; }},
        'gotoAndPlay': { type: 'void', declaredBy: 'flash.display.MovieClip', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: true } ]; }},
        'gotoAndStop': { type: 'void', declaredBy: 'flash.display.MovieClip', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: true } ]; }},
        'nextFrame': { type: 'void', declaredBy: 'flash.display.MovieClip'},
        'nextScene': { type: 'void', declaredBy: 'flash.display.MovieClip'},
        'play': { type: 'void', declaredBy: 'flash.display.MovieClip'},
        'prevFrame': { type: 'void', declaredBy: 'flash.display.MovieClip'},
        'prevScene': { type: 'void', declaredBy: 'flash.display.MovieClip'},
        'stop': { type: 'void', declaredBy: 'flash.display.MovieClip'}
      };
    }
  };
};
