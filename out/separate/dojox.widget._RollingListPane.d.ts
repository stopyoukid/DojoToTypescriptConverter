/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
module dojox.widget{
export class _RollingListPane extends dijit.layout.ContentPane {
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
getParent () : any;
_getSibling (which:String) : any;
getPreviousSibling () : any;
getNextSibling () : any;
getIndexInParent () : number;
parentPane : any;
store : any;
items : any;
query : any;
queryOptions : any;
_focusByNode : Object;
minWidth : number;
_setContentAndScroll (cont:String,isFakeContent?:bool) : any;
_updateNodeWidth (n:any,min:any) : any;
_onMinWidthChange (v:any) : any;
_setMinWidthAttr (v:any) : any;
_focusKey (e:any) : any;
focus (force:bool) : any;
_doLoadItems (items:any,callback:Function) : any;
_doQuery () : any;
_hasItem (item:any) : any;
_onSetItem (item:any,attribute:any,oldValue:any,newValue:any) : any;
_onNewItem (newItem:any,parentInfo?:any) : any;
_onDeleteItem (deletedItem:any) : any;
onFetchStart () : any;
onFetchError (error:any) : any;
onLoadStart () : any;
onLoadError (error:any) : any;
onItems () : any;
}
}
