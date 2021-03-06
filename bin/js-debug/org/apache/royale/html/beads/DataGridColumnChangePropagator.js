/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\DataGridColumnChangePropagator.as
 * org.apache.royale.html.beads.DataGridColumnChangePropagator
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataGridColumnChangePropagator');
/* Royale Dependency List: org.apache.royale.core.IBeadModel,org.apache.royale.core.IDataGridModel,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.beads.IDataGridView,org.apache.royale.html.supportClasses.DataGridColumnList,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IChangePropagator');



/**
 * @constructor
 * @implements {org.apache.royale.core.IChangePropagator}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataGridColumnChangePropagator', org.apache.royale.html.beads.DataGridColumnChangePropagator);


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype._strand;


/**
 * @protected
 * @param {org.apache.royale.events.Event} e
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.finishSetup = function(e) {
  var /** @type {org.apache.royale.events.IEventDispatcher} */ model = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.events.IEventDispatcher);
  model.addEventListener('dataProviderChanged', org.apache.royale.utils.Language.closure(this.handleDataProviderChanged, this, 'handleDataProviderChanged'));
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} e
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.handleDataProviderChanged = function(e) {
  var /** @type {org.apache.royale.html.beads.IDataGridView} */ dataGridView = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.html.beads.IDataGridView), org.apache.royale.html.beads.IDataGridView);
  var /** @type {Array} */ lists = dataGridView.columnLists;
  if (lists == null)
    return;
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.core.IDataGridModel);
  for (var /** @type {number} */ i = 0; i < lists.length; i++) {
    var /** @type {org.apache.royale.html.supportClasses.DataGridColumnList} */ list = org.apache.royale.utils.Language.as(lists[i], org.apache.royale.html.supportClasses.DataGridColumnList);
    var /** @type {org.apache.royale.core.ISelectionModel} */ listModel = org.apache.royale.utils.Language.as(list.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.core.ISelectionModel);
    listModel.dataProvider = sharedModel.dataProvider;
  }
};


org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).addEventListener("beadsAdded", org.apache.royale.utils.Language.closure(this.finishSetup, this, 'finishSetup'));
};


Object.defineProperties(org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype, /** @lends {org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridColumnChangePropagator', qName: 'org.apache.royale.html.beads.DataGridColumnChangePropagator', kind: 'class' }], interfaces: [org.apache.royale.core.IChangePropagator] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataGridColumnChangePropagator.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.DataGridColumnChangePropagator'}
      };
    },
    methods: function () {
      return {
        'DataGridColumnChangePropagator': { type: '', declaredBy: 'org.apache.royale.html.beads.DataGridColumnChangePropagator'}
      };
    }
  };
};
