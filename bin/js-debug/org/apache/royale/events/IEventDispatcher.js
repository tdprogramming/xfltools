/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\IEventDispatcher.as
 * org.apache.royale.events.IEventDispatcher
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.IEventDispatcher');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.events.IEventDispatcher = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.IEventDispatcher', org.apache.royale.events.IEventDispatcher);
/**
 * @param {string} type
 * @param {Function} handler
 * @param {boolean=} opt_capture
 * @param {Object=} opt_handlerScope
 */
org.apache.royale.events.IEventDispatcher.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
};
/**
 * @param {string} type
 * @param {Function} handler
 * @param {boolean=} opt_capture
 * @param {Object=} opt_handlerScope
 */
org.apache.royale.events.IEventDispatcher.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
};
/**
 * @param {string} type
 * @return {boolean}
 */
org.apache.royale.events.IEventDispatcher.prototype.hasEventListener = function(type) {
};
/**
 * @param {Object} event
 * @return {boolean}
 */
org.apache.royale.events.IEventDispatcher.prototype.dispatchEvent = function(event) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.IEventDispatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IEventDispatcher', qName: 'org.apache.royale.events.IEventDispatcher', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.IEventDispatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'addEventListener': { type: 'void', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.royale.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};
