/**
 * Generated by Apache Royale Compiler from com\greensock\easing\Ease.as
 * com.greensock.easing.Ease
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.greensock.easing.Ease');
/* Royale Dependency List: XML*/



/**
 * Constructor
 * 
 * @asparam func Function (if any) that should be proxied. This is completely optional and is in fact rarely used except when you have your own custom ease function that follows the standard ease parameter pattern like time, start, change, duration.
 * @asparam extraParams If any extra parameters beyond the standard 4 (time, start, change, duration) need to be fed to the <code>func</code> function, define them as an array here. For example, the old Elastic.easeOut accepts 2 extra parameters in its standard equation (although the newer GreenSock version uses the more modern <code>config()</code> method for configuring the ease and doesn't require any extraPrams here)
 * @asparam type Integer indicating the type of ease where 1 is easeOut, 2 is easeIn, 3 is easeInOut, and 0 is none of these. 
 * @asparam power Power of the ease where Linear is 0, Quad is 1, Cubic is 2, Quart is 3, Quint (and Strong) is 4, etc.
 * @constructor
 * @param {Function=} func
 * @param {Array=} extraParams
 * @param {number=} type
 * @param {number=} power
 */
com.greensock.easing.Ease = function(func, extraParams, type, power) {
  func = typeof func !== 'undefined' ? func : null;
  extraParams = typeof extraParams !== 'undefined' ? extraParams : null;
  type = typeof type !== 'undefined' ? type : 0;
  power = typeof power !== 'undefined' ? power : 0;
  this._func = func;
  this._params = extraParams ? com.greensock.easing.Ease._baseParams.concat(extraParams) : com.greensock.easing.Ease._baseParams;
  this._type = type;
  this._power = power;
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('com.greensock.easing.Ease', com.greensock.easing.Ease);


/**
 * @protected
 * @type {Array}
 */
com.greensock.easing.Ease._baseParams = [0, 0, 1, 1];


/**
 * @protected
 * @type {Function}
 */
com.greensock.easing.Ease.prototype._func;


/**
 * @protected
 * @type {Array}
 */
com.greensock.easing.Ease.prototype._params;


/**
 * @protected
 * @type {number}
 */
com.greensock.easing.Ease.prototype._p1;


/**
 * @protected
 * @type {number}
 */
com.greensock.easing.Ease.prototype._p2;


/**
 * @protected
 * @type {number}
 */
com.greensock.easing.Ease.prototype._p3;


/**
 * @export
 * @type {number}
 */
com.greensock.easing.Ease.prototype._type = 0;


/**
 * @export
 * @type {number}
 */
com.greensock.easing.Ease.prototype._power = 0;


/**
 * @export
 * @type {boolean}
 */
com.greensock.easing.Ease.prototype._calcEnd;


/**
 * Translates the tween's progress ratio into the corresponding ease ratio. This is the heart of the Ease, where it does all its work.
 * 
 * @asparam p progress ratio (a value between 0 and 1 indicating the progress of the tween/ease)
 * @asreturn translated number
 * @export
 * @param {number} p
 * @return {number}
 */
com.greensock.easing.Ease.prototype.getRatio = function(p) {
  if (this._func != null) {
    this._params[0] = p;
    return this._func.apply(null, this._params);
  } else {
    var /** @type {number} */ r = (this._type == 1) ? 1 - p : (this._type == 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
    if (this._power == 1) {
      r *= r;
    } else if (this._power == 2) {
      r *= r * r;
    } else if (this._power == 3) {
      r *= r * r * r;
    } else if (this._power == 4) {
      r *= r * r * r * r;
    }
    return (this._type == 1) ? 1 - r : (this._type == 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.greensock.easing.Ease.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Ease', qName: 'com.greensock.easing.Ease', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.greensock.easing.Ease.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '_type': { type: 'int'},
        '_power': { type: 'int'},
        '_calcEnd': { type: 'Boolean'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'Ease': { type: '', declaredBy: 'com.greensock.easing.Ease', parameters: function () { return [  { index: 1, type: 'Function', optional: true },{ index: 2, type: 'Array', optional: true },{ index: 3, type: 'Number', optional: true },{ index: 4, type: 'Number', optional: true } ]; }},
        'getRatio': { type: 'Number', declaredBy: 'com.greensock.easing.Ease', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }}
      };
    }
  };
};