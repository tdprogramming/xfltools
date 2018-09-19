/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\ClassFactory.as
 * org.apache.royale.core.ClassFactory
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ClassFactory');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IFactory');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 * @implements {org.apache.royale.core.IFactory}
 * @param {Object=} generator
 */
org.apache.royale.core.ClassFactory = function(generator) {
  generator = typeof generator !== 'undefined' ? generator : null;
  this.generator = generator;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ClassFactory', org.apache.royale.core.ClassFactory);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.core.ClassFactory.prototype.generator;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.core.ClassFactory.prototype.properties;


/**
 *  @copy score.IFactory#newInstance()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @export
 * @return {*}
 */
org.apache.royale.core.ClassFactory.prototype.newInstance = function() {
  var /** @type {*} */ obj = new this.generator();
  if (this.properties) {
    for (var /** @type {string} */ prop in this.properties) {
      obj[prop] = this.properties[prop];
    }
  }
  return obj;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ClassFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ClassFactory', qName: 'org.apache.royale.core.ClassFactory', kind: 'class' }], interfaces: [org.apache.royale.core.IFactory] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ClassFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'generator': { type: 'Class'},
        'properties': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'ClassFactory': { type: '', declaredBy: 'org.apache.royale.core.ClassFactory', parameters: function () { return [  { index: 1, type: 'Class', optional: true } ]; }},
        'newInstance': { type: '*', declaredBy: 'org.apache.royale.core.ClassFactory'}
      };
    }
  };
};
