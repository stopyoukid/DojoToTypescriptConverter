/// <reference path="Object.d.ts" />
module dojox.grid.enhanced{
export class _PluginManager{
_connects : any[];
_store : any;
registry : Object;
startup () : any;
preInit () : any;
postInit () : any;
forEach (func:any,args:any) : any;
_parseProps (plugins:Object) : any;
_normalize (p:String,plugins:Object,registry:Object,loading:Object) : any;
_init (pre:bool) : any;
loadPlugin (name:String) : any;
_initView (view:any) : any;
pluginExisted (name:String) : any;
getPlugin (name:String) : any;
getPluginClazz (clazz:String) : any;
isFixedCell (cell:Object) : any;
destroy () : any;
registerPlugin (clazz:String,props:Object) : any;
}
}
