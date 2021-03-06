/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\DOMComponentFactory.as
 * org.xfltools.xfldom.DOMComponentFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.DOMComponentFactory');
/* Royale Dependency List: XML,flash.events.Event,org.xfltools.utils.XMLAssistant,org.xfltools.xfldom.DOMLibrary,org.xfltools.xfldom.IDOMComponent*/
/* Royale Static Dependency List: org.xfltools.xfldom.DOMComponentFactory,flash.utils.Dictionary,org.xfltools.xfldom.DOMXMLNodeName,org.xfltools.xfldom.DOMDocument,org.xfltools.xfldom.DOMFrame,org.xfltools.xfldom.DOMLayer,org.xfltools.xfldom.DOMShape,org.xfltools.xfldom.DOMSymbolInstance,org.xfltools.xfldom.DOMTimeline,org.xfltools.xfldom.MotionObject*/

goog.require('flash.utils.Dictionary');
goog.require('org.xfltools.xfldom.DOMDocument');
goog.require('org.xfltools.xfldom.DOMFrame');
goog.require('org.xfltools.xfldom.DOMLayer');
goog.require('org.xfltools.xfldom.DOMShape');
goog.require('org.xfltools.xfldom.DOMSymbolInstance');
goog.require('org.xfltools.xfldom.DOMTimeline');
goog.require('org.xfltools.xfldom.DOMXMLNodeName');
goog.require('org.xfltools.xfldom.MotionObject');



/**
 * @constructor
 */
org.xfltools.xfldom.DOMComponentFactory = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.DOMComponentFactory', org.xfltools.xfldom.DOMComponentFactory);


/**
 * @private
 * @const
 * @type {flash.utils.Dictionary}
 */
org.xfltools.xfldom.DOMComponentFactory.XML_NODE_NAME_TO_CLASS;


/**
 * @private
 * @type {org.xfltools.xfldom.DOMLibrary}
 */
org.xfltools.xfldom.DOMComponentFactory._domLibrary;


/**
 * @export
 * @param {XML} xml
 * @param {Array} nodeNames
 * @param {Object=} clazz
 * @return {Array}
 */
org.xfltools.xfldom.DOMComponentFactory.getDOMComponentArray = function(xml, nodeNames, clazz) {
  clazz = typeof clazz !== 'undefined' ? clazz : null;
  var /** @type {Array} */ result = [];
  if (!clazz) {
    clazz = org.xfltools.xfldom.DOMComponentFactory.XML_NODE_NAME_TO_CLASS[nodeNames[nodeNames.length - 1]];
  }
  var foreachiter0_target = org.xfltools.utils.XMLAssistant.getChildList(xml, nodeNames);
  for (var foreachiter0 in foreachiter0_target) 
  {
  var childXML = foreachiter0_target[foreachiter0];
  {
    var /** @type {org.xfltools.xfldom.IDOMComponent} */ domComponent = new clazz();
    domComponent.fromXML(childXML);
    result.push(domComponent);
  }}
  
  return result;
};


/**
 * @export
 * @param {string} rootFolderURL
 * @param {XML} documentXML
 * @param {Function} loadedCallback
 */
org.xfltools.xfldom.DOMComponentFactory.populateSymbols = function(rootFolderURL, documentXML, loadedCallback) {
  var /** @type {Array} */ symbolList = org.xfltools.utils.XMLAssistant.getChildList(documentXML, [org.xfltools.xfldom.DOMXMLNodeName.SYMBOLS, org.xfltools.xfldom.DOMXMLNodeName.INCLUDE]);
  var /** @type {Array} */ symbolURLs = [];
  var foreachiter1_target = symbolList;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var symbolXML = foreachiter1_target[foreachiter1];
  {
    symbolURLs.push(rootFolderURL + "/LIBRARY/" + symbolXML.attribute('href'));
  }}
  
  org.xfltools.xfldom.DOMComponentFactory._domLibrary = new org.xfltools.xfldom.DOMLibrary();
  org.xfltools.xfldom.DOMComponentFactory._domLibrary.addEventListener(flash.events.Event.COMPLETE, loadedCallback);
  org.xfltools.xfldom.DOMComponentFactory._domLibrary.load(symbolURLs);
};


/**
 * @export
 * @param {string} symbolName
 * @return {org.xfltools.xfldom.DOMSymbolInstance}
 */
org.xfltools.xfldom.DOMComponentFactory.instantiateSymbol = function(symbolName) {
  return org.xfltools.xfldom.DOMComponentFactory._domLibrary.instantiateSymbol(symbolName);
};


/**
 * @private
 * @return {flash.utils.Dictionary}
 */
org.xfltools.xfldom.DOMComponentFactory.generateXMLNodeNameToClass = function() {
  var /** @type {flash.utils.Dictionary} */ result = new flash.utils.Dictionary();
  result[org.xfltools.xfldom.DOMXMLNodeName.DOM_DOCUMENT] = org.xfltools.xfldom.DOMDocument;
  result[org.xfltools.xfldom.DOMXMLNodeName.DOM_FRAME] = org.xfltools.xfldom.DOMFrame;
  result[org.xfltools.xfldom.DOMXMLNodeName.DOM_LAYER] = org.xfltools.xfldom.DOMLayer;
  result[org.xfltools.xfldom.DOMXMLNodeName.DOM_SHAPE] = org.xfltools.xfldom.DOMShape;
  result[org.xfltools.xfldom.DOMXMLNodeName.DOM_SYMBOL_INSTANCE] = org.xfltools.xfldom.DOMSymbolInstance;
  result[org.xfltools.xfldom.DOMXMLNodeName.DOM_TIMELINE] = org.xfltools.xfldom.DOMTimeline;
  result[org.xfltools.xfldom.DOMXMLNodeName.MOTION_OBJECT_XML] = org.xfltools.xfldom.MotionObject;
  return result;
};

org.xfltools.xfldom.DOMComponentFactory.XML_NODE_NAME_TO_CLASS = org.xfltools.xfldom.DOMComponentFactory.generateXMLNodeNameToClass();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.DOMComponentFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DOMComponentFactory', qName: 'org.xfltools.xfldom.DOMComponentFactory', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.DOMComponentFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|getDOMComponentArray': { type: 'Array', declaredBy: 'org.xfltools.xfldom.DOMComponentFactory', parameters: function () { return [  { index: 1, type: 'XML', optional: false },{ index: 2, type: 'Array', optional: false },{ index: 3, type: 'Class', optional: true } ]; }},
        '|populateSymbols': { type: 'void', declaredBy: 'org.xfltools.xfldom.DOMComponentFactory', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'XML', optional: false },{ index: 3, type: 'Function', optional: false } ]; }},
        '|instantiateSymbol': { type: 'org.xfltools.xfldom.DOMSymbolInstance', declaredBy: 'org.xfltools.xfldom.DOMComponentFactory', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
