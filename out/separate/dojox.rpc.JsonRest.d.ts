/// <reference path="Object.d.ts" />
module dojox.rpc.JsonRest{
export var serviceClass : any;
export var conflictDateHeader : String;
export var services : Object;
export var schemas : Object;
export function commit (kwArgs:any) : any;
export function getDirtyObjects () : any;
export function revert (service:any) : any;
export function changing (object:any,_deleting:any) : any;
export function deleteObject (object:any) : any;
export function getConstructor (service:Function,schema:any) : any;
export function getConstructor (service:String,schema:any) : any;
export function fetch (absoluteId:any) : any;
export function getIdAttribute (service:any) : any;
export function getServiceAndId (absoluteId:String) : any;
export function registerService (service:Function,servicePath:String,schema?:Object) : any;
export function byId (service:any,id:any) : any;
export function query (service:any,id:any,args:any) : any;
export function _loader (callback:any) : any;
export function isDirty (item:any) : any;
}
