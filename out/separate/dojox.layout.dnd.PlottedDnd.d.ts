/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Source.d.ts" />
module dojox.layout.dnd{
export class PlottedDnd extends dojo.dnd.Source {
GC_OFFSET_X : any;
GC_OFFSET_Y : any;
firstIndicator : bool;
dndNodes : any;
containerSource : bool;
_over : bool;
dropObject : Object;
dom : any;
autoScrollActive : bool;
_timer : Object;
childBoxes : Object;
dropIndicator : Object;
handleClasses : any;
opacity : any;
allowAutoScroll : any;
defaultHandleClass : String;
isDropped : bool;
isOffset : any;
hideSource : any;
_drop : Object;
_calculateCoords (height:bool) : any;
setDndItemSelectable (node:HTMLElement,isSelectable:bool) : any;
getDraggedWidget (node:HTMLElement) : any;
isAccepted (node:HTMLElement) : any;
setIndicatorPosition (e:any) : any;
deleteDashedZone () : any;
insertDashedZone (before:bool) : any;
_checkAutoScroll (e:any) : any;
_autoScrollUp (node:any) : any;
_autoScrollDown (node:any) : any;
_stopAutoScroll () : any;
_sumAncestorProperties (node:any,prop:any) : number;
}
}
