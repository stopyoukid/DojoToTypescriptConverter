/// <reference path="Object.d.ts" />
module dojox.grid.enhanced.plugins{
export class _StoreLayer{
_store : any;
_originFetch : Function;
__enabled : bool;
tags : any[];
layerFuncName : String;
_funcName : any;
__name : any;
initialize (store:any) : any;
uninitialize (store:any) : any;
invalidate () : any;
_wrap (store:any,funcName:any,layerFuncName:any,nextLayer:any) : any;
_unwrap (nextLayer:any) : any;
enabled (toEnable?:bool) : bool;
name () : any;
originFetch () : any;
}
}
