/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\controllers\ListSingleSelectionMouseController.as
 * org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController');
/* Royale Dependency List: org.apache.royale.core.IItemRendererParent,org.apache.royale.core.IRollOverModel,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ItemAddedEvent,org.apache.royale.events.ItemClickedEvent,org.apache.royale.events.ItemRemovedEvent,org.apache.royale.html.beads.IListView,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBeadController');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBeadController}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController', org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController);


/**
 * @protected
 * @type {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.listModel;


/**
 * @protected
 * @type {org.apache.royale.html.beads.IListView}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.listView;


/**
 * @protected
 * @type {org.apache.royale.core.IItemRendererParent}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.dataGroup;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype._strand;


/**
 * @protected
 * @param {org.apache.royale.events.ItemAddedEvent} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.handleItemAdded = function(event) {
  org.apache.royale.utils.Language.as(event.item, org.apache.royale.events.IEventDispatcher, true).addEventListener("itemClicked", org.apache.royale.utils.Language.closure(this.selectedHandler, this, 'selectedHandler'));
  org.apache.royale.utils.Language.as(event.item, org.apache.royale.events.IEventDispatcher, true).addEventListener("itemRollOver", org.apache.royale.utils.Language.closure(this.rolloverHandler, this, 'rolloverHandler'));
  org.apache.royale.utils.Language.as(event.item, org.apache.royale.events.IEventDispatcher, true).addEventListener("itemRollOut", org.apache.royale.utils.Language.closure(this.rolloutHandler, this, 'rolloutHandler'));
};


/**
 * @protected
 * @param {org.apache.royale.events.ItemRemovedEvent} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.handleItemRemoved = function(event) {
  org.apache.royale.utils.Language.as(event.item, org.apache.royale.events.IEventDispatcher, true).removeEventListener("itemClicked", org.apache.royale.utils.Language.closure(this.selectedHandler, this, 'selectedHandler'));
  org.apache.royale.utils.Language.as(event.item, org.apache.royale.events.IEventDispatcher, true).removeEventListener("itemRollOver", org.apache.royale.utils.Language.closure(this.rolloverHandler, this, 'rolloverHandler'));
  org.apache.royale.utils.Language.as(event.item, org.apache.royale.events.IEventDispatcher, true).removeEventListener("itemRollOut", org.apache.royale.utils.Language.closure(this.rolloutHandler, this, 'rolloutHandler'));
};


/**
 * @protected
 * @param {org.apache.royale.events.ItemClickedEvent} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.selectedHandler = function(event) {
  this.listModel.selectedIndex = event.index;
  this.listModel.selectedItem = event.data;
  this.listView.host.dispatchEvent(new org.apache.royale.events.Event("change"));
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.rolloverHandler = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ renderer = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (renderer) {
    org.apache.royale.utils.Language.as(this.listModel, org.apache.royale.core.IRollOverModel, true).rollOverIndex = renderer.index;
  }
};


/**
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.rolloutHandler = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ renderer = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (renderer) {
    renderer.hovered = false;
    renderer.down = false;
    org.apache.royale.utils.Language.as(this.listModel, org.apache.royale.core.IRollOverModel, true).rollOverIndex = -1;
  }
};


org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.set__strand = function(value) {
  this._strand = value;
  this.listModel = org.apache.royale.utils.Language.as(value.getBeadByType(org.apache.royale.core.ISelectionModel), org.apache.royale.core.ISelectionModel);
  this.listView = org.apache.royale.utils.Language.as(value.getBeadByType(org.apache.royale.html.beads.IListView), org.apache.royale.html.beads.IListView);
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).addEventListener("itemAdded", org.apache.royale.utils.Language.closure(this.handleItemAdded, this, 'handleItemAdded'));
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).addEventListener("itemRemoved", org.apache.royale.utils.Language.closure(this.handleItemRemoved, this, 'handleItemRemoved'));
};


Object.defineProperties(org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype, /** @lends {org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListSingleSelectionMouseController', qName: 'org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadController] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController'}
      };
    },
    methods: function () {
      return {
        'ListSingleSelectionMouseController': { type: '', declaredBy: 'org.apache.royale.html.beads.controllers.ListSingleSelectionMouseController'}
      };
    }
  };
};
