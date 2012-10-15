/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class GearsStorageProvider extends dojox.storage.Provider {
TABLE_NAME : String;
initialized : Object;
_available : Object;
_storageReady : Object;
_statusHandler : any;
_initStorage () : any;
}
}
