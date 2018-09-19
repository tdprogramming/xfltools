/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IItemRenderer.as
 * org.apache.royale.core.IItemRenderer
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IItemRenderer');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IChild');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {org.apache.royale.core.IChild}
 */
org.apache.royale.core.IItemRenderer = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IItemRenderer', org.apache.royale.core.IItemRenderer);
/**  * @type {Object}
 */org.apache.royale.core.IItemRenderer.prototype.data;
/**  * @type {Object}
 */org.apache.royale.core.IItemRenderer.prototype.listData;
/**  * @type {Object}
 */org.apache.royale.core.IItemRenderer.prototype.itemRendererParent;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IItemRenderer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IItemRenderer', qName: 'org.apache.royale.core.IItemRenderer', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IChild] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IItemRenderer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IItemRenderer'},
        'listData': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IItemRenderer'},
        'itemRendererParent': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.IItemRenderer'}
      };
    },
    methods: function () {return {};}
  };
};
