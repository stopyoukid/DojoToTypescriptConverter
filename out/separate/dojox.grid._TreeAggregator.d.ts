/// <reference path="Object.d.ts" />
module dojox.grid{
export class _TreeAggregator{
cells : any[];
grid : Object;
childFields : any[];
_cacheValue (cache:any,id:any,value:any) : any;
clearSubtotalCache () : any;
cnt (cell:any,level:any,item:any) : any;
sum (cell:any,level:any,item:any) : any;
value (cell:any,level:any,item:any) : any;
getForCell (cell:any,level:any,item:any,type:any) : any;
}
}
