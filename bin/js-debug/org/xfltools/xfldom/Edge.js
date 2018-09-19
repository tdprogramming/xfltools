/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\Edge.as
 * org.xfltools.xfldom.Edge
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.Edge');
/* Royale Dependency List: XML,org.xfltools.xfldom.EdgeDescriptor*/

goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 * @param {number} strokeStyle
 * @param {number} fillStyle
 */
org.xfltools.xfldom.Edge = function(strokeStyle, fillStyle) {
  this._strokeStyle = strokeStyle;
  this._fillStyle = fillStyle;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.Edge', org.xfltools.xfldom.Edge);


/**
 * @private
 * @type {Array}
 */
org.xfltools.xfldom.Edge.prototype._edgeDescriptors;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.Edge.prototype._fillStyle = 0;


/**
 * @private
 * @type {number}
 */
org.xfltools.xfldom.Edge.prototype._strokeStyle = 0;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.Edge.prototype.fromXML = function(xml) {
  this._edgeDescriptors = org.apache.royale.utils.Language.Vector();
  if (xml.hasOwnProperty("@edges")) {
    var /** @type {Array} */ edgeDescriptors = xml.attribute('edges').toString().split("!");
    edgeDescriptors.shift();
    var foreachiter0_target = edgeDescriptors;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var descriptor = foreachiter0_target[foreachiter0];
    {
      if (descriptor != "") {
        this._edgeDescriptors.push(new org.xfltools.xfldom.EdgeDescriptor(descriptor, this._strokeStyle, this._fillStyle));
      }
    }}
    
  }
};


/**
 * @export
 */
org.xfltools.xfldom.Edge.prototype.reverse = function() {
  this._edgeDescriptors.reverse();
  var foreachiter1_target = this._edgeDescriptors;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var edge = foreachiter1_target[foreachiter1];
  {
    edge.reverse();
  }}
  
};


org.xfltools.xfldom.Edge.prototype.get__edgeDescriptors = function() {
  return this._edgeDescriptors;
};


Object.defineProperties(org.xfltools.xfldom.Edge.prototype, /** @lends {org.xfltools.xfldom.Edge.prototype} */ {
/**
  * @export
  * @type {Vector.<EdgeDescriptor>} */
edgeDescriptors: {
get: org.xfltools.xfldom.Edge.prototype.get__edgeDescriptors}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.Edge.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Edge', qName: 'org.xfltools.xfldom.Edge', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.Edge.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'edgeDescriptors': { type: 'Vector.<org.xfltools.xfldom.EdgeDescriptor>', access: 'readonly', declaredBy: 'org.xfltools.xfldom.Edge'}
      };
    },
    methods: function () {
      return {
        'Edge': { type: '', declaredBy: 'org.xfltools.xfldom.Edge', parameters: function () { return [  { index: 1, type: 'int', optional: false },{ index: 2, type: 'int', optional: false } ]; }},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.Edge', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'reverse': { type: 'void', declaredBy: 'org.xfltools.xfldom.Edge'}
      };
    }
  };
};
