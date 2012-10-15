/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class Loader extends dijit._Widget {
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
loadIcon : String;
loadMessage : String;
hasVisuals : bool;
attachToPointer : Object;
duration : number;
_offset : number;
_pointerConnect : Object;
_xhrStart : Object;
_xhrEnd : Object;
_setMessage (message:String) : any;
_putLoader (e:any) : any;
_show () : any;
_hide () : any;
}
}
