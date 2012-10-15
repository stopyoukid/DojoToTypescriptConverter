/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class CellMerge extends dojox.grid.enhanced._Plugin {
_merged : Object;
mergeCells (rowTester:any,startColumnIndex:number,endColumnIndex:number,majorColumnIndex?:number) : any;
unmergeCells (mergeHandler:any) : any;
getMergedCells () : any;
getMergedCellsByRow (rowIndex:any) : any;
_setupConfig (config:any) : any;
_initEvents () : any;
_mixinGrid () : any;
_getWidth (colIndex:any) : any;
_onAfterRow (viewIdx:any,rowIndex:any,subrows:any) : any;
_createRecord (item:any) : any;
_isValid (item:any) : any;
_updateRows (item:any) : any;
}
}
