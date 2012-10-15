/// <reference path="Object.d.ts" />
/// <reference path="dojox.layout.GridContainerLite.d.ts" />
module dojox.layout{
export class GridContainer extends dojox.layout.GridContainerLite {
hasResizableColumns : bool;
liveResizeColumns : bool;
minColWidth : number;
minChildWidth : number;
mode : String;
isRightFixed : bool;
isLeftFixed : bool;
_activeGrip : any;
_initX : any;
_isResized : bool;
_oldTabSize : any;
_currentColumn : any;
_currentColumnWidth : any;
_nextColumn : any;
_nextColumnWidth : any;
_currentMinCol : any;
_nextMinCol : any;
_connectResizeColumnMove : Object;
_connectOnGripMouseUp : Object;
_connectResizeColumnOff : Object;
_dragManager : any;
_createGrip (index:number) : any;
_placeGrips () : any;
_onGripDbClick () : any;
_resizeColumnOn (e:any) : any;
_onGripMouseUp () : any;
_resizeColumnMove (e:any) : any;
_resizeColumnOff (e:any) : any;
setColumns (nbColumns:number) : any;
_addColumn (nbColumns:number) : any;
_deleteColumn (indices:any[]) : any;
}
}
