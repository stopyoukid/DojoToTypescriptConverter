module dojox.cometd{
export class longPollTransportFormEncoded{
_connectionType : String;
_initialized : bool;
_poll : Object;
check (types:any,version:any,xdomain:any) : any;
tunnelInit () : any;
tunnelCollapse () : any;
_connect () : any;
deliver (message:any) : any;
openTunnelWith (content:any,url:any) : any;
sendMessages (messages:any) : any;
startup (handshakeData:any) : any;
disconnect () : any;
cancelConnect () : any;
}
}
