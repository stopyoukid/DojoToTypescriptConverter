/// <reference path="Object.d.ts" />
module dijit{
export class WidgetSet{
_hash : Object;
length : number;
add (widget:any) : any;
remove (id:String) : any;
forEach (func:Function,thisObj?:Object) : any;
filter (filter:Function,thisObj?:Object) : any;
byId (id:String) : any;
byClass (cls:String) : any;
toArray () : any;
map (func:Function,thisObj?:Object) : any[];
every (func:Function,thisObj?:Object) : bool;
some (func:Function,thisObj?:Object) : bool;
}
}
