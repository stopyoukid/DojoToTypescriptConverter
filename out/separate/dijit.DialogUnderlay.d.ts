/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dijit{
export class DialogUnderlay extends dijit._Widget {
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
dialogId : String;
bgIframe : Object;
_setDialogIdAttr (id:any) : any;
layout () : any;
show () : any;
hide () : any;
}
}
