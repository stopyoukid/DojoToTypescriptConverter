/// <reference path="Object.d.ts" />
module dojox.wire.ml{
export class RestHandler{
contentType : String;
handleAs : String;
bind (method:any,parameters:any,deferred:dojo.Deferred,url:any) : any;
_getUrl (method:String,parameters:any[],url:String) : String;
_getContent (method:String,parameters:any[]) : any;
_getResult (data:any) : any;
}
}
