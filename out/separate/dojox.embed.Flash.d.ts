module dojox.embed{
export class Flash{
minSupported : number;
available : number;
supported : bool;
minimumRequired : any;
version : Object;
initialized : bool;
minimumVersion : Object;
id : Object;
movie : Object;
domNode : Object;
onInitialize () : any;
__ie_markup__ (kwArgs:any) : any;
proxy (obj:any,methods:any[]) : any;
onReady (movie:any) : any;
onLoad (movie:any) : any;
onError (msg:any) : any;
_onload () : any;
destroy () : any;
byId (movieName:String,doc:Object) : any;
place (kwArgs:any,node:any) : any;
}
}
