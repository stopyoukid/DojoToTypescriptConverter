/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.charting.widget{
export class Legend extends dijit._Widget {
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
chartRef : String;
horizontal : Object;
swatchSize : number;
legendNode : Object;
legendBody : Object;
chart : Object;
series : any;
_surfaces : any[];
_tr : Object;
_inrow : number;
refresh () : any;
_addLabel (dyn:any,label:any) : any;
_makeIcon (div:any,dyn:any) : any;
}
}
