/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\DOMFrame.as
 * org.xfltools.xfldom.DOMFrame
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.DOMFrame');
/* Royale Dependency List: XML,flash.display.DisplayObject,flash.display.MovieClip,flash.geom.Point,org.xfltools.utils.ObjectAssistant,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.DOMComponentFactory,org.xfltools.xfldom.DOMSymbolInstance,org.xfltools.xfldom.DOMXMLNodeName,org.xfltools.xfldom.MotionObject,org.xfltools.xfldom.TweenVO,org.apache.royale.utils.Language*/

goog.require('org.xfltools.xfldom.IDOMFrameElement');
goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 * @implements {org.xfltools.xfldom.IDOMFrameElement}
 */
org.xfltools.xfldom.DOMFrame = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.DOMFrame', org.xfltools.xfldom.DOMFrame);


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.DOMFrame.prototype._index = 0;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.DOMFrame.prototype._keyMode = 0;


/**
 * @private
 * @type {Array}
 */
org.xfltools.xfldom.DOMFrame.prototype._elements;


/**
 * @private
 * @type {org.xfltools.xfldom.MotionObject}
 */
org.xfltools.xfldom.DOMFrame.prototype._motionObject;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.DOMFrame.prototype.fromXML = function(xml) {
  this._index = parseInt(xml.attribute('index'), undefined);
  this._keyMode = parseInt(xml.attribute('keyMode'), undefined);
  this._elements = org.xfltools.xfldom.DOMComponentFactory.getDOMComponentArray(xml, [org.xfltools.xfldom.DOMXMLNodeName.ELEMENTS, org.xfltools.xfldom.DOMXMLNodeName.DOM_SHAPE]).slice();
  var /** @type {Array} */ symbolInstanceXML = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.ELEMENTS, org.xfltools.xfldom.DOMXMLNodeName.DOM_SYMBOL_INSTANCE]);
  var foreachiter0_target = symbolInstanceXML;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var symbolXML = foreachiter0_target[foreachiter0];
  {
    var /** @type {org.xfltools.xfldom.DOMSymbolInstance} */ domSymbolInstance = org.xfltools.xfldom.DOMComponentFactory.instantiateSymbol(symbolXML.attribute('libraryItemName'));
    domSymbolInstance.fromXML(symbolXML);
    this._elements.push(domSymbolInstance);
  }}
  
  var /** @type {Array} */ motionObjects = org.xfltools.xfldom.DOMComponentFactory.getDOMComponentArray(xml, [org.xfltools.xfldom.DOMXMLNodeName.MOTION_OBJECT_XML]);
  if (motionObjects.length) {
    this._motionObject = motionObjects[0];
  }
};


/**
 * @export
 * @return {flash.display.DisplayObject}
 */
org.xfltools.xfldom.DOMFrame.prototype.toDisplayObject = function() {
  var /** @type {flash.display.MovieClip} */ movieClip = new flash.display.MovieClip();
  var /** @type {Array} */ tweenVOs = this._motionObject ? this._motionObject.exportTweenData() : [];
  var foreachiter1_target = this._elements;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var element = foreachiter1_target[foreachiter1];
  {
    var /** @type {flash.geom.Point} */ startingPosition = new flash.geom.Point();
    if (org.apache.royale.utils.Language.is(element, org.xfltools.xfldom.DOMSymbolInstance)) {
      startingPosition.x = org.apache.royale.utils.Language.as(element, org.xfltools.xfldom.DOMSymbolInstance, true).matrix.tx;
      startingPosition.y = org.apache.royale.utils.Language.as(element, org.xfltools.xfldom.DOMSymbolInstance, true).matrix.ty;
    }
    var /** @type {flash.display.DisplayObject} */ displayObject = element.toDisplayObject();
    displayObject.x = startingPosition.x;
    displayObject.y = startingPosition.y;
    movieClip.addChild(displayObject);
    for (var /** @type {number} */ i = 0; i < tweenVOs.length; i++) {
      var /** @type {Object} */ vars = org.xfltools.utils.ObjectAssistant.shallowClone(tweenVOs[i].vars);
      if (vars.hasOwnProperty("x")) {
        vars.x += startingPosition.x;
      }
      if (vars.hasOwnProperty("y")) {
        vars.y += startingPosition.y;
      }
      if (vars.hasOwnProperty("scaleX")) {
        vars.scaleX /= 100;
      }
      if (vars.hasOwnProperty("scaleY")) {
        vars.scaleY /= 100;
      }
      var /** @type {number} */ duration = Number(i > 0 ? tweenVOs[i].time - tweenVOs[i - 1].time : tweenVOs[i].time);
      movieClip.tweenChild(displayObject, vars, duration);
    }
  }}
  
  return movieClip;
};


org.xfltools.xfldom.DOMFrame.prototype.get__elements = function() {
  return this._elements;
};


Object.defineProperties(org.xfltools.xfldom.DOMFrame.prototype, /** @lends {org.xfltools.xfldom.DOMFrame.prototype} */ {
/**
  * @export
  * @type {Vector.<IDOMFrameElement>} */
elements: {
get: org.xfltools.xfldom.DOMFrame.prototype.get__elements}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.DOMFrame.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DOMFrame', qName: 'org.xfltools.xfldom.DOMFrame', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent, org.xfltools.xfldom.IDOMFrameElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.DOMFrame.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'elements': { type: 'Vector.<org.xfltools.xfldom.IDOMFrameElement>', access: 'readonly', declaredBy: 'org.xfltools.xfldom.DOMFrame'}
      };
    },
    methods: function () {
      return {
        'DOMFrame': { type: '', declaredBy: 'org.xfltools.xfldom.DOMFrame'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.DOMFrame', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'toDisplayObject': { type: 'flash.display.DisplayObject', declaredBy: 'org.xfltools.xfldom.DOMFrame'}
      };
    }
  };
};
