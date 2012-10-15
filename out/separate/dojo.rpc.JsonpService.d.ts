/// <reference path="Object.d.ts" />
/// <reference path="dojo.rpc.RpcService.d.ts" />
module dojo.rpc{
export class JsonpService extends dojo.rpc.RpcService {
bind (method:String,parameters:any[],deferredRequestHandler:dojo.Deferred,url:any) : any;
createRequest (parameters:any) : any;
}
}
