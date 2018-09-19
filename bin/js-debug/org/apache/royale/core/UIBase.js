/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\UIBase.as
 * org.apache.royale.core.UIBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.UIBase');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IBeadController,org.apache.royale.core.IBeadModel,org.apache.royale.core.IBeadView,org.apache.royale.core.IChild,org.apache.royale.core.IMeasurementBead,org.apache.royale.core.IParent,org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.events.ValueChangeEvent,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.utils.CSSUtils,org.apache.royale.utils.StringUtil,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.HTMLElementWrapper');
goog.require('org.apache.royale.events.IEventDispatcher');
goog.require('org.apache.royale.core.ILayoutChild');
goog.require('org.apache.royale.core.IParentIUIBase');
goog.require('org.apache.royale.core.IRoyaleElement');
goog.require('org.apache.royale.core.IStrandWithModel');
goog.require('org.apache.royale.core.IStyleableObject');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.HTMLElementWrapper}
 * @implements {org.apache.royale.core.IStrandWithModel}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @implements {org.apache.royale.core.IParentIUIBase}
 * @implements {org.apache.royale.core.IStyleableObject}
 * @implements {org.apache.royale.core.ILayoutChild}
 * @implements {org.apache.royale.core.IRoyaleElement}
 */
org.apache.royale.core.UIBase = function() {
  org.apache.royale.core.UIBase.base(this, 'constructor');
  
  this.createElement();
};
goog.inherits(org.apache.royale.core.UIBase, org.apache.royale.core.HTMLElementWrapper);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.UIBase', org.apache.royale.core.UIBase);


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._explicitWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._explicitHeight;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._percentWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._percentHeight;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._width;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._height;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.UIBase.prototype.setHeight = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._height !== value) {
    this._height = value;
    this.positioner.style.height = value.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.royale.events.Event("heightChanged"));
  }
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#setWidth
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.UIBase.prototype.setWidth = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._width !== value) {
    this._width = value;
    this.positioner.style.width = value.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.royale.events.Event("widthChanged"));
  }
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#setWidthAndHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} newWidth
 * @param {number} newHeight
 * @param {boolean=} noEvent
 */
org.apache.royale.core.UIBase.prototype.setWidthAndHeight = function(newWidth, newHeight, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._width !== newWidth) {
    this._width = newWidth;
    this.positioner.style.width = newWidth.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.royale.events.Event("widthChanged"));
  }
  if (this._height !== newHeight) {
    this._height = newHeight;
    this.positioner.style.height = newHeight.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.royale.events.Event("heightChanged"));
  }
  this.dispatchEvent(new org.apache.royale.events.Event("sizeChanged"));
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#isWidthSizedToContent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {boolean}
 */
org.apache.royale.core.UIBase.prototype.isWidthSizedToContent = function() {
  if (!isNaN(this._explicitWidth))
    return false;
  if (!isNaN(this._percentWidth))
    return false;
  var /** @type {*} */ left = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "left");
  var /** @type {*} */ right = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "right");
  return (left === undefined || right === undefined);
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#isHeightSizedToContent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @return {boolean}
 */
org.apache.royale.core.UIBase.prototype.isHeightSizedToContent = function() {
  if (!isNaN(this._explicitHeight))
    return false;
  if (!isNaN(this._percentHeight))
    return false;
  var /** @type {*} */ top = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "top");
  var /** @type {*} */ bottom = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "bottom");
  return (top === undefined || bottom === undefined);
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._x;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setX
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {number} value
 */
