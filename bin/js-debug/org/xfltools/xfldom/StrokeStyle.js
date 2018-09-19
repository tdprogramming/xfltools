/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\StrokeStyle.as
 * org.xfltools.xfldom.StrokeStyle
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.StrokeStyle');
/* Royale Dependency List: XML,flash.display.GraphicsSolidFill,flash.display.GraphicsStroke,flash.display.IGraphicsData,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.FillStyle*/

goog.require('org.xfltools.xfldom.IDOMComponent');
goog.require('org.xfltools.xfldom.IGraphicsDrawable');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 * @implements {org.xfltools.xfldom.IGraphicsDrawable}
 */
org.xfltools.xfldom.StrokeStyle = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.StrokeStyle', org.xfltools.xfldom.StrokeStyle);


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.StrokeStyle.prototype._index = 0;


/**
 * @private
 * @type {string}
 */
org.xfltools.xfldom.StrokeStyle.prototype._scaleMode;


/**
 * @private
 * @type {string}
 */
org.xfltools.xfldom.StrokeStyle.prototype._caps;


/**
 * @private
 * @type {org.xfltools.xfldom.FillStyle}
 */
org.xfltools.xfldom.StrokeStyle.prototype._fill;


/**
 * @private
 * @type {string}
 */
org.xfltools.xfldom.StrokeStyle.prototype._joints;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.StrokeStyle.prototype._miterLimit;


/**
 * @private
 * @type {boolean}
 */
org.xfltools.xfldom.StrokeStyle.prototype._pixelHinting;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.StrokeStyle.prototype._thickness;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.StrokeStyle.prototype.fromXML = function(xml) {
  this._index = parseInt(xml.attribute('index'), undefined);
  var /** @type {XML} */ solidStrokeXML = org.xfltools.utils.XMLAssistant.getChildList(xml, ["SolidStroke"])[0];
  if (solidStrokeXML) {
    this._thickness = solidStrokeXML.hasOwnProperty("@weight") ? parseFloat(solidStrokeXML.attribute('weight')) : 1;
    this._caps = org.apache.royale.utils.Language.string(solidStrokeXML.hasOwnProperty("@caps") ? solidStrokeXML.attribute('caps') : "none");
    this._pixelHinting = solidStrokeXML.attribute('pixelHinting') == "true";
    this._scaleMode = org.apache.royale.utils.Language.string(solidStrokeXML.hasOwnProperty("@scaleMode") ? solidStrokeXML.attribute('scaleMode') : "normal");
    this._joints = org.apache.royale.utils.Language.string(solidStrokeXML.hasOwnProperty("@joints") ? solidStrokeXML.attribute('joints') : "round");
    this._miterLimit = solidStrokeXML.hasOwnProperty("@miterLimit") ? parseFloat(solidStrokeXML.attribute('miterLimit')) : 3.0;
  }
  var /** @type {XML} */ fillXML = org.xfltools.utils.XMLAssistant.getChildList(xml, ["SolidStroke", "fill"])[0];
  if (fillXML) {
    this._fill = new org.xfltools.xfldom.FillStyle();
    this._fill.fromXML(fillXML);
  }
};


/**
 * @export
 * @return {Array}
 */
org.xfltools.xfldom.StrokeStyle.prototype.toGraphicsData = function() {
  var /** @type {Array} */ graphicsData = org.apache.royale.utils.Language.Vector();
  var /** @type {flash.display.GraphicsSolidFill} */ fill = this._fill ? this._fill.solidFill : null;
  var /** @type {flash.display.GraphicsStroke} */ stroke = new flash.display.GraphicsStroke(this._thickness, this._pixelHinting, this._scaleMode, this._caps, this._joints, this._miterLimit, fill);
  graphicsData.push(stroke);
  return graphicsData;
};


org.xfltools.xfldom.StrokeStyle.prototype.get__index = function() {
  return this._index;
};


Object.defineProperties(org.xfltools.xfldom.StrokeStyle.prototype, /** @lends {org.xfltools.xfldom.StrokeStyle.prototype} */ {
/**
  * @export
  * @type {number} */
index: {
get: org.xfltools.xfldom.StrokeStyle.prototype.get__index}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.StrokeStyle.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StrokeStyle', qName: 'org.xfltools.xfldom.StrokeStyle', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent, org.xfltools.xfldom.IGraphicsDrawable] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.StrokeStyle.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'index': { type: 'int', access: 'readonly', declaredBy: 'org.xfltools.xfldom.StrokeStyle'}
      };
    },
    methods: function () {
      return {
        'StrokeStyle': { type: '', declaredBy: 'org.xfltools.xfldom.StrokeStyle'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.StrokeStyle', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'toGraphicsData': { type: 'Vector.<flash.display.IGraphicsData>', declaredBy: 'org.xfltools.xfldom.StrokeStyle'}
      };
    }
  };
};
