/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.widget{
export class FisheyeList extends dijit._Widget {
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
snarfChildDomOutput : Object;
itemWidth : number;
itemHeight : number;
itemMaxWidth : number;
itemMaxHeight : number;
imgNode : Object;
orientation : String;
isFixed : bool;
conservativeTrigger : bool;
effectUnits : number;
itemPadding : number;
attachEdge : String;
labelEdge : String;
isHorizontal : bool;
selectedNode : number;
isOver : Object;
hitX1 : number;
hitY1 : number;
hitX2 : String;
hitY2 : String;
anchorEdge : Object;
proximityLeft : number;
proximityRight : number;
proximityTop : number;
proximityBottom : number;
children : Object;
_onMouseMoveHandle : Object;
_onScrollHandle : Object;
_onMouseOutHandle : Object;
_addChildHandle : Object;
_onResizeHandle : Object;
itemCount : any;
barWidth : number;
barHeight : number;
totalWidth : String;
totalHeight : String;
timerScale : number;
_initializePositioning () : any;
_overElement (node:HTMLElement,e:any) : any;
_onBodyOut (e:any) : any;
_setDormant (e:any) : any;
_setActive (e:any) : any;
_onMouseMove (e:any) : any;
_onScroll () : any;
onResized () : any;
_onGridMouseMove (x:any,y:any) : any;
_paint () : any;
_weighAt (cen:number,i:number) : number;
_setItemSize (p:any,scale:any) : any;
_positionElementsFrom (p:any,offset:any) : any;
_positionLabel (itm:any) : any;
_calcHitGrid () : any;
_toEdge (inp:any,def:any) : any;
_expandSlowly () : any;
}
}
