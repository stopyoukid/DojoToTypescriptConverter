/// <reference path="Object.d.ts" />
module dojo._ie_listener{
export var handlers : any[];
export function add (source:Object,method:String,listener:Function) : any;
export function remove (source:Object,method:String,handle:any) : any;
}
