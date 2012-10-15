/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins._ServerSideLayer.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins.filter._FilterLayerMixin.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class ServerSideFilterLayer extends dojox.grid.enhanced.plugins._ServerSideLayer {
_filter : any;
filterDef (filter?:any) : any;
onFilterDefined (filter:any) : any;
onFiltered (filteredSize:number,totalSize:number) : any;
_filteredSize : Object;
}
}
