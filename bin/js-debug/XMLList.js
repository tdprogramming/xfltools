/**
 * Generated by Apache Royale Compiler from XMLList.as
 * XMLList
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('XMLList');
/* Royale Dependency List: Namespace,QName,XML,org.apache.royale.debugging.throwError,org.apache.royale.utils.Language*/




/**
 * @constructor
 * @param {Object=} expression
 */
XMLList = function(expression) {
  expression = typeof expression !== 'undefined' ? expression : null;
  
  this._xmlArray = [];
  this.addIndex(0);
  if (expression)
    this.parseExpression(expression);
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('XMLList', XMLList);


/**
 * @private
 * @param {Object} expression
 */
XMLList.prototype.parseExpression = function(expression) {
  if (org.apache.royale.utils.Language.is(expression, XMLList)) {
    this.targetObject = expression.targetObject;
    this.targetProperty = expression.targetProperty;
    var /** @type {number} */ len = Number(expression.length());
    for (var /** @type {number} */ i = 0; i < len; i++) {
      this[i] = expression[i];
    }
  } else if (org.apache.royale.utils.Language.is(expression, XML)) {
    this[0] = expression;
  }
  else
    this[0] = new XML(expression);
};


/**
 * @private
 * @type {Array}
 */
XMLList.prototype._xmlArray;


/**
 * @private
 * @param {number} idx
 */
XMLList.prototype.addIndex = function(idx) {
  var self = this;
  var /** @type {Function} */ __localFn0__ = function() {
    return self._xmlArray[idx];
  }
  var /** @type {Function} */ __localFn1__ = function(newValue) {
    if (idx >= self._xmlArray.length)
      self.append(newValue);
    else
      self.replaceChildAt(idx, newValue);
  }
  var /** @type {string} */ idxStr = "" + idx;
  Object.defineProperty(this, idxStr, {"get":__localFn0__, "set":__localFn1__, enumerable:true, configurable:true});
};


/**
 * @export
 * @param {XML} child
 */
XMLList.prototype.append = function(child) {
  this._xmlArray[this._xmlArray.length] = child;
  this.addIndex(this._xmlArray.length);
  do {
    if (!this._targetObject)
      break;
    if (!this._targetProperty) {
      this._targetObject.appendChild(child);
      break;
    }
    var /** @type {XMLList} */ objToAppend = this._targetObject.child(this._targetProperty);
    if (!objToAppend.length()) {
      this._targetObject.appendChild(child);
      break;
    }
    this._targetObject.insertChildAfter(objToAppend[objToAppend.length() - 1], child);
  } while (false);
};


/**
 * @export
 * @param {*} child
 * @return {XML}
 */
XMLList.prototype.appendChild = function(child) {
  if (this.isSingle())
    return this._xmlArray[0].appendChild(child);
  return null;
};


/**
 * Calls the attribute() method of each XML object and returns an XMLList object of the results.
 * 
 * @asparam attributeName
 * @asreturn 
 * 
 * @export
 * @param {*} attributeName
 * @return {XMLList}
 */
XMLList.prototype.attribute = function(attributeName) {
  if (this.isSingle())
    return this._xmlArray[0].attribute(attributeName);
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].attribute(attributeName);
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * Calls the attributes() method of each XML object and returns an XMLList object of attributes for each XML object.
 * 
 * @asreturn 
 * 
 * @export
 * @return {XMLList}
 */
XMLList.prototype.attributes = function() {
  if (this.isSingle())
    return this._xmlArray[0].attributes();
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].attributes();
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * Calls the child() method of each XML object and returns an XMLList object that contains the results in order.
 * 
 * @asparam propertyName
 * @asreturn 
 * 
 * @export
 * @param {Object} propertyName
 * @return {XMLList}
 */
XMLList.prototype.child = function(propertyName) {
  var /** @type {XMLList} */ retVal = new XMLList();
  retVal.targetProperty = propertyName.toString();
  var /** @type {number} */ propNum = parseInt(propertyName, 10);
  if (propNum.toString() == propertyName) {
    if (propNum >= 0 && propNum < this._xmlArray.length) {
      retVal.append(this._xmlArray[propNum]);
      retVal.targetObject = this._xmlArray[propNum];
    }
    return retVal;
  }
  if (this.isEmpty()) {
    retVal.targetObject = this;
  }
  if (this.isSingle())
    return this._xmlArray[0].child(propertyName);
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].child(propertyName);
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * @export
 * @return {number}
 */
XMLList.prototype.childIndex = function() {
  if (this.isSingle())
    return this._xmlArray[0].childIndex();
  throw new Error("childIndex can only be called on an XMLList with one item.");
};


/**
 * Calls the children() method of each XML object and returns an XMLList object that contains the results.
 * 
 * @asreturn 
 * 
 * @export
 * @return {XMLList}
 */
XMLList.prototype.children = function() {
  if (this.isSingle())
    return this._xmlArray[0].children();
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].children();
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * Calls the comments() method of each XML object and returns an XMLList of comments.
 * @asreturn 
 * 
 * @export
 * @return {XMLList}
 */
XMLList.prototype.comments = function() {
  if (this.isSingle())
    return this._xmlArray[0].comments();
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].comments();
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * @export
 * @param {*} list
 * @return {XMLList}
 */
XMLList.prototype.concat = function(list) {
  if (org.apache.royale.utils.Language.is(list, XML)) {
    var /** @type {XMLList} */ newList = new XMLList();
    newList.append(list);
    list = newList;
  }
  if (!org.apache.royale.utils.Language.is(list, XMLList))
    throw new TypeError("invalid type");
  var /** @type {XML} */ item;
  var /** @type {number} */ len = Number(list.length());
  var /** @type {number} */ i = 0;
  while (i < len)
    this.append(list[i++]);
  return this;
};


/**
 * Checks whether the XMLList object contains an XML object that is equal to the given value parameter.
 * 
 * @asparam value
 * @asreturn 
 * 
 * @export
 * @param {*} value
 * @return {boolean}
 */
XMLList.prototype.contains = function(value) {
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    if (this._xmlArray[i].contains(value))
      return true;
  }
  return false;
};


