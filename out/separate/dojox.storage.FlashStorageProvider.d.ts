/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class FlashStorageProvider extends dojox.storage.Provider {
initialized : Object;
_available : bool;
_statusHandler : Object;
_flashReady : bool;
_pageReady : bool;
_allNamespaces : Object;
setFlushDelay (newDelay:any) : any;
getFlushDelay () : any;
flush (namespace:any) : any;
_destringify (results:any) : any;
_loaded () : any;
_onStatus (statusResult:any,key:any,namespace:any) : any;
}
}