org.apache.royale.core.UIBase.prototype.setX = function(value) {
  
  if (this.positioner.parentNode != this.positioner.offsetParent)
    value += this.positioner.parentNode.offsetLeft;
  this.positioner.style.left = value.toString() + 'px';
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._y;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setY
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {number} value
 */
org.apache.royale.core.UIBase.prototype.setY = function(value) {
  
  if (this.positioner.parentNode != this.positioner.offsetParent)
    value += this.positioner.parentNode.offsetTop;
  this.positioner.style.top = value.toString() + 'px';
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.displayStyleForLayout;


/**
 *  The display style is used for both visible
 *  and layout so is managed as a special case.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {string} value
 */
org.apache.royale.core.UIBase.prototype.setDisplayStyleForLayout = function(value) {
  if (this.positioner.style.display !== 'none')
    this.positioner.style.display = value;
  else
    this.displayStyleForLayout = value;
};


/**
 * @asreturn The array of children.
 * @royaleignorecoercion Array
 * @export
 * @return {Array}
 */
org.apache.royale.core.UIBase.prototype.internalChildren = function() {
  return this.element.childNodes;
};


/**
 * @private
 * @type {org.apache.royale.core.IBeadView}
 */
org.apache.royale.core.UIBase.prototype._view;


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype._id;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.UIBase.prototype._style;


/**
 * @export
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.typeNames;


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype._className;


/**
 * @protected
 * @return {string}
 */
org.apache.royale.core.UIBase.prototype.computeFinalClassNames = function() {
  return (this._className ? this._className + " " : "") + (this.typeNames ? this.typeNames : "");
};


/**
 * @protected
 * @param {string} value
 */
org.apache.royale.core.UIBase.prototype.setClassName = function(value) {
  this.element.className = value;
};


/**
 * @export
 * @type {Array}
 */
org.apache.royale.core.UIBase.prototype.beads;


/**
 *  @copy org.apache.royale.core.IStrand#addBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @override
 */
org.apache.royale.core.UIBase.prototype.addBead = function(bead) {
  var /** @type {boolean} */ isView;
  if (!this._beads)
    this._beads = org.apache.royale.utils.Language.Vector();
  this._beads.push(bead);
  if (org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBeadModel))
    this._model = org.apache.royale.utils.Language.as(bead, org.apache.royale.core.IBeadModel); else if (org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBeadView)) {
    this._view = org.apache.royale.utils.Language.as(bead, org.apache.royale.core.IBeadView);
    isView = true;
  }
  bead.strand = this;
  if (isView) {
    org.apache.royale.utils.Language.as(this, org.apache.royale.events.IEventDispatcher, true).dispatchEvent(new org.apache.royale.events.Event("viewChanged"));
  }
};


/**
 *  @copy org.apache.royale.core.IParent#addElement()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.UIBase.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.appendChild(c.positioner);
  c.addedToParent();
};


/**
 *  @copy org.apache.royale.core.IParent#addElementAt()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.UIBase.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  var /** @type {Array} */ children = this.internalChildren();
  if (index >= children.length)
    this.addElement(c); else {
    this.element.insertBefore(c.positioner, children[index]);
    c.addedToParent();
  }
};


/**
 *  @copy org.apache.royale.core.IParent#getElementAt()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.UIBase.prototype.getElementAt = function(index) {
  
  var /** @type {Array} */ children = this.internalChildren();
  if (children.length == 0) {
    return null;
  }
  return children[index].royale_wrapper;
};


/**
 *  @copy org.apache.royale.core.IParent#getElementIndex()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.UIBase.prototype.getElementIndex = function(c) {
  
  var /** @type {Array} */ children = this.internalChildren();
  var /** @type {number} */ n = children.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (children[i] === c.element)
      return i;
  }
  return -1;
};


/**
 *  @copy org.apache.royale.core.IParent#removeElement()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.UIBase.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.removeChild(c.element);
};


/**
 *  The method called when added to a parent.  This is a good
 *  time to set up beads.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion Class
 *  @royaleignorecoercion Number
 * @export
 */
