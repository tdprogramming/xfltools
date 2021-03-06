/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\utils\KeyboardEventConverter.as
 * org.apache.royale.events.utils.KeyboardEventConverter
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.utils.KeyboardEventConverter');
/* Royale Dependency List: org.apache.royale.events.KeyboardEvent,org.apache.royale.events.utils.KeyConverter,org.apache.royale.utils.OSUtils*/




/**
 * @constructor
 */
org.apache.royale.events.utils.KeyboardEventConverter = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.utils.KeyboardEventConverter', org.apache.royale.events.utils.KeyboardEventConverter);


/**
 *  Converts JS keyboard events to Royale ones.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @export
 * @param {Object} nativeEvent
 * @return {org.apache.royale.events.KeyboardEvent}
 */
org.apache.royale.events.utils.KeyboardEventConverter.convert = function(nativeEvent) {
  var /** @type {string} */ type = org.apache.royale.utils.Language.string(nativeEvent["type"]);
  var /** @type {string} */ key = org.apache.royale.utils.Language.string(nativeEvent["key"]);
  if (!key)
    key = org.apache.royale.events.utils.KeyConverter.convertCharCode(nativeEvent['charCode']);
  var /** @type {string} */ code = org.apache.royale.utils.Language.string(nativeEvent["code"]);
  if (code == null)
    code = org.apache.royale.events.utils.KeyConverter.convertKeyCode(nativeEvent['keyCode']);
  var /** @type {org.apache.royale.events.KeyboardEvent} */ newEvent = new org.apache.royale.events.KeyboardEvent(type, key, code, nativeEvent["shiftKey"]);
  newEvent.altKey = nativeEvent["altKey"];
  newEvent.ctrlKey = nativeEvent["ctrlKey"];
  newEvent.metaKey = nativeEvent["metaKey"];
  newEvent.specialKey = org.apache.royale.utils.OSUtils.getOS() == org.apache.royale.utils.OSUtils.MAC_OS ? nativeEvent["metaKey"] : nativeEvent["ctrlKey"];
  return newEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.utils.KeyboardEventConverter.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'KeyboardEventConverter', qName: 'org.apache.royale.events.utils.KeyboardEventConverter', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.utils.KeyboardEventConverter.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|convert': { type: 'org.apache.royale.events.KeyboardEvent', declaredBy: 'org.apache.royale.events.utils.KeyboardEventConverter', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};
