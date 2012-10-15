module dojox.xmpp{
export class RosterService{
addRosterItem (jid:any,name:any,groups:any) : any;
updateRosterItem (jid:any,name:any,groups:any) : any;
verifyRoster (res:any) : any;
addRosterItemToGroup (jid:any,group:any) : any;
removeRosterGroup (group:any) : any;
renameRosterGroup (group:any,newGroup:any) : any;
removeRosterItemFromGroup (jid:any,group:any) : any;
rosterItemRenameGroup (jid:any,oldGroup:any,newGroup:any) : any;
renameRosterItem (jid:any,newName:any) : any;
removeRosterItem (jid:any) : any;
getAvatar (jid:any) : any;
publishAvatar (type:any,binval:any) : any;
onVerifyRoster (id:any) : any;
onVerifyRosterFailed (err:any) : any;
}
}
