/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.DataSelection.d.ts" />
module dojox.grid{
export class TreeSelection extends dojox.grid.DataSelection {
selected : Object;
sorted_sel : any[];
sorted_ltos : Object;
sorted_stol : Object;
_bsearch (v:any) : any;
_comparePaths (a:any,b:any) : any;
_insertSortedSelection (index:any) : any;
_removeSortedSelection (index:any) : any;
}
}
