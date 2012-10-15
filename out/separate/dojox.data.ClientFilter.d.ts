module dojox.data{
export class ClientFilter{
cacheByDefault : bool;
_fetchCache : any[];
serverVersion : number;
onSet : Object;
onNew : Object;
onDelete : Object;
_updates : any[];
clearCache () : any;
updateResultSet (resultSet:any[],request:Object) : any;
querySuperSet (argsSuper:any,argsSub:any) : any;
cachingFetch (args:any) : any;
isUpdateable (request:Object) : any;
clientSideFetch (request:Object,baseResults:any[]) : any;
clientSidePaging (request:Object,baseResults:any[]) : any;
matchesQuery (item:any,request:any) : any;
makeComparator (sort:any) : any;
}
}
