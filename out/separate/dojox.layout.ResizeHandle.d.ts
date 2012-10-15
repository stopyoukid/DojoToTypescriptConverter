/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.layout{
export class ResizeHandle extends dijit._Widget {
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
targetId : String;
targetContainer : HTMLElement;
resizeAxis : String;
activeResize : bool;
activeResizeClass : String;
animateSizing : bool;
animateMethod : String;
animateDuration : number;
minHeight : number;
minWidth : number;
constrainMax : bool;
maxHeight : number;
maxWidth : number;
fixedAspect : bool;
intermediateChanges : bool;
startTopic : String;
endTopic : String;
_resizeHelper : Object;
_resizeX : Object;
_resizeY : Object;
targetWidget : Object;
targetDomNode : any;
_isSizing : bool;
startPoint : Object;
startSize : Object;
_aspect : Object;
_pconnects : any[];
_activeResizeLastEvent : any;
_beginSizing (e:any) : any;
_updateSizing (e:any) : any;
_getNewCoords (e:any) : Object;
_checkConstraints (newW:any,newH:any) : Object;
_changeSizing (e:any) : any;
_endSizing (e:any) : any;
onResize (e:any) : any;
}
}
