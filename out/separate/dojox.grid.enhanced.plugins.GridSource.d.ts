/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Source.d.ts" />
module dojox.grid.enhanced.plugins{
export class GridSource extends dojo.dnd.Source {
insertNodesForGrid : any;
getCellContent (grid:any,leftTopCell:any,rightBottomCell:any) : any;
getRowContent (grid:any,rowIndexes:any) : any;
getColumnContent (grid:any,colIndexes:any) : any;
onDropGridCells (grid:any,leftTopCell:any,rightBottomCell:any) : any;
onDropGridRows (grid:any,rowIndexes:any) : any;
onDropGridColumns (grid:any,colIndexes:any) : any;
}
}
