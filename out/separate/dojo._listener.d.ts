/// <reference path="Object.d.ts" />
module dojo._listener{
export function getDispatcher () : any;
export function add (source:Object,method:String,listener:Function) : any;
export function remove (source:Object,method:String,handle:any) : any;
}