org.apache.royale.core.UIBase.prototype.addedToParent = function() {
  var /** @type {Object} */ c;
  if (this.typeNames) {
    this.setClassName(this.computeFinalClassNames());
  }
  if (this.style)
    org.apache.royale.core.ValuesManager["valuesImpl"].applyStyles(this, this.style);
  if (isNaN(this._explicitWidth) && isNaN(this._percentWidth)) {
    var /** @type {*} */ value = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "width");
    if (value !== undefined) {
      if (org.apache.royale.utils.Language.is(value, String)) {
        var /** @type {string} */ s = String(value);
        if (s.indexOf("%") > -1)
          this._percentWidth = Number(s.substring(0, s.length - 1)); else {
          if (s.indexOf("px") !== -1)
            s = s.substring(0, s.length - 2);
          this._width = this._explicitWidth = Number(s);
        }
      }
      else
        this._width = this._explicitWidth = value;
    }
  }
  if (isNaN(this._explicitHeight) && isNaN(this._percentHeight)) {
    value = org.apache.royale.core.ValuesManager["valuesImpl"].getValue(this, "height");
    if (value !== undefined) {
      if (org.apache.royale.utils.Language.is(value, String)) {
        s = String(value);
        if (s.indexOf("%") !== -1)
          this._percentHeight = Number(s.substring(0, s.length - 1)); else {
          if (s.indexOf("px") !== -1)
            s = s.substring(0, s.length - 2);
          this._height = this._explicitHeight = Number(s);
        }
      }
      else
        this._height = this._explicitHeight = value;
    }
  }
  var foreachiter0_target = this.beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  
    this.addBead(bead);}
  
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadModel, "iBeadModel", this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadView, "iBeadView", this);
  org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadController, "iBeadController", this);
  this.dispatchEvent(new org.apache.royale.events.Event("beadsAdded"));
};


/**
 * @private
 * @type {org.apache.royale.core.IMeasurementBead}
 */
org.apache.royale.core.UIBase.prototype._measurementBead;


/**
 * Rebroadcast an event from a sub component from the component.
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.UIBase.prototype.repeaterListener = function(event) {
  this.dispatchEvent(event);
};


/**
 * @asreturn The actual element to be parented.
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @return {Object}
 */
org.apache.royale.core.UIBase.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'div');
  this.positioner.style.display = 'block';
  return this.element;
};


/**
 * @asparam value The event containing new style properties.
 * @protected
 * @param {org.apache.royale.events.ValueChangeEvent} value
 */
org.apache.royale.core.UIBase.prototype.styleChangeHandler = function(value) {
  var /** @type {Object} */ newStyle = {};
  newStyle[value.propertyName] = value.newValue;
  org.apache.royale.core.ValuesManager["valuesImpl"].applyStyles(this, newStyle);
};


org.apache.royale.core.UIBase.prototype.get__royale_wrapper = function() {
  return this;
};


org.apache.royale.core.UIBase.prototype.set__royale_wrapper = function(value) {
};


org.apache.royale.core.UIBase.prototype.get__explicitWidth = function() {
  return this._explicitWidth;
};


org.apache.royale.core.UIBase.prototype.set__explicitWidth = function(value) {
  if (this._explicitWidth == value)
    return;
  if (!isNaN(value))
    this._percentWidth = NaN;
  this._explicitWidth = value;
  this.dispatchEvent(new org.apache.royale.events.Event("explicitWidthChanged"));
};


org.apache.royale.core.UIBase.prototype.get__explicitHeight = function() {
  return this._explicitHeight;
};


org.apache.royale.core.UIBase.prototype.set__explicitHeight = function(value) {
  if (this._explicitHeight == value)
    return;
  if (!isNaN(value))
    this._percentHeight = NaN;
  this._explicitHeight = value;
  this.dispatchEvent(new org.apache.royale.events.Event("explicitHeightChanged"));
};


org.apache.royale.core.UIBase.prototype.get__percentWidth = function() {
  return this._percentWidth;
};


org.apache.royale.core.UIBase.prototype.set__percentWidth = function(value) {
  
  this._percentWidth = value;
  this.positioner.style.width = value.toString() + '%';
  if (!isNaN(value))
    this._explicitWidth = NaN;
  this.dispatchEvent(new org.apache.royale.events.Event("percentWidthChanged"));
};


org.apache.royale.core.UIBase.prototype.get__percentHeight = function() {
  return this._percentHeight;
};


org.apache.royale.core.UIBase.prototype.set__percentHeight = function(value) {
  
  this._percentHeight = value;
  this.positioner.style.height = value.toString() + '%';
  if (!isNaN(value))
    this._explicitHeight = NaN;
  this.dispatchEvent(new org.apache.royale.events.Event("percentHeightChanged"));
};


