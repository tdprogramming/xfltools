/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\DOMLibrary.as
 * org.xfltools.xfldom.DOMLibrary
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.DOMLibrary');
/* Royale Dependency List: flash.events.Event,flash.utils.Dictionary,org.xfltools.commands.CommandQueue,org.xfltools.commands.LoadDOMSymbolItemCommand,org.xfltools.xfldom.DOMSymbolInstance,org.xfltools.xfldom.DOMSymbolItem,org.apache.royale.utils.Language,XML*/

goog.require('flash.events.EventDispatcher');



/**
 * @constructor
 * @extends {flash.events.EventDispatcher}
 */
org.xfltools.xfldom.DOMLibrary = function() {
  org.xfltools.xfldom.DOMLibrary.base(this, 'constructor');

this._symbols = new flash.utils.Dictionary();
};
goog.inherits(org.xfltools.xfldom.DOMLibrary, flash.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.DOMLibrary', org.xfltools.xfldom.DOMLibrary);


/**
 * @private
 * @type {flash.utils.Dictionary}
 */
org.xfltools.xfldom.DOMLibrary.prototype._symbols;


/**
 * @export
 * @param {Array} symbolURLs
 */
org.xfltools.xfldom.DOMLibrary.prototype.load = function(symbolURLs) {
  var /** @type {org.xfltools.commands.CommandQueue} */ commandQueue = new org.xfltools.commands.CommandQueue();
  var foreachiter0_target = symbolURLs;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var symbolURL = foreachiter0_target[foreachiter0];
  {
    commandQueue.queue(new org.xfltools.commands.LoadDOMSymbolItemCommand(symbolURL, this));
  }}
  
  commandQueue.addEventListener(flash.events.Event.COMPLETE, org.apache.royale.utils.Language.closure(this.onLoadComplete, this, 'onLoadComplete'));
  commandQueue.execute();
};


/**
 * @private
 * @param {flash.events.Event} event
 */
org.xfltools.xfldom.DOMLibrary.prototype.onLoadComplete = function(event) {
  var /** @type {org.xfltools.commands.CommandQueue} */ commandQueue = org.apache.royale.utils.Language.as(event.target, org.xfltools.commands.CommandQueue);
  commandQueue.removeEventListener(flash.events.Event.COMPLETE, org.apache.royale.utils.Language.closure(this.onLoadComplete, this, 'onLoadComplete'));
  this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
};


/**
 * @export
 * @param {org.xfltools.xfldom.DOMSymbolItem} domSymbolItem
 */
org.xfltools.xfldom.DOMLibrary.prototype.addSymbol = function(domSymbolItem) {
  this._symbols[domSymbolItem.name] = domSymbolItem;
};


/**
 * @export
 * @param {string} symbolName
 * @return {org.xfltools.xfldom.DOMSymbolInstance}
 */
org.xfltools.xfldom.DOMLibrary.prototype.instantiateSymbol = function(symbolName) {
  if (!this._symbols[symbolName]) {
    throw new Error("ERROR - DOMLibrary.instantiateSymbol() - no symbol with name: " + symbolName);
    return null;
  }
  return org.apache.royale.utils.Language.as(this._symbols[symbolName], org.xfltools.xfldom.DOMSymbolItem, true).instantiate();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.DOMLibrary.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DOMLibrary', qName: 'org.xfltools.xfldom.DOMLibrary', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.DOMLibrary.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'DOMLibrary': { type: '', declaredBy: 'org.xfltools.xfldom.DOMLibrary'},
        'load': { type: 'void', declaredBy: 'org.xfltools.xfldom.DOMLibrary', parameters: function () { return [  { index: 1, type: 'Vector.<String>', optional: false } ]; }},
        'addSymbol': { type: 'void', declaredBy: 'org.xfltools.xfldom.DOMLibrary', parameters: function () { return [  { index: 1, type: 'org.xfltools.xfldom.DOMSymbolItem', optional: false } ]; }},
        'instantiateSymbol': { type: 'org.xfltools.xfldom.DOMSymbolInstance', declaredBy: 'org.xfltools.xfldom.DOMLibrary', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
