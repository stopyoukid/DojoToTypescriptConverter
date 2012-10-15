/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.grid{
export class _Expando extends dijit._Widget {
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
open : Object;
toggleClass : String;
itemId : String;
cellIdx : number;
rowNode : Object;
rowIdx : number;
expandoCell : Object;
level : number;
_initialized : bool;
_tableRow : any;
_toggleRows (toggleClass:any,open:any) : any;
setOpen (open:any) : any;
_setOpen (open:any) : any;
onToggle (e:any) : any;
setRowNode (rowIdx:any,rowNode:any,view:any) : any;
}
}
