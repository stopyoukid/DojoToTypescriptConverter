/// <reference path="Object.d.ts" />
module dojox.cometd{
export class callbackPollTransport{
_connectionType : String;
tunnelCollapse : any;
_connect : any;
deliver : any;
check (types:any,version:any,xdomain:any) : any;
tunnelInit () : any;
openTunnelWith (content:any,url:any) : any;
sendMessages (messages:any[]) : any;
startup (handshakeData:any) : any;
disconnect () : any;
cancelConnect () : any;
}
}
