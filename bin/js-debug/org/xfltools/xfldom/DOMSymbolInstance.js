/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\DOMSymbolInstance.as
 * org.xfltools.xfldom.DOMSymbolInstance
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.DOMSymbolInstance');
/* Royale Dependency List: XML,flash.display.DisplayObject,flash.geom.Matrix,flash.geom.Point,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.DOMComponentFactory,org.xfltools.xfldom.DOMTimeline,org.xfltools.xfldom.DOMXMLNodeName*/

goog.require('org.xfltools.xfldom.IDOMComponent');
goog.require('org.xfltools.xfldom.IDOMFrameElement');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 * @implements {org.xfltools.xfldom.IDOMFrameElement}
 */
org.xfltools.xfldom.DOMSymbolInstance = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.DOMSymbolInstance', org.xfltools.xfldom.DOMSymbolInstance);


/**
 * @private
 * @type {org.xfltools.xfldom.DOMTimeline}
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype._timeline;


/**
 * @private
 * @type {flash.geom.Matrix}
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype._matrix;


/**
 * @private
 * @type {flash.geom.Point}
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype._transformationPoint;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype.fromXML = function(xml) {
  var /** @type {XML} */ matrixXML = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.MATRICES, org.xfltools.xfldom.DOMXMLNodeName.MATRIX])[0];
  this._matrix = new flash.geom.Matrix();
  this._matrix.tx = parseFloat(matrixXML.attribute('tx'));
  this._matrix.ty = parseFloat(matrixXML.attribute('ty'));
  var /** @type {XML} */ pointXML = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.TRANSFORMATION_POINT, org.xfltools.xfldom.DOMXMLNodeName.POINT])[0];
  this._transformationPoint = new flash.geom.Point(parseFloat(pointXML.attribute('x')), parseFloat(pointXML.attribute('y')));
};


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype.fromSymbolXML = function(xml) {
  this._timeline = org.xfltools.xfldom.DOMComponentFactory.getDOMComponentArray(xml, [org.xfltools.xfldom.DOMXMLNodeName.TIMELINE, org.xfltools.xfldom.DOMXMLNodeName.DOM_TIMELINE])[0];
};


/**
 * @export
 * @return {flash.display.DisplayObject}
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype.toDisplayObject = function() {
  return this._timeline.toDisplayObject();
};


org.xfltools.xfldom.DOMSymbolInstance.prototype.get__matrix = function() {
  return this._matrix;
};


Object.defineProperties(org.xfltools.xfldom.DOMSymbolInstance.prototype, /** @lends {org.xfltools.xfldom.DOMSymbolInstance.prototype} */ {
/**
  * @export
  * @type {flash.geom.Matrix} */
matrix: {
get: org.xfltools.xfldom.DOMSymbolInstance.prototype.get__matrix}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DOMSymbolInstance', qName: 'org.xfltools.xfldom.DOMSymbolInstance', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent, org.xfltools.xfldom.IDOMFrameElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.DOMSymbolInstance.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'matrix': { type: 'flash.geom.Matrix', access: 'readonly', declaredBy: 'org.xfltools.xfldom.DOMSymbolInstance'}
      };
    },
    methods: function () {
      return {
        'DOMSymbolInstance': { type: '', declaredBy: 'org.xfltools.xfldom.DOMSymbolInstance'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.DOMSymbolInstance', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'fromSymbolXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.DOMSymbolInstance', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'toDisplayObject': { type: 'flash.display.DisplayObject', declaredBy: 'org.xfltools.xfldom.DOMSymbolInstance'}
      };
    }
  };
};
