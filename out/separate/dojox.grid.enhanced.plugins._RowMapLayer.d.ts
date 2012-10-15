/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins._StoreLayer.d.ts" />
module dojox.grid.enhanced.plugins{
export class _RowMapLayer extends dojox.grid.enhanced.plugins._StoreLayer {
_map : Object;
_revMap : Object;
_oldOnDelete : any;
_oldSort : any;
setMapping (mapping:Object) : any;
clearMapping () : any;
_onDelete (item:any) : any;
_fetch (userRequest:any) : any;
_getRowArrays (rows:any) : any;
_subFetch (userRequest:any,rowArrays:any,index:any,result:any,map:any,oldOnComplete:any,start:any,count:any) : any;
}
}
