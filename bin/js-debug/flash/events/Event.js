/**
 * Generated by Apache Royale Compiler from flash\events\Event.as
 * flash.events.Event
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('flash.events.Event');
/* Royale Dependency List: XML*/

goog.require('org.xfltools.core.FlashJSObject');



/**
 * @flexjsignorecoercion createjs.Event;
 * @constructor
 * @extends {org.xfltools.core.FlashJSObject}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
flash.events.Event = function(type, bubbles, cancelable) {
  flash.events.Event.base(this, 'constructor');
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  this._javascriptImplementation = window["flashjs_events_Event_construct"](type, bubbles, cancelable);
  this._type = type;
};
goog.inherits(flash.events.Event, org.xfltools.core.FlashJSObject);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('flash.events.Event', flash.events.Event);


/**
 * @private
 * @type {boolean}
 */
flash.events.Event.prototype._bubbles;


/**
 * @private
 * @type {boolean}
 */
flash.events.Event.prototype._cancelable;


/**
 * @private
 * @type {Object}
 */
flash.events.Event.prototype._currentTarget;


/**
 * @private
 * @type {number}
 */
flash.events.Event.prototype._eventPhase = 0;


/**
 * @private
 * @type {Object}
 */
flash.events.Event.prototype._target;


/**
 * @private
 * @type {string}
 */
flash.events.Event.prototype._type;


/**
 * @private
 * @type {boolean}
 */
flash.events.Event.prototype._isDefaultPrevented = false;


/**
 * @export
 * @return {flash.events.Event}
 */
flash.events.Event.prototype.clone = function() {
  return new flash.events.Event(this.type, this.bubbles, this.cancelable);
};


/**
 * @export
 * @return {boolean}
 */
flash.events.Event.prototype.isDefaultPrevented = function() {
  return this._isDefaultPrevented;
};


/**
 * @export
 */
flash.events.Event.prototype.preventDefault = function() {
  this._isDefaultPrevented = true;
};


/**
 * @export
 */
flash.events.Event.prototype.stopImmediatePropagation = function() {
};


/**
 * @export
 */
flash.events.Event.prototype.stopPropagation = function() {
};


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.ACTIVATE = "activate";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.ADDED = "added";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.ADDED_TO_STAGE = "addedToStage";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.BROWSER_ZOOM_CHANGE = "browserZoomChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CANCEL = "cancel";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CHANGE = "change";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CHANNEL_MESSAGE = "channelMessage";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CHANNEL_STATE = "channelState";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CLEAR = "clear";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CLOSE = "close";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CLOSING = "closing";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.COMPLETE = "complete";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CONNECT = "connect";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.COPY = "copy";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.CUT = "cut";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.DEACTIVATE = "deactivate";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.DISPLAYING = "displaying";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.ENTER_FRAME = "enterFrame";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.EXIT_FRAME = "exitFrame";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.EXITING = "exiting";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.FRAME_CONSTRUCTED = "frameConstructed";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.FRAME_LABEL = "frameLabel";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.FULLSCREEN = "fullScreen";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.HTML_BOUNDS_CHANGE = "htmlBoundsChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.HTML_DOM_INITIALIZE = "htmlDOMInitialize";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.HTML_RENDER = "htmlRender";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.ID3 = "id3";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.INIT = "init";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.LOCATION_CHANGE = "locationChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.MOUSE_LEAVE = "mouseLeave";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.NETWORK_CHANGE = "networkChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.OPEN = "open";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.PASTE = "paste";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.PREPARING = "preparing";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.REMOVED = "removed";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.RENDER = "render";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.RESIZE = "resize";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.SCROLL = "scroll";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.SELECT = "select";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.SELECT_ALL = "selectAll";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.SOUND_COMPLETE = "soundComplete";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.STANDARD_ERROR_CLOSE = "standardErrorClose";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.STANDARD_INPUT_CLOSE = "standardInputClose";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.STANDARD_OUTPUT_CLOSE = "standardOutputClose";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.SUSPEND = "suspend";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.TEXTURE_READY = "textureReady";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.TICK = "tick";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.UNLOAD = "unload";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.USER_IDLE = "userIdle";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.USER_PRESENT = "userPresent";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.VIDEO_FRAME = "videoFrame";


/**
 * @export
 * @const
 * @type {string}
 */
flash.events.Event.WORKER_STATE = "workerState";


flash.events.Event.prototype.get__bubbles = function() {
  return this._bubbles;
};


flash.events.Event.prototype.get__cancelable = function() {
  return this.cancelable;
};


flash.events.Event.prototype.get__currentTarget = function() {
  return this._currentTarget;
};


flash.events.Event.prototype.get__eventPhase = function() {
  return this._eventPhase;
};


flash.events.Event.prototype.get__target = function() {
  return this._target;
};


flash.events.Event.prototype.set__target = function(newValue) {
  this._target = newValue;
};


flash.events.Event.prototype.get__type = function() {
  return this._type;
};


Object.defineProperties(flash.events.Event.prototype, /** @lends {flash.events.Event.prototype} */ {
/**
  * @export
  * @type {boolean} */
bubbles: {
get: flash.events.Event.prototype.get__bubbles},
/**
  * @export
  * @type {boolean} */
cancelable: {
get: flash.events.Event.prototype.get__cancelable},
/**
  * @export
  * @type {Object} */
currentTarget: {
get: flash.events.Event.prototype.get__currentTarget},
/**
  * @export
  * @type {number} */
eventPhase: {
get: flash.events.Event.prototype.get__eventPhase},
/**
  * @export
  * @type {Object} */
target: {
get: flash.events.Event.prototype.get__target,
set: flash.events.Event.prototype.set__target},
/**
  * @export
  * @type {string} */
type: {
get: flash.events.Event.prototype.get__type}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
flash.events.Event.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Event', qName: 'flash.events.Event', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
flash.events.Event.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'bubbles': { type: 'Boolean', access: 'readonly', declaredBy: 'flash.events.Event'},
        'cancelable': { type: 'Boolean', access: 'readonly', declaredBy: 'flash.events.Event'},
        'currentTarget': { type: 'Object', access: 'readonly', declaredBy: 'flash.events.Event'},
        'eventPhase': { type: 'uint', access: 'readonly', declaredBy: 'flash.events.Event'},
        'target': { type: 'Object', access: 'readwrite', declaredBy: 'flash.events.Event'},
        'type': { type: 'String', access: 'readonly', declaredBy: 'flash.events.Event'}
      };
    },
    methods: function () {
      return {
        'Event': { type: '', declaredBy: 'flash.events.Event', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'clone': { type: 'flash.events.Event', declaredBy: 'flash.events.Event'},
        'isDefaultPrevented': { type: 'Boolean', declaredBy: 'flash.events.Event'},
        'preventDefault': { type: 'void', declaredBy: 'flash.events.Event'},
        'stopImmediatePropagation': { type: 'void', declaredBy: 'flash.events.Event'},
        'stopPropagation': { type: 'void', declaredBy: 'flash.events.Event'}
      };
    }
  };
};
