/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.StackContainer.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class Wizard extends dijit.layout.StackContainer {
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
nextButtonLabel : String;
previousButtonLabel : String;
cancelButtonLabel : String;
doneButtonLabel : String;
cancelFunction : any;
hideDisabled : bool;
_subscription : Object;
_checkButtons () : any;
_setButtonClass (button:any) : any;
_forward () : any;
done () : any;
}
}
