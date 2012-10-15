module dojox.xmpp{
export class xmppSession{
roster : any[];
chatRegister : any[];
_iqId : Object;
session : Object;
processProtocolResponse (msg:any) : any;
messageHandler (msg:any) : any;
iqHandler (msg:any) : any;
presenceHandler (msg:any) : any;
saslHandler (msg:any) : any;
sendRestart () : any;
simpleMessageHandler (msg:any) : any;
registerChatInstance (chatInstance:any,message:any) : any;
iqSetHandler (msg:any) : any;
sendIqResult (iqId:any,to:any) : any;
rosterSetHandler (elem:any) : any;
presenceUpdate (msg:any) : any;
retrieveRoster () : any;
getRosterIndex (jid:any) : any;
createRosterEntry (elem:any) : any;
bindResource (hasSession:any) : any;
getNextIqId () : any;
presenceSubscriptionRequest (msg:any) : any;
dispatchPacket (msg:any,type:any,matchId:any) : any;
search (searchString:any,service:any,searchAttribute:any) : any;
_onSearchResults (msg:any) : any;
onLogin () : any;
onLoginFailure (msg:any) : any;
onBindSession (msg:any) : any;
onSearchResults (results:any) : any;
onRetrieveRoster (msg:any) : any;
onRosterUpdated () : any;
onSubscriptionRequest (req:any) : any;
onPresenceUpdate (p:any) : any;
onTransportTerminate (newState:any,oldState:any,message:any) : any;
onConnected () : any;
onTerminate (newState:any,oldState:any,message:any) : any;
onActive () : any;
onRegisterChatInstance (chatInstance:any,message:any) : any;
onRosterAdded (ri:any) : any;
onRosterRemoved (ri:any) : any;
onRosterChanged (ri:any,previousCopy:any) : any;
processXmppError (msg:any) : any;
sendStanzaError (stanzaType:any,to:any,id:any,errorType:any,condition:any,text:any) : any;
getBareJid (jid:any) : any;
getResourceFromJid (jid:any) : any;
}
}