/**
 * Returns a copy of the given XMLList object.
 * 
 * @asreturn 
 * 
 * @export
 * @return {XMLList}
 */
XMLList.prototype.copy = function() {
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++)
    retVal.append(this._xmlArray[i].copy());
  return retVal;
};


/**
 * Returns all descendants (children, grandchildren, great-grandchildren, and so on) of the XML object that have the given name parameter.
 * 
 * @asparam name
 * @asreturn 
 * 
 * @export
 * @param {Object=} name
 * @return {XMLList}
 */
XMLList.prototype.descendants = function(name) {
  name = typeof name !== 'undefined' ? name : "*";
  if (this.isSingle())
    return this._xmlArray[0].descendants(name);
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].descendants(name);
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * Calls the elements() method of each XML object.
 * 
 * @asparam name
 * @asreturn 
 * 
 * @export
 * @param {Object=} name
 * @return {XMLList}
 */
XMLList.prototype.elements = function(name) {
  name = typeof name !== 'undefined' ? name : "*";
  if (this.isSingle())
    return this._xmlArray[0].elements(name);
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].elements(name);
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * @export
 * @return {Array}
 */
XMLList.prototype.elementNames = function() {
  var /** @type {Array} */ retVal = [];
  var /** @type {number} */ i = 0;
  var /** @type {number} */ len = Number(this._xmlArray.length);
  while (i < len)
    retVal.push(i++);
  return retVal;
};


/**
 * @export
 * @param {*} list
 * @return {boolean}
 */
XMLList.prototype.equals = function(list) {
  if (this.isSingle())
    return this._xmlArray[0].equals(list);
  return false;
};


/**
 * @export
 * @param {Function} callback
 * @return {XMLList}
 */
XMLList.prototype.filter = function(callback) {
  var /** @type {XMLList} */ list = new XMLList();
  for (var /** @type {number} */ i = 0; i < this._xmlArray.length; i++) {
    if (callback(this._xmlArray[i]))
      list.append(this._xmlArray[i]);
  }
  list.targetObject = this._targetObject;
  list.targetProperty = this._targetProperty;
  return list;
};


