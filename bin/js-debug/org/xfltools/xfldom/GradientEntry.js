/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\GradientEntry.as
 * org.xfltools.xfldom.GradientEntry
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.GradientEntry');
/* Royale Dependency List: XML*/

goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 */
org.xfltools.xfldom.GradientEntry = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.GradientEntry', org.xfltools.xfldom.GradientEntry);


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.GradientEntry.prototype._color = 0;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.GradientEntry.prototype._alpha;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.GradientEntry.prototype._ratio;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.GradientEntry.prototype.fromXML = function(xml) {
  this._color = xml.hasOwnProperty("@color") ? parseInt(xml.attribute('color').toString().split("#").join("0x"), undefined) : 0;
  this._alpha = xml.hasOwnProperty("@alpha") ? parseFloat(xml.attribute('alpha')) : 1;
  this._ratio = parseFloat(xml.attribute('ratio'));
};


org.xfltools.xfldom.GradientEntry.prototype.get__color = function() {
  return this._color;
};


org.xfltools.xfldom.GradientEntry.prototype.get__alpha = function() {
  return this._alpha;
};


org.xfltools.xfldom.GradientEntry.prototype.get__ratio = function() {
  return this._ratio;
};


Object.defineProperties(org.xfltools.xfldom.GradientEntry.prototype, /** @lends {org.xfltools.xfldom.GradientEntry.prototype} */ {
/**
  * @export
  * @type {number} */
color: {
get: org.xfltools.xfldom.GradientEntry.prototype.get__color},
/**
  * @export
  * @type {number} */
alpha: {
get: org.xfltools.xfldom.GradientEntry.prototype.get__alpha},
/**
  * @export
  * @type {number} */
ratio: {
get: org.xfltools.xfldom.GradientEntry.prototype.get__ratio}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.GradientEntry.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'GradientEntry', qName: 'org.xfltools.xfldom.GradientEntry', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.GradientEntry.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'color': { type: 'uint', access: 'readonly', declaredBy: 'org.xfltools.xfldom.GradientEntry'},
        'alpha': { type: 'Number', access: 'readonly', declaredBy: 'org.xfltools.xfldom.GradientEntry'},
        'ratio': { type: 'Number', access: 'readonly', declaredBy: 'org.xfltools.xfldom.GradientEntry'}
      };
    },
    methods: function () {
      return {
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.GradientEntry', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }}
      };
    }
  };
};
