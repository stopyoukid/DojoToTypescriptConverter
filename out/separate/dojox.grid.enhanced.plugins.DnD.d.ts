/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class DnD extends dojox.grid.enhanced._Plugin {
_targetAnchorBorderWidth : number;
_copyOnly : bool;
_container : Object;
rearranger : Object;
_dnding : bool;
_oldCursor : Object;
_alreadyOut : bool;
_moveEvent : Object;
_target : Object;
_targetAnchor : Object;
_externalDnd : Object;
_isSource : bool;
_extDnding : bool;
_markTagetAnchorHandler : Object;
_elem : Object;
_source : Object;
_mixinGrid () : any;
setupConfig (config:Object) : any;
copyOnly (isCopyOnly:any) : any;
_isOutOfGrid (evt:any) : any;
_onMouseMove (evt:any) : any;
_onMouseUp () : any;
_initEvents () : any;
_clear () : any;
_getDnDRegion (rowIndex:any,colIndex:any) : any;
_startDnd (evt:any) : any;
_endDnd (destroySource:any) : any;
_createDnDUI (evt:any,isMovingIn:any) : any;
_destroyDnDUI (isMovingOut:any,destroySource:any) : any;
_createSource (evt:any) : any;
_destroySource () : any;
_createMoveable (evt:any) : any;
_destroyMoveable () : any;
_calcColTargetAnchorPos (evt:any,containerPos:any) : any;
_calcRowTargetAnchorPos (evt:any,containerPos:any) : any;
_calcCellTargetAnchorPos (evt:any,containerPos:any,targetAnchor:any) : any;
_markTargetAnchor (evt:any) : any;
_unmarkTargetAnchor () : any;
_getVisibleHeaders () : any;
_rearrange () : any;
onDraggingOver (sourcePlugin:any) : any;
_mapRegion (srcGrid:any,dndRegion:any) : any;
onDraggingOut (sourcePlugin:any) : any;
onDragIn (sourcePlugin:any,isCopy:any) : any;
onDragOut (isMove:any) : any;
_canAccept (sourcePlugin:any) : any;
_allDnDItemsLoaded () : any;
}
}
