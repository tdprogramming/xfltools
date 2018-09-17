/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\MotionObject.as
 * org.xfltools.xfldom.MotionObject
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.MotionObject');
/* Royale Dependency List: XML,org.xfltools.xfldom.AnimationCore,org.xfltools.xfldom.DOMComponentFactory,org.xfltools.xfldom.DOMXMLNodeName,org.xfltools.xfldom.TweenVO*/

goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 */
org.xfltools.xfldom.MotionObject = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.MotionObject', org.xfltools.xfldom.MotionObject);


/**
 * @private
 * @type {org.xfltools.xfldom.AnimationCore}
 */
org.xfltools.xfldom.MotionObject.prototype._animationCore;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.MotionObject.prototype.fromXML = function(xml) {
  this._animationCore = org.xfltools.xfldom.DOMComponentFactory.getDOMComponentArray(xml, [org.xfltools.xfldom.DOMXMLNodeName.ANIMATION_CORE], org.xfltools.xfldom.AnimationCore)[0];
};


/**
 * @export
 * @return {Array}
 */
org.xfltools.xfldom.MotionObject.prototype.exportTweenData = function() {
  return this._animationCore.exportTweenData();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.MotionObject.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MotionObject', qName: 'org.xfltools.xfldom.MotionObject', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.MotionObject.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'MotionObject': { type: '', declaredBy: 'org.xfltools.xfldom.MotionObject'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.MotionObject', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'exportTweenData': { type: 'Vector.<org.xfltools.xfldom.TweenVO>', declaredBy: 'org.xfltools.xfldom.MotionObject'}
      };
    }
  };
};
