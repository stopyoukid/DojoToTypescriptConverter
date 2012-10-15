/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Selector.d.ts" />
module dojox.mdnd{
export class PureSource extends dojo.dnd.Selector {
horizontal : bool;
copyOnly : Object;
withHandles : bool;
isSource : Object;
targetState : String;
generateText : Object;
isDragging : bool;
mouseDown : bool;
targetAnchor : Object;
mouseButton : any;
accept : any;
sourceState : String;
topics : any[];
onDndCancel () : any;
copyState (keyPressed:bool) : bool;
_markDndStatus (copy:bool) : any;
_legalMouseDown (e:any) : bool;
}
}
