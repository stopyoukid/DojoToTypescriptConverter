/// <reference path="Object.d.ts" />
/// <reference path="dojo.rpc.RpcService.d.ts" />
module dojo.rpc{
export class JsonService extends dojo.rpc.RpcService {
bustCache : bool;
contentType : String;
lastSubmissionId : number;
callRemote (method:String,params:any[]) : any;
bind (method:String,parameters:any[],deferredRequestHandler:dojo.Deferred,url:any) : any;
createRequest (method:String,params:any[]) : any;
}
}
