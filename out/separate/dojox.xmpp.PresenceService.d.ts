/// <reference path="Object.d.ts" />
module dojox.xmpp{
export class PresenceService{
avatarHash : Object;
isInvisible : bool;
session : any;
restrictedContactjids : Object;
publish (presence:any) : any;
sendAvatarHash (avatarHash:any) : any;
_setPresence () : any;
toggleBlockContact (jid:any) : any;
toggleContactInvisiblity (jid:any) : any;
_createRestrictedJid () : any;
_updateRestricted () : any;
_setVisible () : any;
_setInvisible () : any;
_manageSubscriptions (contact:any,type:any) : any;
subscribe (contact:any) : any;
approveSubscription (contact:any) : any;
unsubscribe (contact:any) : any;
declineSubscription (contact:any) : any;
cancelSubscription (contact:any) : any;
}
}
