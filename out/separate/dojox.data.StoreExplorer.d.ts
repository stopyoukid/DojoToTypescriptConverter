/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.BorderContainer.d.ts" />
module dojox.data{
export class StoreExplorer extends dijit.layout.BorderContainer {
store : Object;
columnWidth : String;
stringQueries : bool;
showAllColumns : bool;
tree : Object;
gridOnFetchComplete : any;
queryOptions : Object;
setItemName (name:any) : any;
setQuery (query:any,options:any) : any;
_formatCell (value:any) : any;
setStore (store:any) : any;
createNew () : any;
}
}
