/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\DataGridView.as
 * org.apache.royale.html.beads.DataGridView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.DataGridView');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IBeadModel,org.apache.royale.core.IChild,org.apache.royale.core.IDataGridModel,org.apache.royale.core.IDataGridPresentationModel,org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.html.Container,org.apache.royale.html.DataGrid,org.apache.royale.html.DataGridButtonBar,org.apache.royale.html.beads.layouts.ButtonBarLayout,org.apache.royale.html.supportClasses.DataGridColumnList,org.apache.royale.html.supportClasses.IDataGridColumn,org.apache.royale.html.supportClasses.Viewport,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.html.beads.GroupView');
goog.require('org.apache.royale.core.IBeadView');
goog.require('org.apache.royale.html.beads.IDataGridView');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.GroupView}
 * @implements {org.apache.royale.core.IBeadView}
 * @implements {org.apache.royale.html.beads.IDataGridView}
 */
org.apache.royale.html.beads.DataGridView = function() {
  org.apache.royale.html.beads.DataGridView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.DataGridView, org.apache.royale.html.beads.GroupView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.DataGridView', org.apache.royale.html.beads.DataGridView);


/**
 * @private
 * @type {org.apache.royale.html.DataGridButtonBar}
 */
org.apache.royale.html.beads.DataGridView.prototype._header;


/**
 * @private
 * @type {org.apache.royale.html.Container}
 */
org.apache.royale.html.beads.DataGridView.prototype._listArea;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.html.beads.DataGridView.prototype._lists;


/**
 * @export
 */
org.apache.royale.html.beads.DataGridView.prototype.refreshContent = function() {
  this.handleInitComplete(null);
};


/**
 * @asprivate
 * @protected
 * @override
 */
org.apache.royale.html.beads.DataGridView.prototype.handleInitComplete = function(event) {
  var /** @type {org.apache.royale.html.DataGrid} */ host = org.apache.royale.utils.Language.as(this._strand, org.apache.royale.html.DataGrid);
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(host.model, org.apache.royale.core.IDataGridModel);
  org.apache.royale.utils.Language.as(sharedModel, org.apache.royale.events.IEventDispatcher, true).addEventListener("dataProviderChanged", org.apache.royale.utils.Language.closure(this.handleDataProviderChanged, this, 'handleDataProviderChanged'));
  org.apache.royale.utils.Language.as(sharedModel, org.apache.royale.events.IEventDispatcher, true).addEventListener("selectedIndexChanged", org.apache.royale.utils.Language.closure(this.handleSelectedIndexChanged, this, 'handleSelectedIndexChanged'));
  this._header = new org.apache.royale.html.DataGridButtonBar();
  this._header.percentWidth = 100;
  this._header.dataProvider = sharedModel.columns;
  this._header.labelField = "label";
  sharedModel.headerModel = org.apache.royale.utils.Language.as(this._header.model, org.apache.royale.core.IBeadModel);
  this._listArea = new org.apache.royale.html.Container();
  this._listArea.percentWidth = 100;
  this._listArea.className = "opt_org-apache.royale-html-DataGrid_ListArea";
  this.createLists();
  var /** @type {org.apache.royale.html.beads.layouts.ButtonBarLayout} */ bblayout = new org.apache.royale.html.beads.layouts.ButtonBarLayout();
  this._header.addBead(org.apache.royale.utils.Language.as(bblayout, org.apache.royale.core.IBead));
  this._header.addBead(org.apache.royale.utils.Language.as(new org.apache.royale.html.supportClasses.Viewport(), org.apache.royale.core.IBead));
  host.addElement(org.apache.royale.utils.Language.as(this._header, org.apache.royale.core.IChild));
  host.addElement(org.apache.royale.utils.Language.as(this._listArea, org.apache.royale.core.IChild));
  this.handleDataProviderChanged(event);
  host.addEventListener("widthChanged", org.apache.royale.utils.Language.closure(this.handleSizeChanges, this, 'handleSizeChanges'));
  host.addEventListener("heightChanged", org.apache.royale.utils.Language.closure(this.handleSizeChanges, this, 'handleSizeChanges'));
  host.dispatchEvent(new org.apache.royale.events.Event("dataGridViewCreated"));
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataGridView.prototype.handleSizeChanges = function(event) {
  this._header.dispatchEvent(new org.apache.royale.events.Event("layoutChanged"));
  this._listArea.dispatchEvent(new org.apache.royale.events.Event("layoutChanged"));
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataGridView.prototype.handleDataProviderChanged = function(event) {
  this.host.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataGridView.prototype.handleSelectedIndexChanged = function(event) {
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.core.IDataGridModel);
  var /** @type {number} */ newIndex = sharedModel.selectedIndex;
  for (var /** @type {number} */ i = 0; i < this._lists.length; i++) {
    var /** @type {org.apache.royale.html.supportClasses.DataGridColumnList} */ list = org.apache.royale.utils.Language.as(this._lists[i], org.apache.royale.html.supportClasses.DataGridColumnList);
    list.selectedIndex = newIndex;
  }
};


/**
 * @asprivate
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.DataGridView.prototype.handleColumnListChange = function(event) {
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(this._strand.getBeadByType(org.apache.royale.core.IBeadModel), org.apache.royale.core.IDataGridModel);
  var /** @type {org.apache.royale.html.supportClasses.DataGridColumnList} */ list = org.apache.royale.utils.Language.as(event.target, org.apache.royale.html.supportClasses.DataGridColumnList);
  sharedModel.selectedIndex = list.selectedIndex;
  for (var /** @type {number} */ i = 0; i < this._lists.length; i++) {
    if (list != this._lists[i]) {
      var /** @type {org.apache.royale.html.supportClasses.DataGridColumnList} */ otherList = org.apache.royale.utils.Language.as(this._lists[i], org.apache.royale.html.supportClasses.DataGridColumnList);
      otherList.selectedIndex = list.selectedIndex;
    }
  }
  this.host.dispatchEvent(new org.apache.royale.events.Event('change'));
};


/**
 * @asprivate
 * @private
 */
org.apache.royale.html.beads.DataGridView.prototype.createLists = function() {
  var /** @type {org.apache.royale.html.DataGrid} */ host = org.apache.royale.utils.Language.as(this._strand, org.apache.royale.html.DataGrid);
  var /** @type {string} */ columnClassName = org.apache.royale.utils.Language.as(org.apache.royale.core.ValuesManager["valuesImpl"].getValue(host, "columnClassName"), String);
  if (columnClassName == null) {
    columnClassName = "DataGridColumnList";
  }
  var /** @type {org.apache.royale.core.IDataGridModel} */ sharedModel = org.apache.royale.utils.Language.as(host.model, org.apache.royale.core.IDataGridModel);
  var /** @type {org.apache.royale.core.IDataGridPresentationModel} */ presentationModel = host.presentationModel;
  this._lists = [];
  for (var /** @type {number} */ i = 0; i < sharedModel.columns.length; i++) {
    var /** @type {org.apache.royale.html.supportClasses.IDataGridColumn} */ dataGridColumn = org.apache.royale.utils.Language.as(sharedModel.columns[i], org.apache.royale.html.supportClasses.IDataGridColumn);
    var /** @type {string} */ useClassName = columnClassName;
    if (dataGridColumn.className != null)
      useClassName = dataGridColumn.className;
    var /** @type {org.apache.royale.html.supportClasses.DataGridColumnList} */ list = new org.apache.royale.html.supportClasses.DataGridColumnList();
    if (i == 0) {
      list.className = "first " + useClassName;
    } else if (i == sharedModel.columns.length - 1) {
      list.className = "last " + useClassName;
    } else {
      list.className = "middle " + useClassName;
    }
    list.id = "dataGridColumn" + String(i);
    list.dataProvider = sharedModel.dataProvider;
    list.itemRenderer = dataGridColumn.itemRenderer;
    list.labelField = dataGridColumn.dataField;
    list.addEventListener('change', org.apache.royale.utils.Language.closure(this.handleColumnListChange, this, 'handleColumnListChange'));
    list.addBead(org.apache.royale.utils.Language.as(presentationModel, org.apache.royale.core.IBead));
    this._listArea.addElement(org.apache.royale.utils.Language.as(list, org.apache.royale.core.IChild));
    this._lists.push(list);
  }
  host.dispatchEvent(new org.apache.royale.events.Event("layoutNeeded"));
};


org.apache.royale.html.beads.DataGridView.prototype.get__columnLists = function() {
  return this._lists;
};


org.apache.royale.html.beads.DataGridView.prototype.get__listArea = function() {
  return this._listArea;
};


org.apache.royale.html.beads.DataGridView.prototype.get__header = function() {
  return this._header;
};


Object.defineProperties(org.apache.royale.html.beads.DataGridView.prototype, /** @lends {org.apache.royale.html.beads.DataGridView.prototype} */ {
/**
  * @export
  * @type {Array} */
columnLists: {
get: org.apache.royale.html.beads.DataGridView.prototype.get__columnLists},
/**
  * @export
  * @type {org.apache.royale.html.Container} */
listArea: {
get: org.apache.royale.html.beads.DataGridView.prototype.get__listArea},
/**
  * @export
  * @type {org.apache.royale.core.IUIBase} */
header: {
get: org.apache.royale.html.beads.DataGridView.prototype.get__header}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.DataGridView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataGridView', qName: 'org.apache.royale.html.beads.DataGridView', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadView, org.apache.royale.html.beads.IDataGridView] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.DataGridView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'columnLists': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.DataGridView'},
        'listArea': { type: 'org.apache.royale.html.Container', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.DataGridView'},
        'header': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.DataGridView'}
      };
    },
    methods: function () {
      return {
        'DataGridView': { type: '', declaredBy: 'org.apache.royale.html.beads.DataGridView'},
        'refreshContent': { type: 'void', declaredBy: 'org.apache.royale.html.beads.DataGridView'}
      };
    }
  };
};
