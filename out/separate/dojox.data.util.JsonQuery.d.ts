module dojox.data.util{
export class JsonQuery{
useFullIdInQueries : bool;
jsonQueryPagination : Object;
_toJsonQuery (args:any,jsonQueryPagination:any) : any;
fetch (args:any) : any;
isUpdateable () : any;
matchesQuery (item:any,request:any) : any;
clientSideFetch (request:Object,baseResults:any[]) : any;
querySuperSet (argsSuper:any,argsSub:any) : any;
}
}
