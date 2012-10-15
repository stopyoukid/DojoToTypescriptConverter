/// <reference path="Object.d.ts" />
module dojox.storage{
export class Provider{
SUCCESS : String;
FAILED : String;
PENDING : String;
SIZE_NOT_AVAILABLE : String;
SIZE_NO_LIMIT : String;
DEFAULT_NAMESPACE : String;
onHideSettingsUI () : any;
initialize () : any;
isAvailable () : any;
put (key:String,value:any,resultsHandler:Function,namespace?:String) : any;
get (key:String,namespace?:String) : any;
hasKey (key:String,namespace?:String) : bool;
getKeys (namespace?:String) : any;
clear (namespace?:String) : any;
remove (key:String,namespace?:String) : any;
getNamespaces () : any;
isPermanent () : any;
getMaximumSize () : any;
putMultiple (keys:any[],values:any[],resultsHandler:Function,namespace?:String) : any;
getMultiple (keys:any[],namespace?:String) : any;
removeMultiple (keys:any[],namespace?:String) : any;
isValidKeyArray (keys:any) : any;
hasSettingsUI () : any;
showSettingsUI () : any;
hideSettingsUI () : any;
isValidKey (keyName:String) : any;
getResourceList () : any;
}
}