/**
 * @export
 * @return {boolean}
 */
XMLList.prototype.hasComplexContent = function() {
  if (this.isEmpty())
    return false;
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 1; i < len; i++) {
    if (this._xmlArray[i].hasComplexContent())
      return true;
  }
  return false;
};


/**
 * @export
 * @override
 */
XMLList.prototype.hasOwnProperty = function(propertyName) {
  if (this.isSingle())
    return this._xmlArray[0].hasOwnProperty(propertyName);
  if (parseInt(propertyName, 10).toString() == propertyName) {
    return parseInt(propertyName, 10) < this._xmlArray.length;
  }
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 1; i < len; i++) {
    if (this._xmlArray[i].hasOwnProperty(propertyName))
      return true;
  }
  return false;
};


/**
 * Checks whether the XMLList object contains simple content.
 * 
 * @asreturn 
 * 
 * @export
 * @return {boolean}
 */
XMLList.prototype.hasSimpleContent = function() {
  if (this.isEmpty())
    return true;
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 1; i < len; i++) {
    if (this._xmlArray[i].hasComplexContent())
      return false;
  }
  return true;
};


/**
 * Returns the number of items in the XMLList.
 * 
 * @asreturn 
 * 
 * @export
 * @return {number}
 */
XMLList.prototype.length = function() {
  return this._xmlArray.length;
};


/**
 * @export
 * @return {QName}
 */
XMLList.prototype.name = function() {
  if (this.isSingle())
    return this._xmlArray[0].name();
  return null;
};


/**
 * Merges adjacent text nodes and eliminates empty text nodes for each of the following:
 * all text nodes in the XMLList, all the XML objects contained in the XMLList, and the descendants of all the XML objects in the XMLList.
 * 
 * @asreturn 
 * 
 * @export
 * @return {XMLList}
 */
XMLList.prototype.normalize = function() {
  return this;
};


/**
 * Returns the parent of the XMLList object if all items in the XMLList object have the same parent.
 * 
 * @asreturn 
 * 
 * @export
 * @return {Object}
 */
XMLList.prototype.parent = function() {
  if (this.isEmpty())
    return undefined;
  var /** @type {XML} */ retVal = this._xmlArray[0].parent();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 1; i < len; i++) {
    if (this._xmlArray[i].parent() != retVal)
      return undefined;
  }
  return retVal;
};


/**
 * @export
 * @param {*} rightHand
 * @return {*}
 */
XMLList.prototype.plus = function(rightHand) {
  if (org.apache.royale.utils.Language.is(rightHand, XML) || org.apache.royale.utils.Language.is(rightHand, XMLList)) {
    var /** @type {XMLList} */ list = new XMLList();
    list.concat(this);
    list.concat(rightHand);
    if (org.apache.royale.utils.Language.is(rightHand, XML))
      list.targetObject = rightHand; else {
      list.targetObject = rightHand.targetObject;
      list.targetProperty = rightHand.targetProperty;
    }
    return list;
  }
  if (org.apache.royale.utils.Language.is(rightHand, String))
    return this.toString() + rightHand;
  if (org.apache.royale.utils.Language.is(rightHand, Number) && isNaN(rightHand))
    return NaN;
  if (isNaN(Number(this.toString())) || isNaN(Number(rightHand.toString())))
    return this.toString() + rightHand.toString();
  return Number(this.toString()) + rightHand;
};


/**
 * If a name parameter is provided, lists all the children of the XMLList object that contain processing instructions with that name.
 * 
 * @asparam name
 * @asreturn 
 * 
 * @export
 * @param {string=} name
 * @return {XMLList}
 */
XMLList.prototype.processingInstructions = function(name) {
  name = typeof name !== 'undefined' ? name : "*";
  if (this.isSingle())
    return this._xmlArray[0].processingInstructions(name);
  var /** @type {XMLList} */ retVal = new XMLList();
  if (!name)
    return retVal;
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    if (this._xmlArray[i].nodeKind() != "processing-instruction")
      continue;
    if (name == "*") {
      retVal.append(this._xmlArray[i]);
    }
    else if (name == this._xmlArray[i].localName)
      retVal.append(this._xmlArray[i]);
  }
  return retVal;
};


