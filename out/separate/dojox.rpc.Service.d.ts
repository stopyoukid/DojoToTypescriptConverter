/// <reference path="Object.d.ts" />
module dojox.rpc{
export class Service{
_smd : any;
_options : Object;
_requestId : number;
_nextId : number;
_generateService (serviceName:any,method:any) : any;
_getRequest (method:any,args:any) : any;
_executeMethod (method:any) : any;
}
}
