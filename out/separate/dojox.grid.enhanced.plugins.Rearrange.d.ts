/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class Rearrange extends dojox.grid.enhanced._Plugin {
setArgs (args:any) : any;
_hasIdentity (points:any) : any;
moveColumns (colsToMove:any,targetPos:number) : any;
moveRows (rowsToMove:any,targetPos:number) : any;
moveCells (cellsToMove:any,target:any) : any;
copyCells (cellsToMove:any,target:any) : any;
changeCells (sourceGrid:any,cellsToMove:any,target:any) : any;
clearCells (cellsToClear:any) : any;
insertRows (sourceGrid:any,rowsToMove:any,targetPos:any) : any;
removeRows (rowsToRemove:any) : any;
_getPageInfo () : any;
}
}
