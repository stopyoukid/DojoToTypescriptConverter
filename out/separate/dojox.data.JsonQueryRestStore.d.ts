/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.JsonRestStore.d.ts" />
/// <reference path="dojox.data.util.JsonQuery.d.ts" />
module dojox.data{
export class JsonQueryRestStore extends dojox.data.JsonRestStore {
useFullIdInQueries : bool;
jsonQueryPagination : Object;
_toJsonQuery (args:any,jsonQueryPagination:any) : any;
isUpdateable () : any;
matchesQuery (item:any,request:any) : any;
clientSideFetch (request:Object,baseResults:any[]) : any;
querySuperSet (argsSuper:any,argsSub:any) : any;
}
}
