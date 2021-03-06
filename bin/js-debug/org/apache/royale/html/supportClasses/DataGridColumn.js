/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\supportClasses\DataGridColumn.as
 * org.apache.royale.html.supportClasses.DataGridColumn
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.supportClasses.DataGridColumn');
/* Royale Dependency List: org.apache.royale.core.IFactory,org.apache.royale.core.IUIBase,org.apache.royale.html.List*/

goog.require('org.apache.royale.html.supportClasses.IDataGridColumn');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.html.supportClasses.IDataGridColumn}
 */
org.apache.royale.html.supportClasses.DataGridColumn = function() {

this._columnWidth = Number.NaN;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.supportClasses.DataGridColumn', org.apache.royale.html.supportClasses.DataGridColumn);


/**
 * Returns a new instance of a UIBase component to be used as the actual
 * column in the grid.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @export
 * @return {org.apache.royale.core.IUIBase}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype.createColumn = function() {
  var /** @type {org.apache.royale.html.List} */ list = new org.apache.royale.html.List();
  return list;
};


/**
 * @private
 * @type {org.apache.royale.core.IFactory}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype._itemRenderer;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype._columnWidth;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype._label;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype._dataField;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype._className;


org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__itemRenderer = function() {
  return this._itemRenderer;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__itemRenderer = function(value) {
  this._itemRenderer = value;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__columnWidth = function() {
  return this._columnWidth;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__columnWidth = function(value) {
  this._columnWidth = value;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__label = function() {
  return this._label;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__label = function(value) {
  this._label = value;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__dataField = function() {
  return this._dataField;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__dataField = function(value) {
  this._dataField = value;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__className = function() {
  return this._className;
};


org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__className = function(value) {
  this._className = value;
};


Object.defineProperties(org.apache.royale.html.supportClasses.DataGridColumn.prototype, /** @lends {org.apache.royale.html.supportClasses.DataGridColumn.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IFactory} */
itemRenderer: {
get: org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__itemRenderer,
set: org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__itemRenderer},
/**
  * @export
  * @type {number} */
columnWidth: {
get: org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__columnWidth,
set: org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__columnWidth},
/**
  * @export
  * @type {string} */
label: {
get: org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__label,
set: org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__label},
/**
  * @export
  * @type {string} */
dataField: {
get: org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__dataField,
set: org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__dataField},
/**
  * @export
  * @type {string} */
className: {
get: org.apache.royale.html.supportClasses.DataGridColumn.prototype.get__className,
set: org.apache.royale.html.supportClasses.DataGridColumn.prototype.set__className}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridColumn', qName: 'org.apache.royale.html.supportClasses.DataGridColumn', kind: 'class' }], interfaces: [org.apache.royale.html.supportClasses.IDataGridColumn] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.supportClasses.DataGridColumn.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'itemRenderer': { type: 'org.apache.royale.core.IFactory', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'},
        'columnWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'},
        'label': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'},
        'dataField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'},
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'}
      };
    },
    methods: function () {
      return {
        'DataGridColumn': { type: '', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'},
        'createColumn': { type: 'org.apache.royale.core.IUIBase', declaredBy: 'org.apache.royale.html.supportClasses.DataGridColumn'}
      };
    }
  };
};
