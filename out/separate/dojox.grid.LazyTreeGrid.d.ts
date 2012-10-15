/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.TreeGrid.d.ts" />
module dojox.grid{
export class LazyTreeGrid extends dojox.grid.TreeGrid {
colSpans : Object;
reqQueueIndex : number;
expandoRowIndex : any;
stateChangeNode : Object;
_cleanup () : any;
_fetchItems (idx:any,onBegin:any,onComplete:any,onError:any) : any;
expandoFetch (rowIndex:any,open:any) : any;
_onExpandoComplete (childItems:any,request:any,size:any) : any;
toggleLoadingClass (flag:any) : any;
}
}
