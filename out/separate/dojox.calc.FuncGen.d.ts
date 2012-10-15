/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.calc{
export class FuncGen extends dijit._Widget {
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
writeStore : Object;
readStore : Object;
functions : Object;
onSelect () : any;
onClear () : any;
saveFunction (name:any,args:any,body:any) : any;
onSaved () : any;
clear () : any;
reset () : any;
onReset () : any;
deleteThing (item:any) : any;
deleteFunction (name:any) : any;
onDelete () : any;
readyStatus () : any;
}
}
