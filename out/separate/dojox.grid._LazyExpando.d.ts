/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.grid{
export class _LazyExpando extends dijit._Widget {
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
itemId : String;
cellIdx : number;
rowIdx : number;
expandoCell : Object;
level : number;
open : bool;
_initialized : bool;
_tableRow : any;
onToggle (event:any) : any;
setOpen (open:any) : any;
_updateOpenState (item:any) : any;
setRowNode (rowIdx:any,rowNode:any,view:any) : any;
}
}
