/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.cells.RowSelector.d.ts" />
module dojox.grid.cells{
export class MultipleRowSelector extends dojox.grid.cells.RowSelector {
swipeStartRowIndex : number;
swipeMinRowIndex : number;
swipeMaxRowIndex : number;
toSelect : bool;
lastClickRowIdx : number;
toggleAllTrigerred : bool;
_headerSelectorConnectIdx : any;
toggleAllSelection (checked:bool) : any;
_onMouseDown (e:any) : any;
_onRowMouseOver (e:any) : any;
_domouseup (e:any) : any;
_startSelection (rowIndex:number) : any;
_updateSelection (e:any,delta:number) : any;
_swipeByKey (rowOffset:number,colOffset:any,e:any) : any;
_finishSelect () : any;
inSwipeSelection () : any;
_selectRow (e:any) : any;
_addHeaderSelector () : any;
_toggletHeader () : any;
_onSelectionChanged () : any;
}
}
