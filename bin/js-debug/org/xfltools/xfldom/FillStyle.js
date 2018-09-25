/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\FillStyle.as
 * org.xfltools.xfldom.FillStyle
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.FillStyle');
/* Royale Dependency List: XML,flash.display.GradientType,flash.display.IGraphicsData,flash.display.IGraphicsFill,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.DOMXMLNodeName,org.xfltools.xfldom.Gradient,org.xfltools.xfldom.SolidColor,org.apache.royale.utils.Language*/

goog.require('org.xfltools.xfldom.IGraphicsDrawable');
goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 * @implements {org.xfltools.xfldom.IGraphicsDrawable}
 */
org.xfltools.xfldom.FillStyle = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.FillStyle', org.xfltools.xfldom.FillStyle);


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.FillStyle.prototype._index = 0;


/**
 * @private
 * @type {Array}
 */
org.xfltools.xfldom.FillStyle.prototype._fillData;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.FillStyle.prototype.fromXML = function(xml) {
  this._index = parseInt(xml.attribute('index'), undefined);
  this._fillData = org.apache.royale.utils.Language.Vector();
  var foreachiter0_target = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.SOLID_COLOR]);
  for (var foreachiter0 in foreachiter0_target) 
  {
  var solidColorXML = foreachiter0_target[foreachiter0];
  {
    var /** @type {org.xfltools.xfldom.SolidColor} */ solidColor = new org.xfltools.xfldom.SolidColor();
    solidColor.fromXML(solidColorXML);
    this._fillData.push(solidColor);
  }}
  
  var foreachiter1_target = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.LINEAR_GRADIENT]);
  for (var foreachiter1 in foreachiter1_target) 
  {
  var linearGradientXML = foreachiter1_target[foreachiter1];
  {
    var /** @type {org.xfltools.xfldom.Gradient} */ linearGradient = new org.xfltools.xfldom.Gradient(flash.display.GradientType.LINEAR);
    linearGradient.fromXML(linearGradientXML);
    this._fillData.push(linearGradient);
  }}
  
  var foreachiter2_target = org.xfltools.utils.XMLAssistant.getChildList(xml, [org.xfltools.xfldom.DOMXMLNodeName.RADIAL_GRADIENT]);
  for (var foreachiter2 in foreachiter2_target) 
  {
  var radialGradientXML = foreachiter2_target[foreachiter2];
  {
    var /** @type {org.xfltools.xfldom.Gradient} */ radialGradient = new org.xfltools.xfldom.Gradient(flash.display.GradientType.RADIAL);
    radialGradient.fromXML(radialGradientXML);
    this._fillData.push(radialGradient);
  }}
  
};


/**
 * @export
 * @return {Array}
 */
org.xfltools.xfldom.FillStyle.prototype.toGraphicsData = function() {
  var /** @type {Array} */ graphicsData = org.apache.royale.utils.Language.Vector();
  var foreachiter3_target = this._fillData;
  for (var foreachiter3 in foreachiter3_target) 
  {
  var fillData = foreachiter3_target[foreachiter3];
  {
    graphicsData = graphicsData.concat(fillData.toGraphicsData());
  }}
  
  return graphicsData;
};


org.xfltools.xfldom.FillStyle.prototype.get__fill = function() {
  return org.apache.royale.utils.Language.as(this._fillData[0].toGraphicsData()[0], flash.display.IGraphicsFill);
};


org.xfltools.xfldom.FillStyle.prototype.get__index = function() {
  return this._index;
};


Object.defineProperties(org.xfltools.xfldom.FillStyle.prototype, /** @lends {org.xfltools.xfldom.FillStyle.prototype} */ {
/**
  * @export
  * @type {flash.display.IGraphicsFill} */
fill: {
get: org.xfltools.xfldom.FillStyle.prototype.get__fill},
/**
  * @export
  * @type {number} */
index: {
get: org.xfltools.xfldom.FillStyle.prototype.get__index}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.FillStyle.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FillStyle', qName: 'org.xfltools.xfldom.FillStyle', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent, org.xfltools.xfldom.IGraphicsDrawable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.FillStyle.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'fill': { type: 'flash.display.IGraphicsFill', access: 'readonly', declaredBy: 'org.xfltools.xfldom.FillStyle'},
        'index': { type: 'int', access: 'readonly', declaredBy: 'org.xfltools.xfldom.FillStyle'}
      };
    },
    methods: function () {
      return {
        'FillStyle': { type: '', declaredBy: 'org.xfltools.xfldom.FillStyle'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.FillStyle', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'toGraphicsData': { type: 'Vector.<flash.display.IGraphicsData>', declaredBy: 'org.xfltools.xfldom.FillStyle'}
      };
    }
  };
};
