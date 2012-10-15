/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._LayoutWidget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class SortList extends dijit.layout._LayoutWidget {
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
heading : String;
descending : bool;
sortable : bool;
store : Object;
key : String;
_selected : Object;
_addItem (item:any) : any;
onSort (e:any) : any;
_unset (e:any) : any;
_handleClick (e:any) : any;
_updateValues () : any;
_sorter (a:any,b:any) : any;
setTitle (title:String) : any;
onChanged () : any;
}
}
