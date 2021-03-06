/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\controllers\ItemRendererMouseController.as
 * org.apache.royale.html.beads.controllers.ItemRendererMouseController
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.controllers.ItemRendererMouseController');
/* Royale Dependency List: goog.events,goog.events.EventType,org.apache.royale.core.ISelectableItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.BrowserEvent,org.apache.royale.events.ItemClickedEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBeadController');



/**
 *  constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBeadController}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.controllers.ItemRendererMouseController', org.apache.royale.html.beads.controllers.ItemRendererMouseController);


/**
 * @private
 * @type {org.apache.royale.core.ISelectableItemRenderer}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.renderer;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype._strand;


/**
 * @protected
 * @param {org.apache.royale.events.BrowserEvent} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseOver = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    target.dispatchEvent(new goog.events.Event("itemRollOver", true));
  }
};


/**
 * @protected
 * @param {org.apache.royale.events.BrowserEvent} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseOut = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    target.dispatchEvent(new goog.events.Event("itemRollOut", true));
  }
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.BrowserEvent} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseDown = function(event) {
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    target.down = true;
    target.hovered = false;
  }
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.BrowserEvent} event
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.handleMouseUp = function(event) {
  event.stopImmediatePropagation();
  var /** @type {org.apache.royale.core.ISelectableItemRenderer} */ target = org.apache.royale.utils.Language.as(event.currentTarget, org.apache.royale.core.ISelectableItemRenderer);
  if (target) {
    var /** @type {org.apache.royale.events.ItemClickedEvent} */ newEvent = new org.apache.royale.events.ItemClickedEvent("itemClicked");
    newEvent.data = target.data;
    newEvent.multipleSelection = event.shiftKey;
    newEvent.index = target.index;
    target.dispatchEvent(newEvent);
  }
};


org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.set__strand = function(value) {
  this._strand = value;
  this.renderer = org.apache.royale.utils.Language.as(value, org.apache.royale.core.ISelectableItemRenderer);
  
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ element = org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.UIBase).element;
  goog.events.listen(element, goog.events.EventType.MOUSEOVER, org.apache.royale.utils.Language.closure(this.handleMouseOver, this, 'handleMouseOver'));
  goog.events.listen(element, goog.events.EventType.MOUSEOUT, org.apache.royale.utils.Language.closure(this.handleMouseOut, this, 'handleMouseOut'));
  goog.events.listen(element, goog.events.EventType.MOUSEDOWN, org.apache.royale.utils.Language.closure(this.handleMouseDown, this, 'handleMouseDown'));
  goog.events.listen(element, goog.events.EventType.MOUSEUP, org.apache.royale.utils.Language.closure(this.handleMouseUp, this, 'handleMouseUp'));
};


Object.defineProperties(org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype, /** @lends {org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ItemRendererMouseController', qName: 'org.apache.royale.html.beads.controllers.ItemRendererMouseController', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadController] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.controllers.ItemRendererMouseController.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.controllers.ItemRendererMouseController'}
      };
    },
    methods: function () {
      return {
        'ItemRendererMouseController': { type: '', declaredBy: 'org.apache.royale.html.beads.controllers.ItemRendererMouseController'}
      };
    }
  };
};
