/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.av.widget{
export class ProgressSlider extends dijit._Widget {
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
seeking : bool;
handleWidth : any;
finalWidth : any;
width : number;
x : any;
playerWidget : any;
media : any;
cmove : Object;
cup : Object;
setMedia (med:Object,playerWidget:any) : any;
onDrag (evt:any) : any;
startDrag () : any;
endDrag () : any;
setHandle (time:any) : any;
setLoadedPosition (decimal:any) : any;
handleOver () : any;
handleOut () : any;
onResize (playerDimensions:any) : any;
}
}