/**
 * @export
 * @param {*} child
 */
XMLList.prototype.removeChild = function(child) {
  var /** @type {number} */ i = 0;
  var /** @type {number} */ len = 0;
  if (org.apache.royale.utils.Language.is(child, String)) {
    var /** @type {number} */ propNum = parseInt(child, 10);
    if (propNum.toString() == child) {
      this.removeChildAt(propNum);
    } else if (this.isSingle()) {
      this._xmlArray[0].removeChild(child);
    }
    return;
  }
  if (org.apache.royale.utils.Language.is(child, Number)) {
    i = Number(child);
    this.removeChildAt(i);
    return;
  }
  if (this.isSingle())
    this._xmlArray[0].removeChild(child); else if (org.apache.royale.utils.Language.is(child, XMLList)) {
    len = Number(child.length());
    for (i = 0; i < len; i++) {
      this.removeChild(child[i]);
    }
  } else if (org.apache.royale.utils.Language.is(child, XML)) {
    len = this._xmlArray.length - 1;
    for (i = len; i >= 0; i--) {
      if (this._xmlArray[i] == child) {
        this._xmlArray.splice(i, 1);
        if (child.hasAncestor(this._targetObject))
          child.parent().removeChild(child);
      }
    }
  }
};


/**
 * @export
 * @param {number} idx
 */
XMLList.prototype.removeChildAt = function(idx) {
  if (idx >= 0 && idx < this._xmlArray.length) {
    var /** @type {XML} */ child = this._xmlArray[idx];
    this._xmlArray.splice(idx, 1);
    if (child.hasAncestor(this._targetObject))
      child.parent().removeChild(child);
  }
};


/**
 * @private
 * @param {number} idx
 * @param {*} child
 */
XMLList.prototype.replaceChildAt = function(idx, child) {
  var /** @type {number} */ i = 0;
  var /** @type {XML} */ childToReplace = this._xmlArray[idx];
  if (childToReplace && this._targetObject) {
    this._targetObject.replaceChildAt(childToReplace.childIndex(), child);
  }
  if (org.apache.royale.utils.Language.is(child, XML)) {
    this._xmlArray[idx] = child;
  } else if (org.apache.royale.utils.Language.is(child, XMLList)) {
    var /** @type {number} */ len = Number(child.length());
    for (i = 0; i < len; i++) {
      if (i == 0)
        this._xmlArray[idx] = child[i];
      else
        this._xmlArray.splice(idx + i, 0, child[i]);
    }
  }
  while (idx++ < this._xmlArray.length) {
    if (!this.hasOwnProperty(idx))
      this.addIndex(idx);
  }
};


/**
 * @private
 * @type {*}
 */
XMLList.prototype._targetObject;


/**
 * @private
 * @type {*}
 */
XMLList.prototype._targetProperty;


/**
 * @private
 * @return {XML}
 */
XMLList.prototype.xmlFromProperty = function() {
  var /** @type {string} */ xmlStr = "<";
  if (org.apache.royale.utils.Language.is(this._targetProperty, QName)) {
    if (this._targetProperty.prefix)
      xmlStr += this._targetProperty.prefix + "::";
    xmlStr += this._targetProperty.localName + "/>";
  } else {
    xmlStr += this._targetProperty + "/>";
  }
  return new XML(xmlStr);
};


/**
 * @export
 * @param {*} attr
 * @param {string} value
 * @return {string}
 */
XMLList.prototype.setAttribute = function(attr, value) {
  if (this.isEmpty() && this.targetObject)
    this._xmlArray[0] = this.targetObject.setChild(this._targetProperty, this.xmlFromProperty());
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++)
    this._xmlArray[i].setAttribute(attr, value);
  return value;
};


/**
 * @export
 * @param {*} obj
 * @return {boolean}
 */
XMLList.prototype.hasAncestor = function(obj) {
  if (this.isSingle())
    return this._xmlArray[0].hasAncestor(obj);
  return false;
};


/**
 * @export
 * @param {XML} child1
 * @param {XML} child2
 * @return {XML}
 */
