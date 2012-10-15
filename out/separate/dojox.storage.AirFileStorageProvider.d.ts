/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class AirFileStorageProvider extends dojox.storage.Provider {
initialized : Object;
_storagePath : String;
_statusHandler : any;
}
}
