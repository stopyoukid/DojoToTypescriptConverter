/// <reference path="Object.d.ts" />
module dojox.cometd{
export class RestChannels{
acceptType : String;
subscriptions : Object;
subCallbacks : Object;
autoReconnectTime : number;
reloadDataOnReconnect : Object;
sendAsJson : bool;
url : String;
autoSubscribeRoot : String;
started : bool;
connectionId : any;
createdClientId : Object;
lastIndex : number;
connected : bool;
defaultInstance : Object;
absoluteUrl (baseUrl:any,relativeUrl:any) : any;
open () : any;
_send (method:any,args:any,data:any) : any;
subscribe (channel:String,args?:any) : any;
publish (channel:String,data:any) : any;
_processMessage (message:any) : any;
onprogress (xhr:any,data:any,contentType:any) : any;
get (channel:String,args?:any) : any;
receive (message:any) : any;
disconnected () : any;
unsubscribe (channel:String,args?:any) : any;
disconnect () : any;
}
}
