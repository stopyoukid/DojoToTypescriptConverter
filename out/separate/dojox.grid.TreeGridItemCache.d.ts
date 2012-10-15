/// <reference path="Object.d.ts" />
module dojox.grid{
export class TreeGridItemCache{
unInit : Object;
rowsPerPage : any;
_buildCache (size:any) : any;
cacheItem (rowIdx:number,cacheObj:any) : any;
insertItem (rowIdx:number,cacheObj:any) : any;
initCache (size:any) : any;
getItemByRowIndex (rowIdx:number) : any;
getItemByTreePath (treePath:any) : any;
getTreePathByRowIndex (rowIdx:number) : any;
getExpandoStatusByRowIndex (rowIdx:number) : any;
getInfoByItem (item:any) : any;
updateCache (rowIdx:number,cacheObj:any) : any;
deleteItem (rowIdx:any) : any;
cleanChildren (rowIdx:any) : any;
emptyCache () : any;
cleanupCache () : any;
}
}
