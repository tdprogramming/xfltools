/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\models\DataGridCollectionViewModel.as
 * org.apache.royale.html.beads.models.DataGridCollectionViewModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.models.DataGridCollectionViewModel');
/* Royale Dependency List: org.apache.royale.core.IBeadModel,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel');
goog.require('org.apache.royale.core.IDataGridModel');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel}
 * @implements {org.apache.royale.core.IDataGridModel}
 */
org.apache.royale.html.beads.models.DataGridCollectionViewModel = function() {
  org.apache.royale.html.beads.models.DataGridCollectionViewModel.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.models.DataGridCollectionViewModel, org.apache.royale.html.beads.models.SingleSelectionCollectionViewModel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.models.DataGridCollectionViewModel', org.apache.royale.html.beads.models.DataGridCollectionViewModel);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype._columns;


/**
 * @private
 * @type {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype._headerModel;


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.handleHeaderModelChange = function(event) {
  this.dispatchEvent(new org.apache.royale.events.Event("headerModelChanged"));
};


org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.get__columns = function() {
  return this._columns;
};


org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.set__columns = function(value) {
  if (this._columns != value) {
    this._columns = value;
    this.dispatchEvent(new org.apache.royale.events.Event("columnsChanged"));
  }
};


org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.get__headerModel = function() {
  return this._headerModel;
};


org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.set__headerModel = function(value) {
  if (this._headerModel != value) {
    this._headerModel = value;
    this.dispatchEvent(new org.apache.royale.events.Event("headerModelChanged"));
    this._headerModel.addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.handleHeaderModelChange, this, 'handleHeaderModelChange'));
  }
};


Object.defineProperties(org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype, /** @lends {org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype} */ {
/**
  * @export
  * @type {Array} */
columns: {
get: org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.get__columns,
set: org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.set__columns},
/**
  * @export
  * @type {org.apache.royale.core.IBeadModel} */
headerModel: {
get: org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.get__headerModel,
set: org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.set__headerModel}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridCollectionViewModel', qName: 'org.apache.royale.html.beads.models.DataGridCollectionViewModel', kind: 'class' }], interfaces: [org.apache.royale.core.IDataGridModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.models.DataGridCollectionViewModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'columns': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataGridCollectionViewModel'},
        'headerModel': { type: 'org.apache.royale.core.IBeadModel', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.models.DataGridCollectionViewModel'}
      };
    },
    methods: function () {
      return {
        'DataGridCollectionViewModel': { type: '', declaredBy: 'org.apache.royale.html.beads.models.DataGridCollectionViewModel'}
      };
    }
  };
};
