/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dijit{
export class ProgressBar extends dijit._Widget {
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
progress : String;
value : String;
maximum : number;
places : number;
indeterminate : bool;
name : String;
_indeterminateHighContrastImagePath : any;
internalProgress : any;
update (attributes?:Object) : any;
_setValueAttr (v:any) : any;
_setLabelAttr (label:any) : any;
_setIndeterminateAttr (indeterminate:any) : any;
report (percent:number) : any;
onChange () : any;
}
}
