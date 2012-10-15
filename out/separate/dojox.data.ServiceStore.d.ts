/// <reference path="Object.d.ts" />
module dojox.data{
export class ServiceStore{
service : Object;
schema : Object;
idAttribute : Object;
labelAttribute : String;
syncMode : bool;
estimateCountFactor : number;
loadLazyValues : Object;
_currentId : number;
byId : any;
_index : Object;
getSchema () : any;
getValue (item:Object,property:String,defaultValue?:any) : any;
getValues (item:any,property:String) : any;
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:String) : any;
containsValue (item:any,attribute:String,value:any) : any;
isItem (item:any) : any;
isItemLoaded (item:any) : any;
loadItem (args:any) : any;
_processResults (results:any,deferred:any) : any;
close (request:any) : any;
fetch (args:any) : any;
_doQuery (args:any) : any;
getFeatures () : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
fetchItemByIdentity (args:any) : any;
}
}
