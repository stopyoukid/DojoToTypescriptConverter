/// <reference path="Object.d.ts" />
module dojo.rpc{
export class RpcService{
strictArgChecks : Object;
serviceUrl : Object;
required : any;
smd : any;
timeout : number;
parseResults (obj:Object) : any;
errorCallback (deferredRequestHandler:any) : any;
resultCallback (deferredRequestHandler:any) : any;
generateMethod (method:String,parameters:any[],url:String) : any;
processSmd (object:any) : any;
}
}
