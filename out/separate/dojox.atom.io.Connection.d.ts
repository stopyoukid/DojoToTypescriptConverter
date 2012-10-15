/// <reference path="Object.d.ts" />
module dojox.atom.io{
export class Connection{
preventCache : bool;
alertsEnabled : bool;
sync : any;
getFeed (url:String,callback:Function,errorCallback:Function,scope:Object) : any;
getService (url:String,callback:Function,errorCallback:any,scope:any) : any;
getEntry (url:String,callback:Function,errorCallback:any,scope:any) : any;
_getXmlDoc (url:String,nodeName:any,newNode:any,namespace:any,callback:Function,errorCallback:any,scope:any) : any;
updateEntry (entry:Object,callback:Function,errorCallback:any,retrieveUpdated:bool,xmethod:bool,scope:Object) : any;
addEntry (entry:Object,url:any,callback:Function,errorCallback:any,retrieveEntry:bool,scope:Object) : any;
deleteEntry (entry:Object,callback:Function,errorCallback:any,xmethod:any,scope:any) : any;
}
}
