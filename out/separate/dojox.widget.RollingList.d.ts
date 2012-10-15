/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.widget{
export class RollingList extends dijit._Widget {
templateString : String;
templatePath : String;
widgetsInTemplate : bool;
_skipNodeCache : bool;
_earlyTemplatedStartup : bool;
_attachPoints : any;
_attachEvents : any[];
declaredClass : any;
_startupWidgets : Object;
_supportingWidgets : Object;
_templateCache : Object;
_stringRepl (tmpl:any) : any;
_fillContent (source:HTMLElement) : any;
_attachTemplateNodes (rootNode:HTMLElement,getAttrFunc?:Function) : any;
getCachedTemplate (templatePath:String,templateString?:String,alwaysUseString?:any) : any;
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
className : String;
store : any;
query : any;
queryOptions : any;
childrenAttrs : any;
parentAttr : String;
value : any;
executeOnDblClick : bool;
preloadItems : bool;
showButtons : bool;
okButtonLabel : String;
cancelButtonLabel : String;
minPaneWidth : number;
_declaredClasses : Object;
_scrollingTimeout : Object;
buttonsNode : any;
_focusedPane : any;
_setInProgress : any;
_visibleItem : any;
_isIdentity : any;
_lastExecutedValue : Object;
_savedFocus : Object;
_setShowButtonsAttr (doShow:any) : any;
_itemsMatch (item1:any,item2:any) : any;
_removeAfter (idx:dijit._Widget) : any;
_setMinPaneWidthAttr (value:any) : any;
_updateClass (node:HTMLElement,type:String,options?:Object) : any;
scrollIntoView (childWidget:any) : any;
resize (args:any) : any;
layout () : any;
_onChange (value:any) : any;
_setValue (value:any) : any;
_setValueAttr (value:any) : any;
_onItemClick (evt:any,pane:any,item:any,children?:any) : any;
_getPaneForItem (item?:any,parentPane?:any,children?:any) : any;
_getMenuItemForItem (item:any,parentPane:any) : any;
_setStore (store:any) : any;
_onKey (e:any) : any;
_resetValue () : any;
_onCancel () : any;
_onExecute () : any;
focus () : any;
handleKey (e:any) : any;
_updateChildClasses () : any;
getChildItems (item:any) : any;
getMenuItemForItem (item:any,parentPane:any,children?:any) : any;
getPaneForItem (item?:any,parentPane?:any,children?:any) : any;
onItemClick (item:any,pane:any,children?:any) : any;
onExecute () : any;
onCancel () : any;
onChange (value:any) : any;
}
}
