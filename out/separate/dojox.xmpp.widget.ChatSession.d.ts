/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.LayoutContainer.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.xmpp.widget{
export class ChatSession extends dijit.layout.LayoutContainer {
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
enableSubWidgets : Object;
widgetType : String;
chatWith : Object;
instance : Object;
displayMessage (message:any,type:any) : any;
goToLastMessage () : any;
}
}
