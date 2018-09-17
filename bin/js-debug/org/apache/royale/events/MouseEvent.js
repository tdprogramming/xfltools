/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\MouseEvent.as
 * org.apache.royale.events.MouseEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.MouseEvent');
/* Royale Dependency List: goog.events.BrowserEvent,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.getTargetWrapper,org.apache.royale.events.utils.EventUtils,org.apache.royale.geom.Point,org.apache.royale.utils.PointUtils*/
/* Royale Static Dependency List: org.apache.royale.events.MouseEvent*/

goog.require('org.apache.royale.events.Event');
goog.require('org.apache.royale.events.IRoyaleEvent');
goog.require('org.apache.royale.events.IBrowserEvent');



/**
 *  Constructor.
 *
 *  @asparam type The name of the event.
 *  @asparam bubbles Whether the event bubbles.
 *  @asparam cancelable Whether the event can be canceled.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.Event}
 * @implements {org.apache.royale.events.IRoyaleEvent}
 * @implements {org.apache.royale.events.IBrowserEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {number=} localX
 * @param {number=} localY
 * @param {Object=} relatedObject
 * @param {boolean=} ctrlKey
 * @param {boolean=} altKey
 * @param {boolean=} shiftKey
 * @param {boolean=} buttonDown
 * @param {number=} delta
 * @param {boolean=} commandKey
 * @param {boolean=} controlKey
 * @param {number=} clickCount
 * @param {org.apache.royale.events.IEventDispatcher=} targetBeforeBubbling
 */
org.apache.royale.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount, targetBeforeBubbling) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  localX = typeof localX !== 'undefined' ? localX : NaN;
  localY = typeof localY !== 'undefined' ? localY : NaN;
  relatedObject = typeof relatedObject !== 'undefined' ? relatedObject : null;
  ctrlKey = typeof ctrlKey !== 'undefined' ? ctrlKey : false;
  altKey = typeof altKey !== 'undefined' ? altKey : false;
  shiftKey = typeof shiftKey !== 'undefined' ? shiftKey : false;
  buttonDown = typeof buttonDown !== 'undefined' ? buttonDown : false;
  delta = typeof delta !== 'undefined' ? delta : 0;
  commandKey = typeof commandKey !== 'undefined' ? commandKey : false;
  controlKey = typeof controlKey !== 'undefined' ? controlKey : false;
  clickCount = typeof clickCount !== 'undefined' ? clickCount : 0;
  targetBeforeBubbling = typeof targetBeforeBubbling !== 'undefined' ? targetBeforeBubbling : null;
  org.apache.royale.events.MouseEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.localX = localX;
  this.localY = localY;
  this.relatedObject = relatedObject;
  this.ctrlKey = ctrlKey;
  this.altKey = altKey;
  this.shiftKey = shiftKey;
  this.buttonDown = buttonDown;
  this.delta = delta;
  this.commandKey = commandKey;
  this.controlKey = controlKey;
  this.clickCount = clickCount;
};
goog.inherits(org.apache.royale.events.MouseEvent, org.apache.royale.events.Event);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.MouseEvent', org.apache.royale.events.MouseEvent);


/**
 * @private
 * @param {string} s
 * @return {string}
 */
org.apache.royale.events.MouseEvent.platformConstant = function(s) {
  return s.toLowerCase();
};


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_DOWN;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_MOVE;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_UP;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_OUT;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.MOUSE_OVER;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.ROLL_OVER;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.ROLL_OUT;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.CLICK = "click";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.DOUBLE_CLICK = "dblclick";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.royale.events.MouseEvent.WHEEL = "wheel";


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.wrappedEvent;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.nativeEvent;


/**
 * @export
 * @param {goog.events.BrowserEvent} event
 */
org.apache.royale.events.MouseEvent.prototype.wrapEvent = function(event) {
  this.wrappedEvent = event;
  this.nativeEvent = event.getBrowserEvent();
};