org.apache.royale.core.UIBase.prototype.get__width = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.element.style.width;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetWidth;
    if (pixels == 0 && this.positioner.scrollWidth != 0) {
      pixels = this.positioner.scrollWidth;
    }
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__width = function(value) {
  if (this.explicitWidth !== value) {
    this.explicitWidth = value;
  }
  this.setWidth(value);
};


org.apache.royale.core.UIBase.prototype.get__height = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.element.style.height;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetHeight;
    if (pixels == 0 && this.positioner.scrollHeight != 0) {
      pixels = this.positioner.scrollHeight;
    }
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__height = function(value) {
  if (this.explicitHeight !== value) {
    this.explicitHeight = value;
  }
  this.setHeight(value);
};


org.apache.royale.core.UIBase.prototype.get__x = function() {
  var /** @type {string} */ strpixels = this.positioner.style.left;
  var /** @type {number} */ pixels = parseFloat(strpixels);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetLeft;
    if (this.positioner.parentNode != this.positioner.offsetParent)
      pixels -= this.positioner.parentNode.offsetLeft;
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__x = function(value) {
  if (this.positioner.parentNode != this.positioner.offsetParent)
    value += this.positioner.parentNode.offsetLeft;
  this.positioner.style.left = value.toString() + 'px';
};


org.apache.royale.core.UIBase.prototype.get__y = function() {
  var /** @type {string} */ strpixels = this.positioner.style.top;
  var /** @type {number} */ pixels = parseFloat(strpixels);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetTop;
    if (this.positioner.parentNode != this.positioner.offsetParent)
      pixels -= this.positioner.parentNode.offsetTop;
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__y = function(value) {
  if (this.positioner.parentNode != this.positioner.offsetParent)
    value += this.positioner.parentNode.offsetTop;
  this.positioner.style.top = value.toString() + 'px';
};


org.apache.royale.core.UIBase.prototype.get__visible = function() {
  return this.positioner.style.display !== 'none';
};


org.apache.royale.core.UIBase.prototype.set__visible = function(value) {
  var /** @type {boolean} */ oldValue = this.positioner.style.display !== 'none';
  if (value !== oldValue) {
    if (!value) {
      this.displayStyleForLayout = this.positioner.style.display;
      this.positioner.style.display = 'none';
      this.dispatchEvent(new org.apache.royale.events.Event('hide'));
    } else {
      if (this.displayStyleForLayout != null)
        this.positioner.style.display = this.displayStyleForLayout;
      this.dispatchEvent(new org.apache.royale.events.Event('show'));
    }
    this.dispatchEvent(new org.apache.royale.events.Event('visibleChanged'));
  }
};


org.apache.royale.core.UIBase.prototype.get__view = function() {
  if (!this._view)
    this._view = org.apache.royale.utils.Language.as(org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadView, "iBeadView", this), org.apache.royale.core.IBeadView);
  return this._view;
};


org.apache.royale.core.UIBase.prototype.set__view = function(value) {
  if (this._view != value) {
    this.addBead(org.apache.royale.utils.Language.as(value, org.apache.royale.core.IBead));
    this.dispatchEvent(new org.apache.royale.events.Event("viewChanged"));
  }
};


org.apache.royale.core.UIBase.prototype.get__id = function() {
  return this._id;
};


org.apache.royale.core.UIBase.prototype.set__id = function(value) {
  if (this._id !== value) {
    this._id = value;
    this.dispatchEvent(new org.apache.royale.events.Event("idChanged"));
  }
  this.element.id = this._id;
};


org.apache.royale.core.UIBase.prototype.get__style = function() {
  return this._style;
};


org.apache.royale.core.UIBase.prototype.set__style = function(value) {
  if (this._style !== value) {
    if (org.apache.royale.utils.Language.is(value, String)) {
      this._style = org.apache.royale.core.ValuesManager["valuesImpl"].parseStyles(value);
    }
    else
      this._style = value;
    if (!isNaN(this._y))
      this._style.top = this._y;
    if (!isNaN(this._x))
      this._style.left = this._x;
    if (this.parent)
      org.apache.royale.core.ValuesManager["valuesImpl"].applyStyles(this, this._style);
    this.dispatchEvent(new org.apache.royale.events.Event("stylesChanged"));
  }
};


org.apache.royale.core.UIBase.prototype.get__className = function() {
  return this._className;
};


org.apache.royale.core.UIBase.prototype.set__className = function(value) {
  if (this._className !== value) {
    this.setClassName(this.typeNames ? org.apache.royale.utils.StringUtil.trim(value + ' ' + this.typeNames) : value);
    this._className = value;
    this.dispatchEvent(new org.apache.royale.events.Event("classNameChanged"));
  }
};


org.apache.royale.core.UIBase.prototype.get__numElements = function() {
  
  var /** @type {Array} */ children = this.internalChildren();
  return children.length;
};


org.apache.royale.core.UIBase.prototype.get__measurementBead = function() {
  if (!this._measurementBead) {
    this._measurementBead = org.apache.royale.utils.Language.as(org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IMeasurementBead, "iMeasurementBead", this), org.apache.royale.core.IMeasurementBead);
  }
  return this._measurementBead;
};


