/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.wire.ml{
export class Service extends dijit._Widget {
url : any;
serviceUrl : any;
serviceType : any;
handlerClass : any;
preventCache : Object;
handler : Object;
_createHandler () : any;
callMethod (method:any,parameters:any) : any;
}
}
