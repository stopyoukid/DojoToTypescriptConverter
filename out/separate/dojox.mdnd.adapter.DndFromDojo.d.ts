module dojox.mdnd.adapter{
export class DndFromDojo{
_dojoManager : Object;
_currentArea : Object;
_oldArea : Object;
_moveHandler : Object;
_subscribeHandler : any[];
_dragNode : any;
_copy : any;
_source : any;
_outSourceHandler : Object;
subscribeDnd () : any;
unsubscribeDnd () : any;
_getHoverArea (coords:Object) : any;
onDragStart (source:Object,nodes:any[],copy:bool) : any;
onMouseMove (e:Event) : any;
onDragEnter () : any;
onDragExit () : any;
isAccepted (node:HTMLElement,accept:Object) : bool;
onDndSource (source:Object) : any;
_resetAvatar () : any;
onDropCancel () : any;
onDrop (source:Object,nodes:any[],copy:bool) : any;
}
}
