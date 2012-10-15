/// <reference path="Object.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class _FilterLayerMixin{
_filter : any;
tags : any[];
filterDef (filter?:any) : any;
name () : String;
onFilterDefined (filter:any) : any;
onFiltered (filteredSize:number,totalSize:number) : any;
}
}
