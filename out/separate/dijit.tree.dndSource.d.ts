/// <reference path="Object.d.ts" />
/// <reference path="dijit.tree._dndSelector.d.ts" />
module dijit.tree{
export class dndSource extends dijit.tree._dndSelector {
isSource : bool;
accept : any;
copyOnly : bool;
dragThreshold : number;
betweenThreshold : number;
targetAnchor : Object;
dropPosition : String;
targetBox : Object;
mouseDown : bool;
mouseButton : any;
_lastX : number;
_lastY : number;
isDragging : bool;
sourceState : String;
targetState : String;
topics : any[];
checkAcceptance (source:any,nodes:HTMLElement[]) : bool;
copyState (keyPressed:bool) : bool;
_onDragMouse (e:any) : any;
checkItemAcceptance (target:HTMLElement,source:any,position:String) : any;
onDndSourceOver (source:Object) : any;
onDndStart (source:Object,nodes:HTMLElement[],copy:bool) : any;
itemCreator (nodes:HTMLElement[],target:any,source:any) : any;
onDndDrop (source:Object,nodes:HTMLElement[],copy:bool) : any;
onDndCancel () : any;
_isParentChildDrop (source:any,targetRow:any) : any;
_unmarkTargetAnchor () : any;
_markDndStatus (copy:any) : any;
}
}
