module dojox.storage{
export class manager{
available : Object;
currentProvider : Object;
providers : any[];
_initialized : Object;
_onLoadListeners : any[];
initialize () : any;
register (name:String,instance:Object) : any;
setProvider (storageClass:any) : any;
autodetect () : any;
isAvailable () : any;
addOnLoad (func:Function) : any;
removeOnLoad (func:any) : any;
isInitialized () : any;
supportsProvider (storageClass:String) : any;
getProvider () : any;
loaded () : any;
_fireLoaded () : any;
getResourceList () : any;
}
}
