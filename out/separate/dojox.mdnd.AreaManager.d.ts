module dojox.mdnd{
export class AreaManager{
autoRefresh : bool;
areaClass : String;
dragHandleClass : String;
_areaList : any[];
_oldIndexArea : number;
_currentIndexArea : number;
_accept : bool;
_cover : Object;
_cover2 : Object;
_dragStartHandler : Object;
_sourceIndexArea : number;
_lastValidIndexArea : Object;
_dragItem : Object;
_currentDropIndex : number;
_sourceDropIndex : number;
_eventsIE7 : any[];
_oldDropIndex : number;
resizeHandler : Object;
init () : any;
registerByNode (area:HTMLElement,notInitAreas:bool) : any;
registerByClass () : any;
unregister (area:HTMLElement) : bool;
_addMoveableItem (node:HTMLElement) : Object;
_deleteMoveableItem (objItem:Object) : any;
_getIndexArea (area:HTMLElement) : number;
_searchDragHandle (node:HTMLElement) : HTMLElement;
addDragItem (area:HTMLElement,node:HTMLElement,index:number,notCheckParent:bool) : bool;
removeDragItem (area:HTMLElement,node:HTMLElement) : Object;
_getChildren (area:HTMLElement) : any[];
_setMarginArea (area:Object,node:HTMLElement) : any;
findCurrentIndexArea (coords:Object,size:Object) : number;
_isAccepted (type:any[],accept:any[]) : any;
onDragStart (node:HTMLElement,coords:Object,size:Object) : any;
onDragEnter (coords:Object,size:Object) : any;
onDragExit (coords:Object,size:Object) : any;
onDrag (node:HTMLElement,coords:Object,size:Object,mousePosition:Object) : any;
placeDropIndicator (coords:Object,size:Object) : number;
_placeDropIndicator (size:Object) : any;
onDropCancel () : any;
onDrop (node:HTMLElement) : any;
_resetAfterDrop () : any;
destroy () : any;
}
}