XMLList.prototype.insertChildAfter = function(child1, child2) {
  if (this.isSingle())
    return this._xmlArray[0].insertChildAfter(child1, child2);
  return null;
};


/**
 * @export
 * @param {XML} child1
 * @param {XML} child2
 * @return {XML}
 */
XMLList.prototype.insertChildBefore = function(child1, child2) {
  if (this.isSingle())
    return this._xmlArray[0].insertChildAfter(child1, child2);
  return null;
};


/**
 * @export
 * @param {string=} prefix
 * @return {*}
 */
XMLList.prototype.namespace = function(prefix) {
  prefix = typeof prefix !== 'undefined' ? prefix : null;
  if (this.isSingle())
    return this._xmlArray[0].namespace(prefix);
  return null;
};


/**
 * @export
 * @return {string}
 */
XMLList.prototype.nodeKind = function() {
  if (this.isSingle())
    return this._xmlArray[0].nodeKind();
  return null;
};


/**
 * @export
 * @param {*} ns
 * @return {XML}
 */
XMLList.prototype.removeNamespace = function(ns) {
  if (this.isSingle())
    return this._xmlArray[0].removeNamespace(ns);
  return null;
};


/**
 * @export
 * @param {Object} propertyName
 * @param {*} value
 * @return {*}
 */
XMLList.prototype.replace = function(propertyName, value) {
  if (this.isSingle())
    return this._xmlArray[0].replace(propertyName, value);
};


/**
 * @export
 * @param {*} elementName
 * @param {Object} elements
 * @return {Object}
 */
XMLList.prototype.setChild = function(elementName, elements) {
  if (this.isEmpty() && this.targetObject)
    this._xmlArray[0] = this.targetObject.setChild(this._targetProperty, this.xmlFromProperty());
  if (this.isSingle())
    this._xmlArray[0].setChild(elementName, elements);
  return elements;
};


/**
 * @export
 * @param {XML} parent
 */
XMLList.prototype.setParent = function(parent) {
  if (this.isSingle())
    this._xmlArray[0].setParent(parent);
};


/**
 * @export
 * @param {Object} value
 * @return {XML}
 */
XMLList.prototype.setChildren = function(value) {
  if (this.isSingle())
    return this._xmlArray[0].setChildren(value);
  return null;
};


/**
 * @export
 * @param {string} name
 */
XMLList.prototype.setLocalName = function(name) {
  if (this.isSingle())
    this._xmlArray[0].setLocalName(name);
};


/**
 * @export
 * @param {string} name
 */
XMLList.prototype.setName = function(name) {
  if (this.isSingle())
    this._xmlArray[0].setName(name);
};


/**
 * @export
 * @param {Namespace} ns
 */
XMLList.prototype.setNamespace = function(ns) {
  if (this.isSingle())
    this._xmlArray[0].setNamespace(ns);
};


/**
 * Calls the text() method of each XML object and returns an XMLList object that contains the results.
 * 
 * @asreturn 
 * 
 * @export
 * @return {XMLList}
 */
XMLList.prototype.text = function() {
  var /** @type {XMLList} */ retVal = new XMLList();
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {XMLList} */ list = this._xmlArray[i].text();
    if (list.length())
      retVal.concat(list);
  }
  return retVal;
};


/**
 * Returns the string representation of this object, formatted according to locale-specific conventions.
 * 
 * @asreturn 
 * 
 * @export
 * @override
 */
XMLList.prototype.toLocaleString = function() {
  var /** @type {Array} */ retVal = [];
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {string} */ str = org.apache.royale.utils.Language.string(this._xmlArray[i].toLocaleString());
    if (str)
      retVal.push(str);
  }
  return retVal.join("");
};


/**
 * Returns a string representation of all the XML objects in an XMLList object.
 * 
 * @asreturn 
 * 
 * @export
 * @return {string}
 */
XMLList.prototype.toString = function() {
  var /** @type {Array} */ retVal = [];
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {string} */ str = org.apache.royale.utils.Language.string(this._xmlArray[i].toString());
    if (str)
      retVal.push(str);
  }
  return retVal.join("");
};


