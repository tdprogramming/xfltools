/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\supportClasses\TextButtonItemRenderer.as
 * org.apache.royale.html.supportClasses.TextButtonItemRenderer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.TextButtonItemRenderer');
/* Royale Dependency List: org.apache.royale.core.SimpleCSSStylesWithFlex,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.MouseEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.TextButton');
goog.require('org.apache.royale.html.beads.ITextItemRenderer');



/**
 * @constructor
 * @extends {org.apache.royale.html.TextButton}
 * @implements {org.apache.royale.html.beads.ITextItemRenderer}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer = function() {
  org.apache.royale.html.supportClasses.TextButtonItemRenderer.base(this, 'constructor');
  this.style = new org.apache.royale.core.SimpleCSSStylesWithFlex();
  this.addEventListener('click', org.apache.royale.utils.Language.closure(this.handleClickEvent, this, 'handleClickEvent'));
};
goog.inherits(org.apache.royale.html.supportClasses.TextButtonItemRenderer, org.apache.royale.html.TextButton);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.TextButtonItemRenderer', org.apache.royale.html.supportClasses.TextButtonItemRenderer);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._data;


/**
 * @private
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.updateButtonLabelFromData = function() {
  var /** @type {string} */ valueAsString;
  if (this.data == null)
    return;
  if (org.apache.royale.utils.Language.is(this.data, String)) {
    valueAsString = org.apache.royale.utils.Language.as(this.data, String);
  } else if (this.labelField != null) {
    valueAsString = String(this.data[this.labelField]);
  } else if (this.data.hasOwnProperty("label")) {
    valueAsString = String(this.data["label"]);
  } else if (this.data.hasOwnProperty("title")) {
    valueAsString = String(this.data["title"]);
  }
  if (valueAsString)
    this.text = valueAsString;
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.MouseEvent} event
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.handleClickEvent = function(event) {
  var /** @type {org.apache.royale.events.ItemClickedEvent} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemClicked");
  newEvent.multipleSelection = event.shiftKey;
  newEvent.index = this.index;
  newEvent.data = this.data;
  this.dispatchEvent(newEvent);
};


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._itemRendererParent;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._labelField = null;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._listData;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._index = 0;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._hovered;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._selected;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype._down;


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__data = function() {
  return this._data;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__data = function(value) {
  this._data = value;
  this.updateButtonLabelFromData();
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__itemRendererParent = function() {
  return this._itemRendererParent;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__itemRendererParent = function(value) {
  this._itemRendererParent = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__labelField = function() {
  return this._labelField;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__labelField = function(value) {
  this._labelField = value;
  this.updateButtonLabelFromData();
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__listData = function() {
  return this._listData;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__listData = function(value) {
  this._listData = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__index = function() {
  return this._index;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__index = function(value) {
  this._index = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__hovered = function() {
  return this._hovered;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__hovered = function(value) {
  this._hovered = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__selected = function() {
  return this._selected;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__selected = function(value) {
  this._selected = value;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__down = function() {
  return this._down;
};


org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__down = function(value) {
  this._down = value;
};


Object.defineProperties(org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype, /** @lends {org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype} */ {
/**
  * @export
  * @type {Object} */
data: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__data,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__data},
/**
  * @export
  * @type {Object} */
itemRendererParent: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__itemRendererParent,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__itemRendererParent},
/**
  * @export
  * @type {string} */
labelField: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__labelField,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__labelField},
/**
  * @export
  * @type {Object} */
listData: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__listData,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__listData},
/**
  * @export
  * @type {number} */
index: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__index,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__index},
/**
  * @export
  * @type {boolean} */
hovered: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__hovered,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__hovered},
/**
  * @export
  * @type {boolean} */
selected: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__selected,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__selected},
/**
  * @export
  * @type {boolean} */
down: {
get: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.get__down,
set: org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.set__down}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextButtonItemRenderer', qName: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer', kind: 'class' }], interfaces: [org.apache.royale.html.beads.ITextItemRenderer] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.TextButtonItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'itemRendererParent': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'listData': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'index': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'hovered': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'selected': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'},
        'down': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'}
      };
    },
    methods: function () {
      return {
        'TextButtonItemRenderer': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.TextButtonItemRenderer'}
      };
    }
  };
};
