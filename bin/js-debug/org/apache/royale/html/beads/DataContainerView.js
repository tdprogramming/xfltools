/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\DataContainerView.as
 * org.apache.royale.html.beads.DataContainerView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataContainerView');
/* Royale Dependency List: org.apache.royale.core.IDataProviderModel,org.apache.royale.core.IItemRendererParent,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.ContainerView');
goog.require('org.apache.royale.html.beads.IListView');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.ContainerView}
 * @implements {org.apache.royale.html.beads.IListView}
 */
org.apache.royale.html.beads.DataContainerView = function() {
  org.apache.royale.html.beads.DataContainerView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.DataContainerView, org.apache.royale.html.beads.ContainerView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataContainerView', org.apache.royale.html.beads.DataContainerView);


/**
 * @protected
 * @type {org.apache.royale.core.IDataProviderModel}
 */
org.apache.royale.html.beads.DataContainerView.prototype.dataModel;


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataContainerView.prototype.beadsAddedHandler = function(event) {
  this.dataModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IDataProviderModel), org.apache.royale.core.IDataProviderModel);
  this.host.addEventListener("itemsCreated", org.apache.royale.utils.Language.closure(this.itemsCreatedHandler, this, 'itemsCreatedHandler'));
  this.dataModel.addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
};


/**
 * @asprivate
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataContainerView.prototype.handleInitComplete = function(event) {
  org.apache.royale.html.beads.DataContainerView.superClass_.handleInitComplete.apply(this, [ event] );
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataContainerView.prototype.itemsCreatedHandler = function(event) {
  this.host.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataContainerView.prototype.dataProviderChangeHandler = function(event) {
  this.performLayout(event);
};


org.apache.royale.html.beads.DataContainerView.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.royale.html.beads.DataContainerView.superClass_.set__strand.apply(this, [ value] );
  this.host.addEventListener("beadsAdded", org.apache.royale.utils.Language.closure(this.beadsAddedHandler, this, 'beadsAddedHandler'));
};


org.apache.royale.html.beads.DataContainerView.prototype.get__dataGroup = function() {
  return org.apache.royale.html.beads.DataContainerView.superClass_.get__contentView.apply(this);
};


Object.defineProperties(org.apache.royale.html.beads.DataContainerView.prototype, /** @lends {org.apache.royale.html.beads.DataContainerView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.DataContainerView.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.IItemRendererParent} */
dataGroup: {
get: org.apache.royale.html.beads.DataContainerView.prototype.get__dataGroup}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataContainerView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataContainerView', qName: 'org.apache.royale.html.beads.DataContainerView', kind: 'class' }], interfaces: [org.apache.royale.html.beads.IListView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataContainerView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.DataContainerView'},
        'dataGroup': { type: 'org.apache.royale.core.IItemRendererParent', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.DataContainerView'}
      };
    },
    methods: function () {
      return {
        'DataContainerView': { type: '', declaredBy: 'org.apache.royale.html.beads.DataContainerView'}
      };
    }
  };
};
