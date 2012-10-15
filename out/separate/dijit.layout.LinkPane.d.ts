/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dijit.layout{
export class LinkPane extends dijit.layout.ContentPane {
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
}
}
