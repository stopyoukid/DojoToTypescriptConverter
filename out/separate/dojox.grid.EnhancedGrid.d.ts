/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.DataGrid.d.ts" />
module dojox.grid{
export class EnhancedGrid extends dojox.grid.DataGrid {
plugins : Object;
pluginMgr : Object;
keepSelection : bool;
_pluginMgrClass : Object;
_nls : Object;
plugin (name:String) : any;
mixin (target:any,source:any) : any;
_storeLayerFetch (req:any) : any;
getCellByField (field:any) : any;
registerPlugin (clazz:any,props:any) : any;
}
}
