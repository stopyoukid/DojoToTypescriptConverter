module dojox.xmpp{
export class ChatService{
state : String;
session : any;
uid : any;
_currentState : any;
chatid : Object;
recieveMessage (msg:any,initial:any) : any;
setSession (session:any) : any;
setState (state:any) : any;
invite (contact:any) : any;
sendMessage (msg:any) : any;
sendChatState (state:any) : any;
onNewMessage (msg:any) : any;
onInvite (contact:any) : any;
}
}
