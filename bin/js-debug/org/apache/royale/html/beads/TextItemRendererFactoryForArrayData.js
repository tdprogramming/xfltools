/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\TextItemRendererFactoryForArrayData.as
 * org.apache.royale.html.beads.TextItemRendererFactoryForArrayData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.TextItemRendererFactoryForArrayData');
/* Royale Dependency List: org.apache.royale.core.IItemRendererClassFactory,org.apache.royale.core.IItemRendererParent,org.apache.royale.core.IList,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ItemRendererEvent,org.apache.royale.html.beads.ITextItemRenderer,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.events.EventDispatcher');
goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IDataProviderItemRendererMapper');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDataProviderItemRendererMapper}
 * @param {Object=} target
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.base(this, 'constructor', target);
};
goog.inherits(org.apache.royale.html.beads.TextItemRendererFactoryForArrayData, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.TextItemRendererFactoryForArrayData', org.apache.royale.html.beads.TextItemRendererFactoryForArrayData);


/**
 * @private
 * @type {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.selectionModel;


/**
 * @private
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype._strand;


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.finishSetup = function(event) {
  this.selectionModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.ISelectionModel), org.apache.royale.core.ISelectionModel);
  this.selectionModel.addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
  if (!this.itemRendererFactory) {
    this._itemRendererFactory = org.apache.royale.utils.Language.as(org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IItemRendererClassFactory, "iItemRendererClassFactory", this._strand), org.apache.royale.core.IItemRendererClassFactory);
  }
  this.dataProviderChangeHandler(null);
};


/**
 * @private
 * @type {org.apache.royale.core.IItemRendererClassFactory}
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype._itemRendererFactory;


/**
 *  The IItemRendererParent that should parent the ITextItemRenderers
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.dataProviderChangeHandler = function(event) {
  var /** @type {Array} */ dp = org.apache.royale.utils.Language.as(this.selectionModel.dataProvider, Array);
  if (!dp)
    return;
  var /** @type {org.apache.royale.core.IList} */ list = org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IList);
  var /** @type {org.apache.royale.core.IItemRendererParent} */ dataGroup = list.dataGroup;
  dataGroup.removeAllItemRenderers();
  var /** @type {number} */ n = dp.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.royale.html.beads.ITextItemRenderer} */ tf = org.apache.royale.utils.Language.as(this.itemRendererFactory.createItemRenderer(dataGroup), org.apache.royale.html.beads.ITextItemRenderer);
    tf.index = i;
    dataGroup.addItemRenderer(tf);
    if (this.selectionModel.labelField) {
      tf.labelField = this.selectionModel.labelField;
    }
    tf.data = dp[i];
    var /** @type {org.apache.royale.events.ItemRendererEvent} */ newEvent = new org.apache.royale.events.ItemRendererEvent(org.apache.royale.events.ItemRendererEvent.CREATED);
    newEvent.itemRenderer = tf;
    this.dispatchEvent(newEvent);
  }
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).dispatchEvent(new org.apache.royale.events.Event("itemsCreated"));
};


org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.royale.utils.Language.as(value, org.apache.royale.events.IEventDispatcher, true).addEventListener("initComplete", org.apache.royale.utils.Language.closure(this.finishSetup, this, 'finishSetup'));
};


org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.get__itemRendererFactory = function() {
  if (!this._itemRendererFactory)
    this._itemRendererFactory = org.apache.royale.utils.Language.as(org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IItemRendererClassFactory, "iItemRendererClassFactory", this._strand), org.apache.royale.core.IItemRendererClassFactory);
  return this._itemRendererFactory;
};


org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.set__itemRendererFactory = function(value) {
  this._itemRendererFactory = value;
};


Object.defineProperties(org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype, /** @lends {org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.set__strand},
/**
  * @export
  * @type {org.apache.royale.core.IItemRendererClassFactory} */
itemRendererFactory: {
get: org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.get__itemRendererFactory,
set: org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.set__itemRendererFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TextItemRendererFactoryForArrayData', qName: 'org.apache.royale.html.beads.TextItemRendererFactoryForArrayData', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDataProviderItemRendererMapper] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.TextItemRendererFactoryForArrayData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.TextItemRendererFactoryForArrayData'},
        'itemRendererFactory': { type: 'org.apache.royale.core.IItemRendererClassFactory', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.TextItemRendererFactoryForArrayData'}
      };
    },
    methods: function () {
      return {
        'TextItemRendererFactoryForArrayData': { type: '', declaredBy: 'org.apache.royale.html.beads.TextItemRendererFactoryForArrayData', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};
