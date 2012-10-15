module dojox.xmpp{
export class UserService{
session : any;
getPersonalProfile () : any;
setPersonalProfile (props:any) : any;
_onSetPersonalProfile (response:any) : any;
onSetPersonalProfile (id:any) : any;
onSetPersonalProfileFailure (err:any) : any;
_onGetPersonalProfile (profile:any) : any;
onGetPersonalProfile (profile:any) : any;
onGetPersonalProfileFailure (err:any) : any;
}
}
