/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.av.widget{
export class VolumeButton extends dijit._Widget {
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
handleWidth : any;
width : any;
slotWidth : number;
volumeSlider : Object;
media : any;
showing : bool;
x : number;
clickOff : Object;
isDragging : bool;
cmove : Object;
cup : Object;
_domCoords : Object;
_handleCoords : Object;
setMedia (med:Object) : any;
updateIcon (vol:number) : any;
onShowVolume (evt:Event) : any;
onDocClick (evt:Event) : any;
onHideVolume () : any;
onDrag (evt:Event) : any;
startDrag () : any;
endDrag () : any;
handleOver () : any;
handleOut () : any;
_getVolumeDim () : any;
_getHandleDim () : any;
onResize (playerDimensions:Object) : any;
}
}
