/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.cells.Cell.d.ts" />
module dojox.grid.cells{
export class RowIndex extends dojox.grid.cells.Cell {
name : String;
postscript () : any;
get (inRowIndex:any) : any;
}
}
