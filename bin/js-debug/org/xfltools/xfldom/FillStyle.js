/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\FillStyle.as
 * org.xfltools.xfldom.FillStyle
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.FillStyle');
/* Royale Dependency List: XML,flash.display.GraphicsSolidFill,flash.display.IGraphicsData,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.SolidColor,org.apache.royale.utils.Language*/

goog.require('org.xfltools.xfldom.IDOMComponent');
goog.require('org.xfltools.xfldom.IGraphicsDrawable');



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
org.xfltools.xfldom.FillStyle.prototype._solidColors;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.FillStyle.prototype.fromXML = function(xml) {
  this._index = parseInt(xml.attribute('index'), undefined);
  this._solidColors = org.apache.royale.utils.Language.Vector();
  var foreachiter0_target = org.xfltools.utils.XMLAssistant.getChildList(xml, ["SolidColor"]);
  for (var foreachiter0 in foreachiter0_target) 
  {
  var solidColorXML = foreachiter0_target[foreachiter0];
  {
    var /** @type {org.xfltools.xfldom.SolidColor} */ solidColor = new org.xfltools.xfldom.SolidColor();
    solidColor.fromXML(solidColorXML);
    this._solidColors.push(solidColor);
  }}
  
};


/**
 * @export
 * @return {Array}
 */
org.xfltools.xfldom.FillStyle.prototype.toGraphicsData = function() {
  var /** @type {Array} */ graphicsData = org.apache.royale.utils.Language.Vector();
  var foreachiter1_target = this._solidColors;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var solidColor = foreachiter1_target[foreachiter1];
  {
    org.apache.royale.utils.Language.trace("Solid fill color: " + solidColor.color + " and alpha: " + solidColor.alpha);
    var /** @type {flash.display.GraphicsSolidFill} */ solidFill = new flash.display.GraphicsSolidFill(solidColor.color, solidColor.alpha);
    graphicsData.push(solidFill);
  }}
  
  return graphicsData;
};


org.xfltools.xfldom.FillStyle.prototype.get__solidFill = function() {
  if (this._solidColors.length) {
    return new flash.display.GraphicsSolidFill(this._solidColors[0].color, this._solidColors[0].alpha);
  }
  return null;
};


org.xfltools.xfldom.FillStyle.prototype.get__index = function() {
  return this._index;
};


Object.defineProperties(org.xfltools.xfldom.FillStyle.prototype, /** @lends {org.xfltools.xfldom.FillStyle.prototype} */ {
/**
  * @export
  * @type {flash.display.GraphicsSolidFill} */
solidFill: {
get: org.xfltools.xfldom.FillStyle.prototype.get__solidFill},
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
        'solidFill': { type: 'flash.display.GraphicsSolidFill', access: 'readonly', declaredBy: 'org.xfltools.xfldom.FillStyle'},
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