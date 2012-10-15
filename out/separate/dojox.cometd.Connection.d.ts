/// <reference path="Object.d.ts" />
module dojox.cometd{
export class Connection{
url : Object;
_isXD : bool;
_props : any;
_messageQ : any[];
_subscriptions : any[];
_initialized : bool;
_status : String;
batch : number;
_deferredSubscribes : any;
_handshook : Object;
_backoffInterval : number;
handshakeReturn : any;
clientId : any;
lastMessage : any;
state () : any;
init (root:String,props?:Object,bargs?:Object) : any;
publish (channel:String,data:Object,props?:Object) : any;
subscribe (channel:String,objOrFunc:Object,funcName:String,props?:Object) : any;
unsubscribe (channel:String,objOrFunc?:Object,funcName?:String,props?:Object) : any;
disconnect () : any;
subscribed (channel:String,message:Object) : any;
unsubscribed (channel:String,message:Object) : any;
tunnelInit (childLocation:any,childDomain:any) : any;
tunnelCollapse () : any;
_backoff () : any;
_backon () : any;
_interval () : any;
_publishMeta (action:any,successful:any,props:any) : any;
_finishInit (data:any) : any;
_extendIn (message:any) : any;
_extendOut (message:any) : any;
deliver (messages:any) : any;
_deliver (message:any) : any;
_sendMessage (message:any) : any;
startBatch () : any;
endBatch () : any;
_onUnload () : any;
_connectTimeout () : any;
}
}