org.apache.royale.core.UIBase.prototype.get__topMostEventDispatcher = function() {
  
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ e = document.body;
  return e.royale_wrapper;
};


org.apache.royale.core.UIBase.prototype.get__positioner = function() {
  return this.element;
};


org.apache.royale.core.UIBase.prototype.set__positioner = function(value) {
  this.element = value;
};


org.apache.royale.core.UIBase.prototype.get__alpha = function() {
  var /** @type {string} */ stralpha = this.positioner.style.opacity;
  var /** @type {number} */ alpha = parseFloat(stralpha);
  return alpha;
};


org.apache.royale.core.UIBase.prototype.set__alpha = function(value) {
  this.positioner.style.opacity = value;
};


org.apache.royale.core.UIBase.prototype.get__parent = function() {
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ p = this.positioner.parentNode;
  var /** @type {org.apache.royale.core.IParent} */ wrapper = p ? p.royale_wrapper : null;
  return wrapper;
};


org.apache.royale.core.UIBase.prototype.get__transformElement = function() {
  return this.element;
};


Object.defineProperties(org.apache.royale.core.UIBase.prototype, /** @lends {org.apache.royale.core.UIBase.prototype} */ {
/**
  * @export
  * @type {Object} */
royale_wrapper: {
get: org.apache.royale.core.UIBase.prototype.get__royale_wrapper,
set: org.apache.royale.core.UIBase.prototype.set__royale_wrapper},
/**
  * @export
  * @type {number} */
explicitWidth: {
get: org.apache.royale.core.UIBase.prototype.get__explicitWidth,
set: org.apache.royale.core.UIBase.prototype.set__explicitWidth},
/**
  * @export
  * @type {number} */
explicitHeight: {
get: org.apache.royale.core.UIBase.prototype.get__explicitHeight,
set: org.apache.royale.core.UIBase.prototype.set__explicitHeight},
/**
  * @export
  * @type {number} */
percentWidth: {
get: org.apache.royale.core.UIBase.prototype.get__percentWidth,
set: org.apache.royale.core.UIBase.prototype.set__percentWidth},
/**
  * @export
  * @type {number} */
percentHeight: {
get: org.apache.royale.core.UIBase.prototype.get__percentHeight,
set: org.apache.royale.core.UIBase.prototype.set__percentHeight},
/**
  * @export
  * @type {number} */
width: {
get: org.apache.royale.core.UIBase.prototype.get__width,
set: org.apache.royale.core.UIBase.prototype.set__width},
/**
  * @export
  * @type {number} */
height: {
get: org.apache.royale.core.UIBase.prototype.get__height,
set: org.apache.royale.core.UIBase.prototype.set__height},
/**
  * @export
  * @type {number} */
x: {
get: org.apache.royale.core.UIBase.prototype.get__x,
set: org.apache.royale.core.UIBase.prototype.set__x},
/**
  * @export
  * @type {number} */
y: {
get: org.apache.royale.core.UIBase.prototype.get__y,
set: org.apache.royale.core.UIBase.prototype.set__y},
/**
  * @export
  * @type {boolean} */
visible: {
get: org.apache.royale.core.UIBase.prototype.get__visible,
set: org.apache.royale.core.UIBase.prototype.set__visible},
/**
  * @export
  * @type {org.apache.royale.core.IBeadView} */
view: {
get: org.apache.royale.core.UIBase.prototype.get__view,
set: org.apache.royale.core.UIBase.prototype.set__view},
/**
  * @export
  * @type {string} */
id: {
get: org.apache.royale.core.UIBase.prototype.get__id,
set: org.apache.royale.core.UIBase.prototype.set__id},
/**
  * @export
  * @type {Object} */
style: {
get: org.apache.royale.core.UIBase.prototype.get__style,
set: org.apache.royale.core.UIBase.prototype.set__style},
/**
  * @export
  * @type {string} */
className: {
get: org.apache.royale.core.UIBase.prototype.get__className,
set: org.apache.royale.core.UIBase.prototype.set__className},
/**
  * @export
  * @type {number} */
numElements: {
get: org.apache.royale.core.UIBase.prototype.get__numElements},
/**
  * @export
  * @type {org.apache.royale.core.IMeasurementBead} */
measurementBead: {
get: org.apache.royale.core.UIBase.prototype.get__measurementBead},
/**
  * @export
  * @type {org.apache.royale.events.IEventDispatcher} */
topMostEventDispatcher: {
get: org.apache.royale.core.UIBase.prototype.get__topMostEventDispatcher},
/**
  * @export
  * @type {org.apache.royale.core.WrappedHTMLElement} */
positioner: {
get: org.apache.royale.core.UIBase.prototype.get__positioner,
set: org.apache.royale.core.UIBase.prototype.set__positioner},
/**
  * @export
  * @type {number} */
alpha: {
get: org.apache.royale.core.UIBase.prototype.get__alpha,
set: org.apache.royale.core.UIBase.prototype.set__alpha},
/**
  * @export
  * @type {org.apache.royale.core.IParent} */
parent: {
get: org.apache.royale.core.UIBase.prototype.get__parent},
/**
  * @export
  * @type {org.apache.royale.core.WrappedHTMLElement} */
transformElement: {
get: org.apache.royale.core.UIBase.prototype.get__transformElement}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.UIBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UIBase', qName: 'org.apache.royale.core.UIBase', kind: 'class' }], interfaces: [org.apache.royale.core.IStrandWithModel, org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IParentIUIBase, org.apache.royale.core.IStyleableObject, org.apache.royale.core.ILayoutChild, org.apache.royale.core.IRoyaleElement] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.UIBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'typeNames': { type: 'String'},
        'beads': { type: 'Array'}
      };
    },
    accessors: function () {
      return {
        'royale_wrapper': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'widthChanged' } ] } ]; }},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'heightChanged' } ] } ]; }},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'visible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'visibleChanged' } ] } ]; }},
        'view': { type: 'org.apache.royale.core.IBeadView', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'style': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'measurementBead': { type: 'org.apache.royale.core.IMeasurementBead', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'topMostEventDispatcher': { type: 'org.apache.royale.events.IEventDispatcher', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'positioner': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'alpha': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'parent': { type: 'org.apache.royale.core.IParent', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'transformElement': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'}
      };
    },
    methods: function () {
      return {
        'UIBase': { type: '', declaredBy: 'org.apache.royale.core.UIBase'},
        'setHeight': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setWidth': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setWidthAndHeight': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'isWidthSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.UIBase'},
        'isHeightSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.UIBase'},
        'setX': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'setY': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'setDisplayStyleForLayout': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'internalChildren': { type: 'Array', declaredBy: 'org.apache.royale.core.UIBase'},
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false } ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase'}
      };
    },
    metadata: function () { return [  ]; }
  };
};
