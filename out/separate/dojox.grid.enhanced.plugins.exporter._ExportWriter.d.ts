/// <reference path="Object.d.ts" />
module dojox.grid.enhanced.plugins.exporter{
export class _ExportWriter{
_getExportDataForCell (rowIndex:any,rowItem:any,cell:any,grid:any) : any;
beforeHeader (grid:any) : bool;
afterHeader () : any;
beforeContent (items:any[]) : bool;
afterContent () : any;
beforeContentRow (argObj:any) : bool;
afterContentRow (argObj:any) : any;
beforeView (argObj:any) : bool;
afterView (argObj:any) : any;
beforeSubrow (argObj:any) : bool;
afterSubrow (argObj:any) : any;
handleCell (argObj:any) : any;
}
}
