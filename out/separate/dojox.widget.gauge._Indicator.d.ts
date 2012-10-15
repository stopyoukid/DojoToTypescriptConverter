/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget.gauge{
export class _Indicator extends dijit._Widget {
getParent () : any;
_getSibling (which:String) : any;
getPreviousSibling () : any;
getNextSibling () : any;
getIndexInParent () : number;
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
value : number;
type : String;
color : String;
length : number;
width : number;
offset : number;
hover : String;
front : bool;
easing : any;
duration : number;
hideValue : bool;
noChange : bool;
_gauge : Object;
onDragMove () : any;
_update (event:any) : any;
update (value:any) : any;
draw (dontAnimate?:bool) : any;
remove () : any;
}
}
