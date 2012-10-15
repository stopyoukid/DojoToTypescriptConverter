/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid._View.d.ts" />
module dojox.grid{
export class _TreeView extends dojox.grid._View {
_expandos : Object;
grid : any;
_cleanupExpandoCache (index:any,identity:any,item:any) : any;
}
}
