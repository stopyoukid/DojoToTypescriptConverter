/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class Search extends dojox.grid.enhanced._Plugin {
_cacheSize : number;
searchRow (searchArgs:Object,onSearched:any) : any;
_search (searchArgs:Object,start:number,onSearched:any,isGlobal:bool) : any;
_checkRow (item:any,searchArgs:Object,isGlobal:bool) : any;
}
}
