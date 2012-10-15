/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.DataGrid.d.ts" />
module dojox.grid{
export class TreeGrid extends dojox.grid.DataGrid {
defaultOpen : bool;
sortChildItems : bool;
openAtLevels : any[];
expandoCell : number;
_by_idty_paths : Object;
_childItemSorter (a:any,b:any,attribute:any,descending:any) : any;
_cleanupExpandoCache (index:any,identity:any,item:any) : any;
setModel (treeModel:any) : any;
_setModel (treeModel:any) : any;
getDefaultOpenState (cellDef:any,item:any) : any;
}
}
