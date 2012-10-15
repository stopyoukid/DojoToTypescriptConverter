module dojox.grid{
export class _Layout{
cells : any[];
structure : any[];
defaultWidth : String;
_defaultCellProps : Object;
fieldIndex : number;
cellCount : any;
moveColumn (sourceViewIndex:any,destViewIndex:any,cellIndex:any,targetIndex:any,before:any) : any;
setColumnVisibility (columnIndex:any,visible:any) : any;
addCellDef (inRowIndex:any,inCellIndex:any,inDef:any) : any;
addRowDef (inRowIndex:any,inDef:any) : any;
addRowsDef (inDef:any) : any;
addViewDef (inDef:any) : any;
setStructure (inStructure:any) : any;
}
}
