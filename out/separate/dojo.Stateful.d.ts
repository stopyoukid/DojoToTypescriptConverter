/// <reference path="Object.d.ts" />
module dojo{
export class Stateful{
postscript (mixin:any) : any;
get (name:String) : any;
set (name:String,value:Object) : any;
watch (name?:String,callback?:Function) : any;
_watchCallbacks (name:any,oldValue:any,value:any,ignoreCatchall:any) : any;
}
}
