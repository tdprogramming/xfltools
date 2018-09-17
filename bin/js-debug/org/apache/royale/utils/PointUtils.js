/**
 * Generated by Apache Royale Compiler from org\apache\royale\utils\PointUtils.as
 * org.apache.royale.utils.PointUtils
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.PointUtils');
/* Royale Dependency List: org.apache.royale.geom.Point,org.apache.royale.utils.Language*/




/**
 * @asprivate
 * @constructor
 */
org.apache.royale.utils.PointUtils = function() {
  throw new Error("PointUtils should not be instantiated.");
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.PointUtils', org.apache.royale.utils.PointUtils);


/**
 *  Converts a point from global coordinates to local coordinates
 *
 *  @asparam point The point being converted.
 *  @asparam local The component used as reference for the conversion.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {org.apache.royale.geom.Point} pt
 * @param {Object} local
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.utils.PointUtils.globalToLocal = function(pt, local) {
  
  var /** @type {number} */ x = pt.x;
  var /** @type {number} */ y = pt.y;
  var /** @type {HTMLElement} */ element = local.element;
  if (org.apache.royale.utils.Language.closure(element.getBoundingClientRect, element, 'getBoundingClientRect')) {
    var /** @type {Object} */ rect = element.getBoundingClientRect();
    x = x - rect.left - window.scrollX;
    y = y - rect.top - window.scrollY;
  } else {
    do {
      x -= element.offsetLeft;
      y -= element.offsetTop;
      if (local['parent'] !== undefined) {
        local = local.parent;
        element = local ? local.element : null;
      } else {
        element = null;
      }
    } while (element);
  }
  return new org.apache.royale.geom.Point(x, y);
};


/**
 *  Converts a point from local coordinates to global coordinates
 *
 *  @asparam point The point being converted.
 *  @asparam local The component used as reference for the conversion.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {org.apache.royale.geom.Point} pt
 * @param {Object} local
 * @return {org.apache.royale.geom.Point}
 */
org.apache.royale.utils.PointUtils.localToGlobal = function(pt, local) {
  
  var /** @type {number} */ x = pt.x;
  var /** @type {number} */ y = pt.y;
  var /** @type {HTMLElement} */ element = local.element;
  if (org.apache.royale.utils.Language.closure(element.getBoundingClientRect, element, 'getBoundingClientRect')) {
    var /** @type {Object} */ rect = element.getBoundingClientRect();
    x = Number(rect.left + x + window.scrollX);
    y = Number(rect.top + y + window.scrollY);
  } else {
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
  }
  return new org.apache.royale.geom.Point(x, y);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.PointUtils.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PointUtils', qName: 'org.apache.royale.utils.PointUtils', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.PointUtils.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'PointUtils': { type: '', declaredBy: 'org.apache.royale.utils.PointUtils'},
        '|globalToLocal': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.utils.PointUtils', parameters: function () { return [  { index: 1, type: 'org.apache.royale.geom.Point', optional: false },{ index: 2, type: 'Object', optional: false } ]; }},
        '|localToGlobal': { type: 'org.apache.royale.geom.Point', declaredBy: 'org.apache.royale.utils.PointUtils', parameters: function () { return [  { index: 1, type: 'org.apache.royale.geom.Point', optional: false },{ index: 2, type: 'Object', optional: false } ]; }}
      };
    }
  };
};
