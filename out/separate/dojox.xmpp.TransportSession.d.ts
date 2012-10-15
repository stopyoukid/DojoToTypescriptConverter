/// <reference path="Object.d.ts" />
module dojox.xmpp{
export class TransportSession{
rid : number;
hold : number;
polling : number;
secure : bool;
wait : number;
lang : String;
submitContentType : String;
serviceUrl : String;
defaultResource : String;
domain : String;
sendTimeout : number;
useScriptSrcTransport : bool;
keepAliveTimer : Object;
state : String;
transmitState : String;
protocolPacketQueue : any[];
outboundQueue : any[];
outboundRequests : Object;
inboundQueue : any[];
deferredRequests : Object;
matchTypeIdAttribute : Object;
transportIframes : any[];
_sendLogin () : any;
_sendRestart () : any;
processScriptSrc (msg:any,rid:any) : any;
close (protocolMsg:any) : any;
redispatchPacket (rid:any) : any;
addToOutboundQueue (msg:any,rid:any) : any;
removeFromOutboundQueue (rid:any) : any;
processInboundQueue () : any;
addToInboundQueue (doc:any,rid:any) : any;
processProtocolResponse (msg:any,rid:any) : any;
isTerminated () : any;
onTerminate (newState:any,oldState:any,message:any) : any;
onProcessProtocolResponse (msg:any) : any;
onReady (newState:any,oldState:any) : any;
}
}
