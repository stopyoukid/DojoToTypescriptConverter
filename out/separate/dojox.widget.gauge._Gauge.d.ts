/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.widget.gauge{
export class _Gauge extends dijit._Widget {
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
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
width : any;
height : number;
background : Object;
min : number;
max : number;
image : String;
useRangeStyles : number;
useTooltip : bool;
majorTicks : Object;
minorTicks : Object;
_defaultIndicator : any;
defaultColors : any[];
surface : Object;
hideValues : bool;
gaugeContent : Object;
_rangeData : any[];
_drag : Object;
_img : Object;
_overOverlay : bool;
_lastHover : String;
ranges : Object;
indicators : Object;
_background : Object;
_setTicks (oldTicks:Object,newTicks:Object,label:bool) : any;
setMinorTicks (ticks:Object) : any;
setMajorTicks (ticks:Object) : any;
createSurface () : any;
setBackground (background:any) : any;
addRange (range:Object) : any;
addRanges (ranges:any[]) : any;
addIndicator (indicator:Object) : any;
removeIndicator (indicator:Object) : any;
moveIndicatorToFront (indicator:Object) : any;
drawText (txt:String,x:number,y:number,align?:String,vAlign?:String,color?:String,font?:Object) : any;
removeText (t:String) : any;
updateTooltip (txt:String,e:any) : any;
handleMouseOver (event:Object) : any;
handleMouseOut (event:Object) : any;
handleMouseDown (event:Object) : any;
handleMouseUp (event:Object) : any;
handleMouseMove (event:Object) : any;
}
}
