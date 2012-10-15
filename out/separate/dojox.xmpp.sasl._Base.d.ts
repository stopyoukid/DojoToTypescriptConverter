/// <reference path="Object.d.ts" />
module dojox.xmpp.sasl{
export class _Base{
mechanism : Object;
closeAuthTag : Object;
first_challenge : Object;
session : any;
startAuth () : any;
appendToAuth (auth:any) : any;
onChallenge (msg:any) : any;
onFirstChallenge () : any;
onSecondChallenge () : any;
onSuccess () : any;
}
}
