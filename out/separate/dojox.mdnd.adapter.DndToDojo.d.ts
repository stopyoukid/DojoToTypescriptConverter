/// <reference path="Object.d.ts" />
module dojox.mdnd.adapter{
export class DndToDojo{
_currentDojoArea : HTMLElement;
_dojoxManager : any;
_dragStartHandler : Object;
_dropHandler : Object;
_moveHandler : Object;
_moveUpHandler : Object;
_lazyManager : Object;
_oldDojoArea : any;
cancelHandler : Object;
dropHandler : Object;
accept : Object;
_getIndexDojoArea (area:HTMLElement) : any;
_initCoordinates (area:HTMLElement) : Object;
register (area:HTMLElement,type:String,dojoTarget:bool) : any;
unregisterByNode (area:HTMLElement) : any;
unregisterByType (type:String) : any;
unregister () : any;
refresh () : any;
refreshByType (type:String) : any;
_getHoverDojoArea (coords:Object) : any;
onMouseMove (e:Event) : any;
isAccepted (draggedNode:HTMLElement,target:Object) : any;
onDragEnter (e:Event) : any;
onDragExit (e:Event) : any;
onDrop (e:Event) : any;
}
}