/**
 * @export
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype.relatedObject;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.ctrlKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.altKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.shiftKey;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype._buttons = -1;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype._delta = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype._deltaX = 0;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype._deltaY = 0;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.commandKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype.controlKey;


/**
 * @export
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype.clickCount = 0;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.MouseEvent.prototype._target;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype._localX;


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.MouseEvent.prototype._localY;


/**
 * @private
 * @type {org.apache.royale.geom.Point}
 */
org.apache.royale.events.MouseEvent.prototype._stagePoint;


/**
 * Whether the default action has been prevented.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.preventDefault = function() {
  if (this.wrappedEvent)
    this.wrappedEvent.preventDefault(); else {
    org.apache.royale.events.MouseEvent.superClass_.preventDefault.apply(this);
    this._defaultPrevented = true;
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.prototype._defaultPrevented;


/**
 * @asprivate
 * @private
 * @return {boolean}
 */
org.apache.royale.events.MouseEvent.installRollOverMixin = function() {
  window.addEventListener(org.apache.royale.events.MouseEvent.MOUSE_OVER, org.apache.royale.events.MouseEvent.mouseOverHandler, false);
  return true;
};


/**
 * @asparam e The event.
 * RollOver/RollOut is entirely implemented in mouseOver because
 * when a parent and child share an edge, you only get a mouseout
 * for the child and not the parent and you need to send rollout
 * to both.  A similar issue exists for rollover.
 * @private
 * @param {org.apache.royale.events.MouseEvent} e
 */
