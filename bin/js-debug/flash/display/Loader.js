/**
 * Generated by Apache Royale Compiler from flash\display\Loader.as
 * flash.display.Loader
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.display.Loader');
/* Royale Dependency List: flash.display.Bitmap,flash.display.BitmapData,flash.display.DisplayObject,flash.display.LoaderInfo,flash.events.Event,flash.net.URLRequest,flash.system.LoaderContext,flash.utils.ByteArray,org.xfltools.display.XFLLoader,org.apache.royale.utils.Language,XML*/

goog.require('flash.display.DisplayObjectContainer');



/**
 * @flexjsignorecoercion createjs.Container
 * @constructor
 * @extends {flash.display.DisplayObjectContainer}
 */
flash.display.Loader = function() {
  flash.display.Loader.base(this, 'constructor');
};
goog.inherits(flash.display.Loader, flash.display.DisplayObjectContainer);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.display.Loader', flash.display.Loader);


/**
 * @private
 * @const
 * @type {string}
 */
flash.display.Loader.CONTENT_TYPE_IMAGE = "CONTENT_TYPE_IMAGE";


/**
 * @private
 * @const
 * @type {string}
 */
flash.display.Loader.CONTENT_TYPE_XFL = "CONTENT_TYPE_XFL";


/**
 * @private
 * @type {flash.display.DisplayObject}
 */
flash.display.Loader.prototype._content;


/**
 * @private
 * @type {Object}
 */
flash.display.Loader.prototype._contentJavascriptImplementation;


/**
 * @private
 * @type {string}
 */
flash.display.Loader.prototype._contentType;


/**
 * @private
 * @type {org.xfltools.display.XFLLoader}
 */
flash.display.Loader.prototype._xflLoader;


/**
 * @private
 * @type {flash.display.LoaderInfo}
 */
flash.display.Loader.prototype._contentLoaderInfo;


/**
 * @export
 * @return {flash.display.LoaderInfo}
 */
flash.display.Loader.prototype.contentLoaderInfo = function() {
  return this._contentLoaderInfo;
};


/**
 * Cancels a load() method operation that is currently in progress for the Loader instance.
 * @export
 */
flash.display.Loader.prototype.close = function() {
};


/**
 * Loads a SWF, JPEG, progressive JPEG, unanimated GIF, or PNG file into an object that is a child of this Loader object.
 * @export
 * @param {flash.net.URLRequest} request
 * @param {flash.system.LoaderContext=} context
 */
flash.display.Loader.prototype.load = function(request, context) {
  context = typeof context !== 'undefined' ? context : null;
  var /** @type {Array} */ urlParts = request.url.split(".");
  var /** @type {string} */ fileExt = org.apache.royale.utils.Language.string(urlParts[urlParts.length - 1].toLowerCase());
  switch (fileExt) {
    case "png":
    
    case "jpg":
    
    case "jpeg":
    
    case "gif":
      this._contentType = flash.display.Loader.CONTENT_TYPE_IMAGE;
      this._contentJavascriptImplementation = window["flashjs_display_Loader_creatContentJSImplementation"](this._javascriptImplementation, fileExt, request.url);
      this.addEventListener(flash.events.Event.ENTER_FRAME, org.apache.royale.utils.Language.closure(this.onTick, this, 'onTick'));
      this._javascriptImplementation.addChild(this._contentJavascriptImplementation);
      break;
    case "swf":
      urlParts[urlParts.length - 1] = "xfl";
      this.loadXFL(urlParts.join("."));
      break;
    case "xfl":
      this.loadXFL(request.url);
      break;
    default:
      throw new Error("Error, Loader file format not supported: " + fileExt);
      break;
  }
};


/**
 * @private
 * @param {string} url
 */
flash.display.Loader.prototype.loadXFL = function(url) {
  this._xflLoader = new org.xfltools.display.XFLLoader();
  this._xflLoader.load(url);
  this.addChild(this._xflLoader.rootTimeline);
};


/**
 * @private
 * @param {flash.events.Event} tickEvent
 */
flash.display.Loader.prototype.onTick = function(tickEvent) {
  if (this._contentJavascriptImplementation.image == null) {
    org.apache.royale.utils.Language.trace("js imp image is null");
  } else {
    if (this._contentJavascriptImplementation.image.complete) {
      this.onLoadComplete();
    }
  }
};


/**
 * @private
 */
flash.display.Loader.prototype.onLoadComplete = function() {
  this.removeEventListener(flash.events.Event.ENTER_FRAME, org.apache.royale.utils.Language.closure(this.onTick, this, 'onTick'));
  var /** @type {Object} */ loadedContent = this._contentJavascriptImplementation.image;
  switch (this._contentType) {
    case flash.display.Loader.CONTENT_TYPE_IMAGE:
      var /** @type {flash.display.BitmapData} */ bitmapData = new flash.display.BitmapData(loadedContent.width, loadedContent.height);
      bitmapData.initFromImageElement(loadedContent);
      this._content = new flash.display.Bitmap(bitmapData);
      this.addChild(this._content);
      break;
    default:
      break;
  }
  this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
};


/**
 * Loads from binary data stored in a ByteArray object.
 * @export
 * @param {flash.utils.ByteArray} bytes
 * @param {flash.system.LoaderContext=} context
 */
flash.display.Loader.prototype.loadBytes = function(bytes, context) {
  context = typeof context !== 'undefined' ? context : null;
};


/**
 * Removes a child of this Loader object that was loaded by using the load() method.
 * @export
 */
flash.display.Loader.prototype.unload = function() {
};


/**
 * Attempts to unload child SWF file contents and stops the execution of commands from loaded SWF files.
 * @export
 * @param {boolean=} gc
 */
flash.display.Loader.prototype.unloadAndStop = function(gc) {
  gc = typeof gc !== 'undefined' ? gc : true;
};


flash.display.Loader.prototype.get__content = function() {
  return this._content;
};


Object.defineProperties(flash.display.Loader.prototype, /** @lends {flash.display.Loader.prototype} */ {
/**
  * @export
  * @type {flash.display.DisplayObject} */
content: {
get: flash.display.Loader.prototype.get__content}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.display.Loader.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Loader', qName: 'flash.display.Loader', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.display.Loader.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'content': { type: 'flash.display.DisplayObject', access: 'readonly', declaredBy: 'flash.display.Loader'}
      };
    },
    methods: function () {
      return {
        'contentLoaderInfo': { type: 'flash.display.LoaderInfo', declaredBy: 'flash.display.Loader'},
        'Loader': { type: '', declaredBy: 'flash.display.Loader'},
        'close': { type: 'void', declaredBy: 'flash.display.Loader'},
        'load': { type: 'void', declaredBy: 'flash.display.Loader', parameters: function () { return [  { index: 1, type: 'flash.net.URLRequest', optional: false },{ index: 2, type: 'flash.system.LoaderContext', optional: true } ]; }},
        'loadBytes': { type: 'void', declaredBy: 'flash.display.Loader', parameters: function () { return [  { index: 1, type: 'flash.utils.ByteArray', optional: false },{ index: 2, type: 'flash.system.LoaderContext', optional: true } ]; }},
        'unload': { type: 'void', declaredBy: 'flash.display.Loader'},
        'unloadAndStop': { type: 'void', declaredBy: 'flash.display.Loader', parameters: function () { return [  { index: 1, type: 'Boolean', optional: true } ]; }}
      };
    }
  };
};