/**
 * Returns a string representation of all the XML objects in an XMLList object.
 * 
 * @asreturn 
 * 
 * @export
 * @return {string}
 */
XMLList.prototype.toXMLString = function() {
  var /** @type {Array} */ retVal = [];
  var /** @type {number} */ len = Number(this._xmlArray.length);
  for (var /** @type {number} */ i = 0; i < len; i++) {
    var /** @type {string} */ str = org.apache.royale.utils.Language.string(this._xmlArray[i].toXMLString());
    if (str)
      retVal.push(str);
  }
  return retVal.join("\n");
};


/**
 * Returns the XMLList object.
 * 
 * @asreturn 
 * 
 * @export
 * @override
 */
XMLList.prototype.valueOf = function() {
  if (this.isEmpty())
    return "";
  if (this.isSingle())
    return this._xmlArray[0].valueOf();
  return this.toString();
};


/**
 * @export
 * @param {string} name
 * @return {string}
 */
XMLList.prototype.anchor = function(name) {
  return this.isSingle() ? this._xmlArray[0].anchor(name) : "";
};


/**
 * @export
 * @param {number} index
 * @return {string}
 */
XMLList.prototype.charAt = function(index) {
  return this.isSingle() ? this._xmlArray[0].charAt(index) : "";
};


/**
 * @export
 * @param {number} index
 * @return {number}
 */
XMLList.prototype.charCodeAt = function(index) {
  return this.isSingle() ? this._xmlArray[0].charCodeAt(index) : -1;
};


/**
 * @export
 * @param {number} pos
 * @return {number}
 */
XMLList.prototype.codePointAt = function(pos) {
  return this.isSingle() ? this._xmlArray[0].codePointAt(pos) : -1;
};


/**
 * @export
 * @param {string} searchValue
 * @param {number=} fromIndex
 * @return {number}
 */
XMLList.prototype.indexOf = function(searchValue, fromIndex) {
  fromIndex = typeof fromIndex !== 'undefined' ? fromIndex : 0;
  return this.isSingle() ? this._xmlArray[0].indexOf(searchValue, fromIndex) : -1;
};


/**
 * @export
 * @param {string} searchValue
 * @param {number=} fromIndex
 * @return {number}
 */
XMLList.prototype.lastIndexOf = function(searchValue, fromIndex) {
  fromIndex = typeof fromIndex !== 'undefined' ? fromIndex : 0;
  return this.isSingle() ? this._xmlArray[0].lastIndexOf(searchValue, fromIndex) : -1;
};


/**
 * @export
 * @param {string} compareString
 * @param {*=} locales
 * @param {*=} options
 * @return {number}
 */
XMLList.prototype.localeCompare = function(compareString, locales, options) {
  locales = typeof locales !== 'undefined' ? locales : undefined;
  options = typeof options !== 'undefined' ? options : undefined;
  return this.isSingle() ? this._xmlArray[0].localeCompare(compareString, locales, options) : NaN;
};


/**
 * @export
 * @param {*} regexp
 * @return {Array}
 */
XMLList.prototype.match = function(regexp) {
  return this.isSingle() ? this._xmlArray[0].match(regexp) : null;
};


/**
 * @export
 * @param {*} regexp
 * @return {number}
 */
XMLList.prototype.search = function(regexp) {
  return this.isSingle() ? this._xmlArray[0].search(regexp) : -1;
};


/**
 * @export
 * @param {number} beginSlice
 * @param {*=} endSlice
 * @return {string}
 */
XMLList.prototype.slice = function(beginSlice, endSlice) {
  endSlice = typeof endSlice !== 'undefined' ? endSlice : undefined;
  return this.isSingle() ? this._xmlArray[0].slice(beginSlice, endSlice) : null;
};


/**
 * @export
 * @param {*=} separator
 * @param {*=} limit
 * @return {Array}
 */
XMLList.prototype.split = function(separator, limit) {
  separator = typeof separator !== 'undefined' ? separator : undefined;
  limit = typeof limit !== 'undefined' ? limit : undefined;
  return this.isSingle() ? this._xmlArray[0].split(separator, limit) : null;
};


/**
 * @export
 * @param {number} start
 * @param {*=} length
 * @return {string}
 */
