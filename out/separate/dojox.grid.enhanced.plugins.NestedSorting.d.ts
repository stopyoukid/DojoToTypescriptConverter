/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class NestedSorting extends dojox.grid.enhanced._Plugin {
_currMainSort : String;
_currRegionIdx : Object;
_excludedCoIdx : any[];
_headerNodes : Object;
_sortData : Object;
focus : any;
_focusRegions : Object;
_headerArea : Object;
_excludedColIdx : any[];
nls : any;
_setGridSortIndex (inIndex:any,inAsc:any,noRefresh:any) : any;
getSortProps () : any;
_initSort (postSort:any) : any;
_initHeaderNode (node:any) : any;
_onHeaderCellClick (e:any) : any;
_onHeaderCellMouseOver (e:any) : any;
_onHeaderCellMouseOut (e:any) : any;
_onSortBtnClick (e:any) : any;
_doSort (cellIdx:any) : any;
setSortData (cellIdx:any,attr:any,value:any) : any;
removeSortData (cellIdx:any) : any;
_prepareSingleSort (cellIdx:any) : any;
_prepareNestedSort (cellIdx:any) : any;
_updateSortDef () : any;
_updateHeaderNodeUI (node:any) : any;
isAsc (cellIndex:any) : any;
isDesc (cellIndex:any) : any;
_getCellByNode (node:any) : any;
clearSort () : any;
initCookieHandler () : any;
_loadNestedSortingProps (sortInfo:any,grid:any) : any;
_saveNestedSortingProps (grid:any) : any;
_initFocus () : any;
_focusHeader (evt:any) : any;
_blurHeader (evt:any) : any;
_onMove (rowStep:any,colStep:any,evt:any) : any;
_onKeyDown (e:any,isBubble:any) : any;
_getRegionView (region:any) : any;
_getRegions () : any;
_focusRegion (region:any) : any;
_blurRegion (region:any) : any;
_getCurrentRegion () : any;
_getRegionHeader (region:any) : any;
}
}
