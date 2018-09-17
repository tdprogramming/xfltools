/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\Label.as
 * org.apache.royale.html.Label
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.Label');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement,org.apache.royale.html.util.addElementToWrapper*/

goog.require('org.apache.royale.core.UIBase');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.UIBase}
 */
org.apache.royale.html.Label = function() {
  org.apache.royale.html.Label.base(this, 'constructor');
  this.typeNames = "Label";
};
goog.inherits(org.apache.royale.html.Label, org.apache.royale.core.UIBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.Label', org.apache.royale.html.Label);


/**
 * @protected
 * @type {Text}
 */
org.apache.royale.html.Label.prototype.textNode;


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.Label.prototype._text = "";


/**
 * @royaleignorecoercion Text
 * @protected
 * @override
 */
org.apache.royale.html.Label.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'span');
  this.textNode = document.createTextNode(this._text);
  this.element.appendChild(this.textNode);
  this.element.style.whiteSpace = "nowrap";
  return this.element;
};


org.apache.royale.html.Label.prototype.get__text = function() {
  
  return this._text;
};


org.apache.royale.html.Label.prototype.set__text = function(value) {
  
  if (this.textNode) {
    this._text = value;
    this.textNode.nodeValue = value;
    this.dispatchEvent('textChange');
  }
};


org.apache.royale.html.Label.prototype.get__html = function() {
  
  return this.element.innerHTML;
};


org.apache.royale.html.Label.prototype.set__html = function(value) {
  
  this.element.innerHTML = value;
  this.dispatchEvent('textChange');
};


Object.defineProperties(org.apache.royale.html.Label.prototype, /** @lends {org.apache.royale.html.Label.prototype} */ {
/**
  * @export
  * @type {string} */
text: {
get: org.apache.royale.html.Label.prototype.get__text,
set: org.apache.royale.html.Label.prototype.set__text},
/**
  * @export
  * @type {string} */
html: {
get: org.apache.royale.html.Label.prototype.get__html,
set: org.apache.royale.html.Label.prototype.set__html}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.Label.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Label', qName: 'org.apache.royale.html.Label', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.Label.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.Label', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'textChange' } ] } ]; }},
        'html': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.Label', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'htmlChange' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'Label': { type: '', declaredBy: 'org.apache.royale.html.Label'}
      };
    },
    metadata: function () { return [  ]; }
  };
};