org.apache.royale.events.MouseEvent.mouseOverHandler = function(e) {
  var /** @type {number} */ j = 0;
  var /** @type {number} */ m = 0;
  var /** @type {Array} */ outs;
  var /** @type {MouseEvent} */ me;
  var /** @type {Object} */ parent;
  var /** @type {Object} */ target = e.target.royale_wrapper;
  if (target == null)
    return;
  var /** @type {Array} */ targets = org.apache.royale.events.MouseEvent.targets;
  var /** @type {number} */ index = targets.indexOf(target);
  if (index != -1) {
    outs = targets.slice(index + 1);
    m = outs.length;
    for (j = 0; j < m; j++) {
      me = org.apache.royale.events.MouseEvent.makeMouseEvent(org.apache.royale.events.MouseEvent.ROLL_OUT, e);
      outs[j].element.dispatchEvent(me);
    }
    org.apache.royale.events.MouseEvent.targets = targets.slice(0, index + 1);
  } else {
    var /** @type {Array} */ newTargets = [target];
    if (!('parent' in target))
      parent = null;
    else
      parent = target.parent;
    while (parent) {
      index = targets.indexOf(parent);
      if (index == -1) {
        newTargets.unshift(parent);
        if (!('parent' in parent))
          break;
        parent = parent.parent;
      } else {
        outs = targets.slice(index + 1);
        m = outs.length;
        for (j = 0; j < m; j++) {
          me = org.apache.royale.events.MouseEvent.makeMouseEvent(org.apache.royale.events.MouseEvent.ROLL_OUT, e);
          outs[j].element.dispatchEvent(me);
        }
        targets = targets.slice(0, index + 1);
        break;
      }
    }
    var /** @type {number} */ n = newTargets.length;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      me = org.apache.royale.events.MouseEvent.makeMouseEvent(org.apache.royale.events.MouseEvent.ROLL_OVER, e);
      newTargets[i].element.dispatchEvent(me);
    }
    org.apache.royale.events.MouseEvent.targets = targets.concat(newTargets);
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.events.MouseEvent.rollOverMixin;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.events.MouseEvent.targets = [];


/**
 * @asparam {string} type The event type.
 * @asparam {Event} e The mouse event.
 * @asreturn {MouseEvent} The new event.
 * @private
 * @param {string} type
 * @return {MouseEvent}
 */
org.apache.royale.events.MouseEvent.makeMouseEvent = function(type, e) {
  var /** @type {MouseEvent} */ out = org.apache.royale.events.utils.EventUtils.createMouseEvent(type, false, false, {view:e.view, detail:e.detail, screenX:e.screenX, screenY:e.screenY, clientX:e.clientX, clientY:e.clientY, ctrlKey:e.ctrlKey, altKey:e.altKey, shiftKey:e.shiftKey, metaKey:e.metaKey, button:e.button, relatedTarget:e.relatedTarget});
  return out;
};


/**
 * Create a copy/clone of the Event object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.cloneEvent = function() {
  return new org.apache.royale.events.MouseEvent(this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey, this.shiftKey, this.buttonDown, this.delta);
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.stopImmediatePropagation = function() {
  if (this.wrappedEvent) {
    this.wrappedEvent.stopPropagation();
    this.nativeEvent.stopImmediatePropagation();
  }
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.9
 * @export
 * @override
 */
org.apache.royale.events.MouseEvent.prototype.stopPropagation = function() {
  if (this.wrappedEvent)
    this.wrappedEvent.stopPropagation();
};


org.apache.royale.events.MouseEvent.prototype.get__buttonDown = function() {
  if (this._buttons > -1)
    return this._buttons == 1;
  if (!this.wrappedEvent)
    return false;
  if ('buttons' in this.nativeEvent)
    this._buttons = Number(this.nativeEvent["buttons"]);
  else
    this._buttons = Number(this.nativeEvent["which"]);
  return this._buttons == 1;
};


org.apache.royale.events.MouseEvent.prototype.set__buttonDown = function(value) {
  this._buttons = value ? 1 : 0;
};


org.apache.royale.events.MouseEvent.prototype.get__buttons = function() {
  return this._buttons;
};


org.apache.royale.events.MouseEvent.prototype.set__buttons = function(value) {
  this._buttons = value;
};


org.apache.royale.events.MouseEvent.prototype.get__delta = function() {
  return this.nativeEvent ? this.nativeEvent.deltaY : this._delta;
};


org.apache.royale.events.MouseEvent.prototype.set__delta = function(value) {
  this._delta = value;
};


org.apache.royale.events.MouseEvent.prototype.get__deltaX = function() {
  return this.nativeEvent ? this.nativeEvent.deltaX : this._deltaX;
};


org.apache.royale.events.MouseEvent.prototype.set__deltaX = function(value) {
  this._deltaX = value;
};


org.apache.royale.events.MouseEvent.prototype.get__deltaY = function() {
  return this.nativeEvent ? this.nativeEvent.deltaY : this._deltaY;
};


org.apache.royale.events.MouseEvent.prototype.set__deltaY = function(value) {
  this._deltaY = value;
};


org.apache.royale.events.MouseEvent.prototype.get__target = function() {
  return this.wrappedEvent ? org.apache.royale.events.getTargetWrapper(this.wrappedEvent.target) : this._target;
};


org.apache.royale.events.MouseEvent.prototype.set__target = function(value) {
  this._target = value;
};


org.apache.royale.events.MouseEvent.prototype.get__currentTarget = function() {
  return this.wrappedEvent ? org.apache.royale.events.getTargetWrapper(this.wrappedEvent.currentTarget) : this._target;
};


org.apache.royale.events.MouseEvent.prototype.set__currentTarget = function(value) {
  this._target = value;
};


org.apache.royale.events.MouseEvent.prototype.get__targetBeforeBubbling = function() {
  return this.target;
};


org.apache.royale.events.MouseEvent.prototype.get__clientX = function() {
  return this.wrappedEvent ? this.wrappedEvent.clientX : this._localX;
};


org.apache.royale.events.MouseEvent.prototype.get__localX = function() {
  return this.clientX;
};


org.apache.royale.events.MouseEvent.prototype.set__localX = function(value) {
  this._localX = value;
};


org.apache.royale.events.MouseEvent.prototype.get__clientY = function() {
  return this.wrappedEvent ? this.wrappedEvent.clientY : this._localY;
};


org.apache.royale.events.MouseEvent.prototype.get__localY = function() {
  return this.clientY;
};


org.apache.royale.events.MouseEvent.prototype.set__localY = function(value) {
  this._localY = value;
};


org.apache.royale.events.MouseEvent.prototype.get__screenX = function() {
  if (this.wrappedEvent)
    return this.wrappedEvent.screenX;
  if (!this.target)
    return this.localX;
  return this.stagePoint.x;
};


org.apache.royale.events.MouseEvent.prototype.get__screenY = function() {
  if (this.wrappedEvent)
    return this.wrappedEvent.screenY;
  if (!this.target)
    return this.localY;
  return this.stagePoint.y;
};


org.apache.royale.events.MouseEvent.prototype.get__stagePoint = function() {
  if (!this._stagePoint) {
    var /** @type {org.apache.royale.geom.Point} */ localPoint = new org.apache.royale.geom.Point(this.localX, this.localY);
    this._stagePoint = org.apache.royale.utils.PointUtils.localToGlobal(localPoint, this.target);
  }
  return this._stagePoint;
};


org.apache.royale.events.MouseEvent.prototype.get__defaultPrevented = function() {
  return this.wrappedEvent ? this.wrappedEvent.defaultPrevented : this._defaultPrevented;
};


org.apache.royale.events.MouseEvent.prototype.set__defaultPrevented = function(value) {
  this._defaultPrevented = value;
};


Object.defineProperties(org.apache.royale.events.MouseEvent.prototype, /** @lends {org.apache.royale.events.MouseEvent.prototype} */ {
/**
  * @export
  * @type {boolean} */
buttonDown: {
get: org.apache.royale.events.MouseEvent.prototype.get__buttonDown,
set: org.apache.royale.events.MouseEvent.prototype.set__buttonDown},
/**
  * @export
  * @type {number} */
buttons: {
get: org.apache.royale.events.MouseEvent.prototype.get__buttons,
set: org.apache.royale.events.MouseEvent.prototype.set__buttons},
/**
  * @export
  * @type {number} */
delta: {
get: org.apache.royale.events.MouseEvent.prototype.get__delta,
set: org.apache.royale.events.MouseEvent.prototype.set__delta},
/**
  * @export
  * @type {number} */
deltaX: {
get: org.apache.royale.events.MouseEvent.prototype.get__deltaX,
set: org.apache.royale.events.MouseEvent.prototype.set__deltaX},
/**
  * @export
  * @type {number} */
deltaY: {
get: org.apache.royale.events.MouseEvent.prototype.get__deltaY,
set: org.apache.royale.events.MouseEvent.prototype.set__deltaY},
/**
  * @export
  * @type {Object} */
target: {
get: org.apache.royale.events.MouseEvent.prototype.get__target,
set: org.apache.royale.events.MouseEvent.prototype.set__target},
/**
  * @export
  * @type {Object} */
currentTarget: {
get: org.apache.royale.events.MouseEvent.prototype.get__currentTarget,
set: org.apache.royale.events.MouseEvent.prototype.set__currentTarget},
/**
  * @export
  * @type {Object} */
targetBeforeBubbling: {
get: org.apache.royale.events.MouseEvent.prototype.get__targetBeforeBubbling},
/**
  * @export
  * @type {number} */
clientX: {
get: org.apache.royale.events.MouseEvent.prototype.get__clientX},
/**
  * @export
  * @type {number} */
localX: {
get: org.apache.royale.events.MouseEvent.prototype.get__localX,
set: org.apache.royale.events.MouseEvent.prototype.set__localX},
/**
  * @export
  * @type {number} */
clientY: {
get: org.apache.royale.events.MouseEvent.prototype.get__clientY},
/**
  * @export
  * @type {number} */
localY: {
get: org.apache.royale.events.MouseEvent.prototype.get__localY,
set: org.apache.royale.events.MouseEvent.prototype.set__localY},
/**
  * @export
  * @type {number} */
screenX: {
get: org.apache.royale.events.MouseEvent.prototype.get__screenX},
/**
  * @export
  * @type {number} */
screenY: {
get: org.apache.royale.events.MouseEvent.prototype.get__screenY},
/**
  * @export
  * @type {org.apache.royale.geom.Point} */
stagePoint: {
get: org.apache.royale.events.MouseEvent.prototype.get__stagePoint},
/**
  * @export
  * @type {boolean} */
defaultPrevented: {
get: org.apache.royale.events.MouseEvent.prototype.get__defaultPrevented,
set: org.apache.royale.events.MouseEvent.prototype.set__defaultPrevented}}
);

org.apache.royale.events.MouseEvent.MOUSE_DOWN = org.apache.royale.events.MouseEvent.platformConstant("mouseDown");
org.apache.royale.events.MouseEvent.MOUSE_MOVE = org.apache.royale.events.MouseEvent.platformConstant("mouseMove");
org.apache.royale.events.MouseEvent.MOUSE_UP = org.apache.royale.events.MouseEvent.platformConstant("mouseUp");
org.apache.royale.events.MouseEvent.MOUSE_OUT = org.apache.royale.events.MouseEvent.platformConstant("mouseOut");
org.apache.royale.events.MouseEvent.MOUSE_OVER = org.apache.royale.events.MouseEvent.platformConstant("mouseOver");
org.apache.royale.events.MouseEvent.ROLL_OVER = org.apache.royale.events.MouseEvent.platformConstant("rollOver");
org.apache.royale.events.MouseEvent.ROLL_OUT = org.apache.royale.events.MouseEvent.platformConstant("rollOut");
org.apache.royale.events.MouseEvent.rollOverMixin = org.apache.royale.events.MouseEvent.installRollOverMixin();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.MouseEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MouseEvent', qName: 'org.apache.royale.events.MouseEvent', kind: 'class' }], interfaces: [org.apache.royale.events.IRoyaleEvent, org.apache.royale.events.IBrowserEvent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.MouseEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'relatedObject': { type: 'Object'},
        'ctrlKey': { type: 'Boolean'},
        'altKey': { type: 'Boolean'},
        'shiftKey': { type: 'Boolean'},
        'commandKey': { type: 'Boolean'},
        'controlKey': { type: 'Boolean'},
        'clickCount': { type: 'int'}
      };
    },
    accessors: function () {
      return {
        'buttonDown': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'buttons': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'delta': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'deltaX': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'deltaY': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'target': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'currentTarget': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'targetBeforeBubbling': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'clientX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'localX': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'clientY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'localY': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'screenX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'screenY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'defaultPrevented': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.MouseEvent'}
      };
    },
    methods: function () {
      return {
        'MouseEvent': { type: '', declaredBy: 'org.apache.royale.events.MouseEvent', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Number', optional: true },{ index: 5, type: 'Number', optional: true },{ index: 6, type: 'Object', optional: true },{ index: 7, type: 'Boolean', optional: true },{ index: 8, type: 'Boolean', optional: true },{ index: 9, type: 'Boolean', optional: true },{ index: 10, type: 'Boolean', optional: true },{ index: 11, type: 'int', optional: true },{ index: 12, type: 'Boolean', optional: true },{ index: 13, type: 'Boolean', optional: true },{ index: 14, type: 'int', optional: true },{ index: 15, type: 'org.apache.royale.events.IEventDispatcher', optional: true } ]; }},
        'wrapEvent': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent', parameters: function () { return [  { index: 1, type: 'goog.events.BrowserEvent', optional: false } ]; }},
        'preventDefault': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'cloneEvent': { type: 'org.apache.royale.events.IRoyaleEvent', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'stopImmediatePropagation': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent'},
        'stopPropagation': { type: 'void', declaredBy: 'org.apache.royale.events.MouseEvent'}
      };
    }
  };
};
