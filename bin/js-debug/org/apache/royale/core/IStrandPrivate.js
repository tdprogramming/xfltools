/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IStrandPrivate.as
 * org.apache.royale.core.IStrandPrivate
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IStrandPrivate');
/* Royale Dependency List: org.apache.royale.core.IChild*/




/**
 * @interface
 */
org.apache.royale.core.IStrandPrivate = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IStrandPrivate', org.apache.royale.core.IStrandPrivate);
/**
 * @return {number}
 */
org.apache.royale.core.IStrandPrivate.prototype.$numElements = function() {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IStrandPrivate.prototype.$addElement = function(c, dispatchEvent) {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IStrandPrivate.prototype.$addElementAt = function(c, index, dispatchEvent) {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IStrandPrivate.prototype.$removeElement = function(c, dispatchEvent) {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.IStrandPrivate.prototype.$getElementIndex = function(c) {
};
/**
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.IStrandPrivate.prototype.$getElementAt = function(index) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IStrandPrivate.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IStrandPrivate', qName: 'org.apache.royale.core.IStrandPrivate', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IStrandPrivate.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        '$numElements': { type: 'int', declaredBy: 'org.apache.royale.core.IStrandPrivate'},
        '$addElement': { type: 'void', declaredBy: 'org.apache.royale.core.IStrandPrivate', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.IStrandPrivate', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        '$removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.IStrandPrivate', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.IStrandPrivate', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false } ]; }},
        '$getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.IStrandPrivate', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }}
      };
    }
  };
};
