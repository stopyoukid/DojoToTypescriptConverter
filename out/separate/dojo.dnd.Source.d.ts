/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Selector.d.ts" />
module dojo.dnd{
export class Source extends dojo.dnd.Selector {
isSource : Object;
horizontal : bool;
copyOnly : bool;
selfCopy : bool;
selfAccept : Object;
withHandles : bool;
delay : number;
accept : Object;
generateText : Object;
targetAnchor : Object;
targetBox : Object;
mouseDown : bool;
_lastX : number;
_lastY : number;
isDragging : bool;
before : Object;
sourceState : String;
targetState : String;
topics : any[];
checkAcceptance (source:Object,nodes:any[]) : bool;
copyState (keyPressed:bool,self?:bool) : bool;
onDndSourceOver (source:Object) : any;
onDndStart (source:Object,nodes:any[],copy:bool) : any;
onDndDrop (source:Object,nodes:any[],copy:bool,target:Object) : any;
onDndCancel () : any;
onDrop (source:Object,nodes:any[],copy:bool) : any;
onDropExternal (source:Object,nodes:any[],copy:bool) : any;
onDropInternal (nodes:any[],copy:bool) : any;
onDraggingOver () : any;
onDraggingOut () : any;
_markTargetAnchor (before:bool) : any;
_unmarkTargetAnchor () : any;
_markDndStatus (copy:any) : any;
_legalMouseDown (e:any) : bool;
}
}
