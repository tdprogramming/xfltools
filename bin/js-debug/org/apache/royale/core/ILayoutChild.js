/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\ILayoutChild.as
 * org.apache.royale.core.ILayoutChild
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ILayoutChild');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IChild');
goog.require('org.apache.royale.core.IUIBase');



/**
 * @interface
 * @extends {org.apache.royale.core.IChild}
 * @extends {org.apache.royale.core.IUIBase}
 */
org.apache.royale.core.ILayoutChild = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ILayoutChild', org.apache.royale.core.ILayoutChild);
/**  * @type {number}
 */org.apache.royale.core.ILayoutChild.prototype.percentWidth;
/**  * @type {number}
 */org.apache.royale.core.ILayoutChild.prototype.percentHeight;
/**  * @type {number}
 */org.apache.royale.core.ILayoutChild.prototype.explicitWidth;
/**  * @type {number}
 */org.apache.royale.core.ILayoutChild.prototype.explicitHeight;
/**
 * Sets the height of the component without
 * setting explicitHeight.
 * 
 *  @asparam value The new height.
 *  @asparam noEvent True if no change event should be sent.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ILayoutChild.prototype.setHeight = function(value, noEvent) {
};
/**
 * Sets the width of the component without
 * setting explicitWidth.
 *  
 *  @asparam value The new width.
 *  @asparam noEvent True if no change event should be sent.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ILayoutChild.prototype.setWidth = function(value, noEvent) {
};
/**
 * Sets the X value of the component without setting the 'left' style
 * 
 *  @asparam value The new x value.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 */
org.apache.royale.core.ILayoutChild.prototype.setX = function(value) {
};
/**
 * Sets the Y value of the component without setting the 'top' style
 * 
 *  @asparam value The new y value.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 */
org.apache.royale.core.ILayoutChild.prototype.setY = function(value) {
};
/**
 * Sets the width and height of the component 
 * without setting explicitWidth or explicitHeight.
 * It also sends one change event.  If both
 * values change it only sends heightCHange event.
 *  
 *  @asparam newWidth The new width.
 *  @asparam newHeight The new height.
 *  @asparam noEvent True if no change event should be sent.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} newWidth
 * @param {number} newHeight
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ILayoutChild.prototype.setWidthAndHeight = function(newWidth, newHeight, noEvent) {
};
/**
 * True if no percentWidth or explicitWidth has been
 * assigned
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @return {boolean}
 */
org.apache.royale.core.ILayoutChild.prototype.isWidthSizedToContent = function() {
};
/**
 * True if no percentHeight or explicitHeight has been
 * assigned
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @return {boolean}
 */
org.apache.royale.core.ILayoutChild.prototype.isHeightSizedToContent = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ILayoutChild.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ILayoutChild', qName: 'org.apache.royale.core.ILayoutChild', kind: 'interface' }], interfaces: [org.apache.royale.core.IChild, org.apache.royale.core.IUIBase] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ILayoutChild.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ILayoutChild'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ILayoutChild'},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ILayoutChild'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ILayoutChild'}
      };
    },
    methods: function () {
      return {
        'setHeight': { type: 'void', declaredBy: 'org.apache.royale.core.ILayoutChild', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setWidth': { type: 'void', declaredBy: 'org.apache.royale.core.ILayoutChild', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setX': { type: 'void', declaredBy: 'org.apache.royale.core.ILayoutChild', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'setY': { type: 'void', declaredBy: 'org.apache.royale.core.ILayoutChild', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'setWidthAndHeight': { type: 'void', declaredBy: 'org.apache.royale.core.ILayoutChild', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'isWidthSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.ILayoutChild'},
        'isHeightSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.ILayoutChild'}
      };
    }
  };
};
