/**
 * Generated by Apache Royale Compiler from org\xfltools\xfldom\Property.as
 * org.xfltools.xfldom.Property
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.xfltools.xfldom.Property');
/* Royale Dependency List: XML,org.xfltools.xfldom.DOMComponentFactory,org.xfltools.xfldom.DOMXMLNodeName,org.xfltools.xfldom.Keyframe,org.xfltools.xfldom.TweenVO*/
/* Royale Static Dependency List: org.xfltools.xfldom.Property,flash.utils.Dictionary*/

goog.require('flash.utils.Dictionary');
goog.require('org.xfltools.xfldom.IDOMComponent');



/**
 * @constructor
 * @implements {org.xfltools.xfldom.IDOMComponent}
 */
org.xfltools.xfldom.Property = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.xfltools.xfldom.Property', org.xfltools.xfldom.Property);


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_MOTION_X = "Motion_X";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_MOTION_Y = "Motion_Y";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_ROTATION_Z = "Rotation_Z";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_DEPTH = "Depth";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_SKEW_X = "Skew_X";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_SKEW_Y = "Skew_Y";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_SCALE_X = "Scale_X";


/**
 * @export
 * @const
 * @type {string}
 */
org.xfltools.xfldom.Property.ID_SCALE_Y = "Scale_Y";


/**
 * @private
 * @const
 * @type {flash.utils.Dictionary}
 */
org.xfltools.xfldom.Property.XFL_KEY_TO_FLASH_KEY;


/**
 * @private
 * @type {string}
 */
org.xfltools.xfldom.Property.prototype._id;


/**
 * @private
 * @type {boolean}
 */
org.xfltools.xfldom.Property.prototype._enabled;


/**
 * @private
 * @type {boolean}
 */
org.xfltools.xfldom.Property.prototype._ignoreTimeMap;


/**
 * @private
 * @type {boolean}
 */
org.xfltools.xfldom.Property.prototype._readOnly;


/**
 * @private
 * @type {boolean}
 */
org.xfltools.xfldom.Property.prototype._visible;


/**
 * @private
 * @type {Array}
 */
org.xfltools.xfldom.Property.prototype._keyframes;


/**
 * @export
 * @param {XML} xml
 */
org.xfltools.xfldom.Property.prototype.fromXML = function(xml) {
  this._enabled = parseInt(xml.attribute('enabled'), undefined) == 1;
  this._id = org.apache.royale.utils.Language.string(xml.attribute('id'));
  this._ignoreTimeMap = parseInt(xml.attribute('ignoreTimeMap'), undefined) == 1;
  this._readOnly = parseInt(xml.attribute('readonly'), undefined) == 1;
  this._visible = parseInt(xml.attribute('visible'), undefined) == 1;
  this._keyframes = org.xfltools.xfldom.DOMComponentFactory.getDOMComponentArray(xml, [org.xfltools.xfldom.DOMXMLNodeName.KEY_FRAME], org.xfltools.xfldom.Keyframe).slice();
};


/**
 * @export
 * @return {Array}
 */
org.xfltools.xfldom.Property.prototype.getTweenData = function() {
  var /** @type {Array} */ result = [];
  var foreachiter0_target = this._keyframes;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var keyFrame = foreachiter0_target[foreachiter0];
  {
    var /** @type {org.xfltools.xfldom.TweenVO} */ tweenVO = new org.xfltools.xfldom.TweenVO(keyFrame.timeValue);
    tweenVO.addVar(org.xfltools.xfldom.Property.XFL_KEY_TO_FLASH_KEY[this._id], keyFrame.anchor.y);
    result.push(tweenVO);
  }}
  
  return result;
};


/**
 * @private
 * @return {flash.utils.Dictionary}
 */
org.xfltools.xfldom.Property.generateXFLKeyToFlashKey = function() {
  var /** @type {flash.utils.Dictionary} */ result = new flash.utils.Dictionary();
  result[org.xfltools.xfldom.Property.ID_MOTION_X] = "x";
  result[org.xfltools.xfldom.Property.ID_MOTION_Y] = "y";
  result[org.xfltools.xfldom.Property.ID_ROTATION_Z] = "rotation";
  result[org.xfltools.xfldom.Property.ID_SCALE_X] = "scaleX";
  result[org.xfltools.xfldom.Property.ID_SCALE_Y] = "scaleY";
  return result;
};


org.xfltools.xfldom.Property.prototype.get__id = function() {
  return this._id;
};


Object.defineProperties(org.xfltools.xfldom.Property.prototype, /** @lends {org.xfltools.xfldom.Property.prototype} */ {
/**
  * @export
  * @type {string} */
id: {
get: org.xfltools.xfldom.Property.prototype.get__id}}
);

org.xfltools.xfldom.Property.XFL_KEY_TO_FLASH_KEY = org.xfltools.xfldom.Property.generateXFLKeyToFlashKey();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.xfltools.xfldom.Property.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Property', qName: 'org.xfltools.xfldom.Property', kind: 'class' }], interfaces: [org.xfltools.xfldom.IDOMComponent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.xfltools.xfldom.Property.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'id': { type: 'String', access: 'readonly', declaredBy: 'org.xfltools.xfldom.Property'}
      };
    },
    methods: function () {
      return {
        'Property': { type: '', declaredBy: 'org.xfltools.xfldom.Property'},
        'fromXML': { type: 'void', declaredBy: 'org.xfltools.xfldom.Property', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'getTweenData': { type: 'Vector.<org.xfltools.xfldom.TweenVO>', declaredBy: 'org.xfltools.xfldom.Property'}
      };
    }
  };
};
