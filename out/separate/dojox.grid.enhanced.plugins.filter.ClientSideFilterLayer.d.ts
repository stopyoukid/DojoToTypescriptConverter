/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins._StoreLayer.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins.filter._FilterLayerMixin.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class ClientSideFilterLayer extends dojox.grid.enhanced.plugins._StoreLayer {
_filter : any;
filterDef (filter?:any) : any;
onFilterDefined (filter:any) : any;
onFiltered (filteredSize:number,totalSize:number) : any;
_result : any;
_resultStartIdx : any;
_indexMap : any;
_getter : any;
_nextUnfetchedIdx : number;
_storeSize : number;
_fetchAll : bool;
_lastSortInfo : any;
_defaultGetter (datarow:any,colName:any,rowIndex:any,store:any) : any;
setGetter (getter:Function) : any;
fetchAllOnFirstFilter (toFetchAll?:bool) : bool;
_fetch (userRequest:any,filterRequest:any) : any;
_hasReachedStoreEnd () : bool;
_applyFilter (datarow:any,rowIndex:number) : any;
_doFilter (items:any[],startIdx:number,userRequest:any) : any;
_onFetchBegin (size:number,req:any) : any;
_completeQuery (userRequest:any) : any;
_addCachedItems (items:any[],filterStartIdx:number) : any;
onRowMappingChange (mapping:any) : any;
}
}
