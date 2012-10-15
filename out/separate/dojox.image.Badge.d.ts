/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.image{
export class Badge extends dijit._Widget {
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
children : String;
rows : number;
cols : number;
cellSize : number;
cellMargin : number;
delay : number;
threads : number;
easing : any;
_init () : any;
_getCell (n:HTMLElement) : any;
_getImage () : any;
_enbiggen (e:any) : any;
_loadUnder (info:any,props:any) : any;
_disenbiggen (info:any,props:any) : any;
_cycle (info:any,props:any) : any;
}
}
