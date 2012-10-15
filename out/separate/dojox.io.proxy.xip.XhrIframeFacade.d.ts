/// <reference path="Object.d.ts" />
module dojox.io.proxy.xip{
export class XhrIframeFacade{
_requestHeaders : Object;
_allResponseHeaders : Object;
_responseHeaders : Object;
_method : Object;
_uri : Object;
_bodyData : Object;
responseText : Object;
responseXML : Object;
status : Object;
statusText : Object;
readyState : number;
_ifpServerUrl : any;
_stateId : Object;
setRequestHeader (header:String,value:String) : any;
abort () : any;
getAllResponseHeaders () : String;
getResponseHeader (header:String) : String;
}
}
