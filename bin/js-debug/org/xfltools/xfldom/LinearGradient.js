/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\LinearGradient.as
 * org.xfltools.xfldom.LinearGradient
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.LinearGradient');
/* Royale Dependency List: XML,flash.display.GraphicsGradientFill,flash.display.IGraphicsData,flash.geom.Matrix,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.DOMXMLNodeName,org.xfltools.xfldom.GradientEntry*/

goog.require('org.xfltools.xfldom.IDOMComponent');
goog.require('org.xfltools.xfldom.IGraphicsDrawable');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 * @implements {org.xfltools.xfldom.IGraphicsDrawable}
 */
org.xfltools.xfldom.LinearGradient = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.LinearGradient', org.xfltools.xfldom.LinearGradient);


/**
 * @private
 * @type {flash.geom.Matrix}
 */
org.xfltools.xfldom.LinearGradient.prototype._matrix;


/**
 * @private
 * @type {Array}
 */
org.xfltools.xfldom.LinearGradient.prototype._gradientEntries;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.LinearGradient.prototype.fromXML = function(xml) {
  this._matrix = new flash.geom.Matrix();
  var /** @type {XML} */ matrixXML = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.MATRICES, org.xfltools.xfldom.DOMXMLNodeName.MATRIX])[0];
  if (matrixXML.hasOwnProperty("@a")) {
    this._matrix.a = parseFloat(matrixXML.attribute('a'));
  }
  if (matrixXML.hasOwnProperty("@b")) {
    this._matrix.b = parseFloat(matrixXML.attribute('b'));
  }
  if (matrixXML.hasOwnProperty("@c")) {
    this._matrix.c = parseFloat(matrixXML.attribute('c'));
  }
  if (matrixXML.hasOwnProperty("@d")) {
    this._matrix.d = parseFloat(matrixXML.attribute('d'));
  }
  if (matrixXML.hasOwnProperty("@tx")) {
    this._matrix.tx = parseFloat(matrixXML.attribute('tx'));
  }
  if (matrixXML.hasOwnProperty("@ty")) {
    this._matrix.ty = parseFloat(matrixXML.attribute('ty'));
  }
  this._gradientEntries = org.apache.royale.utils.Language.Vector();
  var foreachiter0_target = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.GRADIENT_ENTRY]);
  for (var foreachiter0 in foreachiter0_target) 
  {
  var gradientEntryXML = foreachiter0_target[foreachiter0];
  {
    var /** @type {org.xfltools.xfldom.GradientEntry} */ gradientEntry = new org.xfltools.xfldom.GradientEntry();
    gradientEntry.fromXML(gradientEntryXML);
    this._gradientEntries.push(gradientEntry);
  }}
  
};


/**
 * @export
 * @return {Array}
 */
org.xfltools.xfldom.LinearGradient.prototype.toGraphicsData = function() {
  var /** @type {Array} */ colors = [];
  var /** @type {Array} */ alphas = [];
  var /** @type {Array} */ ratios = [];
  var foreachiter1_target = this._gradientEntries;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var gradientEntry = foreachiter1_target[foreachiter1];
  {
    colors.push(gradientEntry.color);
    alphas.push(gradientEntry.alpha);
    ratios.push(gradientEntry.ratio);
  }}
  
  return [new flash.display.GraphicsGradientFill("linear", colors, alphas, ratios, this._matrix)].slice();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.LinearGradient.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LinearGradient', qName: 'org.xfltools.xfldom.LinearGradient', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent, org.xfltools.xfldom.IGraphicsDrawable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.LinearGradient.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'LinearGradient': { type: '', declaredBy: 'org.xfltools.xfldom.LinearGradient'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.LinearGradient', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'toGraphicsData': { type: 'Vector.<flash.display.IGraphicsData>', declaredBy: 'org.xfltools.xfldom.LinearGradient'}
      };
    }
  };
};