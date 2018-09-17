/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\TimeMap.as
 * org.xfltools.xfldom.TimeMap
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.TimeMap');
/* Royale Dependency List: XML*/

goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 */
org.xfltools.xfldom.TimeMap = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.TimeMap', org.xfltools.xfldom.TimeMap);


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.TimeMap.QUADRATIC = "Quadratic";


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.TimeMap.prototype._strength;


/**
 * @private
 * @type {string}
 */
org.xfltools.xfldom.TimeMap.prototype._type;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.TimeMap.prototype.fromXML = function(xml) {
  this._strength = parseFloat(xml.attribute('strength'));
  this._type = org.apache.royale.utils.Language.string(xml.attribute('type'));
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.TimeMap.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TimeMap', qName: 'org.xfltools.xfldom.TimeMap', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.TimeMap.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'TimeMap': { type: '', declaredBy: 'org.xfltools.xfldom.TimeMap'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.TimeMap', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }}
      };
    }
  };
};