XMLList.prototype.substr = function(start, length) {
  length = typeof length !== 'undefined' ? length : undefined;
  return this.isSingle() ? this._xmlArray[0].substr(start, length) : null;
};


/**
 * @export
 * @param {number} indexStart
 * @param {*=} indexEnd
 * @return {string}
 */
XMLList.prototype.substring = function(indexStart, indexEnd) {
  indexEnd = typeof indexEnd !== 'undefined' ? indexEnd : undefined;
  return this.isSingle() ? this._xmlArray[0].substring(indexStart, indexEnd) : null;
};


/**
 * @export
 * @return {string}
 */
XMLList.prototype.toLocaleLowerCase = function() {
  return this.isSingle() ? this._xmlArray[0].toLocaleLowerCase() : null;
};


/**
 * @export
 * @return {string}
 */
XMLList.prototype.toLocaleUpperCase = function() {
  return this.isSingle() ? this._xmlArray[0].toLocaleUpperCase() : null;
};


/**
 * @export
 * @return {string}
 */
XMLList.prototype.toLowerCase = function() {
  return this.isSingle() ? this._xmlArray[0].toLowerCase() : null;
};


/**
 * @export
 * @return {string}
 */
XMLList.prototype.toUpperCase = function() {
  return this.isSingle() ? this._xmlArray[0].toUpperCase() : null;
};


/**
 * @export
 * @return {string}
 */
XMLList.prototype.trim = function() {
  return this.isSingle() ? this._xmlArray[0].trim() : null;
};


/**
 * @export
 * @param {*=} fractionDigits
 * @return {number}
 */
XMLList.prototype.toExponential = function(fractionDigits) {
  fractionDigits = typeof fractionDigits !== 'undefined' ? fractionDigits : undefined;
  return this.isSingle() ? this._xmlArray[0].toExponential(fractionDigits) : NaN;
};


/**
 * @export
 * @param {*=} digits
 * @return {number}
 */
XMLList.prototype.toFixed = function(digits) {
  digits = typeof digits !== 'undefined' ? digits : undefined;
  return this.isSingle() ? this._xmlArray[0].toFixed(digits) : NaN;
};


/**
 * @export
 * @param {*=} precision
 * @return {number}
 */
XMLList.prototype.toPrecision = function(precision) {
  precision = typeof precision !== 'undefined' ? precision : undefined;
  return this.isSingle() ? this._xmlArray[0].toPrecision(precision) : NaN;
};


/**
 * @private
 * @return {boolean}
 */
XMLList.prototype.isEmpty = function() {
  return this._xmlArray.length == 0;
};


/**
 * @private
 * @return {boolean}
 */
XMLList.prototype.isSingle = function() {
  return this._xmlArray.length == 1;
};


/**
 * This coerces single-item XMLList objects to XML for cases where the type is expected to be XML
 * @export
 * @return {XML}
 */
XMLList.prototype.toXML = function() {
  if (this.isSingle())
    return this._xmlArray[0];
  org.apache.royale.debugging.throwError("Incompatible assignment of XMLList to XML");
  return null;
};


XMLList.prototype.get__targetObject = function() {
  return this._targetObject;
};


XMLList.prototype.set__targetObject = function(value) {
  this._targetObject = value;
};


XMLList.prototype.get__targetProperty = function() {
  return this._targetProperty;
};


XMLList.prototype.set__targetProperty = function(value) {
  this._targetProperty = value;
};


Object.defineProperties(XMLList.prototype, /** @lends {XMLList.prototype} */ {
/**
  * @export
  * @type {*} */
targetObject: {
get: XMLList.prototype.get__targetObject,
set: XMLList.prototype.set__targetObject},
/**
  * @export
  * @type {*} */
targetProperty: {
get: XMLList.prototype.get__targetProperty,
set: XMLList.prototype.set__targetProperty}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
XMLList.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'XMLList', qName: 'XMLList', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
XMLList.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'targetObject': { type: '*', access: 'readwrite', declaredBy: 'XMLList'},
        'targetProperty': { type: '*', access: 'readwrite', declaredBy: 'XMLList'}
      };
    },
    methods: function () {
      return {
        'XMLList': { type: '', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }},
        'append': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'appendChild': { type: 'XML', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'attribute': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'attributes': { type: 'XMLList', declaredBy: 'XMLList'},
        'child': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'childIndex': { type: 'int', declaredBy: 'XMLList'},
        'children': { type: 'XMLList', declaredBy: 'XMLList'},
        'comments': { type: 'XMLList', declaredBy: 'XMLList'},
        'concat': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'contains': { type: 'Boolean', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'copy': { type: 'XMLList', declaredBy: 'XMLList'},
        'descendants': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }},
        'elements': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }},
        'elementNames': { type: 'Array', declaredBy: 'XMLList'},
        'equals': { type: 'Boolean', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'filter': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Function', optional: false } ]; }},
        'hasComplexContent': { type: 'Boolean', declaredBy: 'XMLList'},
        'hasOwnProperty': { type: 'Boolean', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'hasSimpleContent': { type: 'Boolean', declaredBy: 'XMLList'},
        'length': { type: 'int', declaredBy: 'XMLList'},
        'name': { type: 'QName', declaredBy: 'XMLList'},
        'normalize': { type: 'XMLList', declaredBy: 'XMLList'},
        'parent': { type: 'Object', declaredBy: 'XMLList'},
        'plus': { type: '*', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'processingInstructions': { type: 'XMLList', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: true } ]; }},
        'removeChild': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'removeChildAt': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'setAttribute': { type: 'String', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        'hasAncestor': { type: 'Boolean', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'insertChildAfter': { type: 'XML', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'XML', optional: false },{ index: 2, type: 'XML', optional: false } ]; }},
        'insertChildBefore': { type: 'XML', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'XML', optional: false },{ index: 2, type: 'XML', optional: false } ]; }},
        'namespace': { type: '*', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: true } ]; }},
        'nodeKind': { type: 'String', declaredBy: 'XMLList'},
        'removeNamespace': { type: 'XML', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'replace': { type: '*', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: '*', optional: false } ]; }},
        'setChild': { type: 'Object', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false },{ index: 2, type: 'Object', optional: false } ]; }},
        'setParent': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'XML', optional: false } ]; }},
        'setChildren': { type: 'XML', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'setLocalName': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'setName': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'setNamespace': { type: 'void', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Namespace', optional: false } ]; }},
        'text': { type: 'XMLList', declaredBy: 'XMLList'},
        'toLocaleString': { type: 'String', declaredBy: 'XMLList'},
        'toString': { type: 'String', declaredBy: 'XMLList'},
        'toXMLString': { type: 'String', declaredBy: 'XMLList'},
        'valueOf': { type: '*', declaredBy: 'XMLList'},
        'anchor': { type: 'String', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'charAt': { type: 'String', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'charCodeAt': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'codePointAt': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'indexOf': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Number', optional: true } ]; }},
        'lastIndexOf': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Number', optional: true } ]; }},
        'localeCompare': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: '*', optional: true },{ index: 3, type: '*', optional: true } ]; }},
        'match': { type: 'Array', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'search': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'slice': { type: 'String', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: '*', optional: true } ]; }},
        'split': { type: 'Array', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: true },{ index: 2, type: '*', optional: true } ]; }},
        'substr': { type: 'String', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: '*', optional: true } ]; }},
        'substring': { type: 'String', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: '*', optional: true } ]; }},
        'toLocaleLowerCase': { type: 'String', declaredBy: 'XMLList'},
        'toLocaleUpperCase': { type: 'String', declaredBy: 'XMLList'},
        'toLowerCase': { type: 'String', declaredBy: 'XMLList'},
        'toUpperCase': { type: 'String', declaredBy: 'XMLList'},
        'trim': { type: 'String', declaredBy: 'XMLList'},
        'toExponential': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: true } ]; }},
        'toFixed': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: true } ]; }},
        'toPrecision': { type: 'Number', declaredBy: 'XMLList', parameters: function () { return [  { index: 1, type: '*', optional: true } ]; }},
        'toXML': { type: 'XML', declaredBy: 'XMLList'}
      };
    }
  };
};