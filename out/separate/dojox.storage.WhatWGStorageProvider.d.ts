/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class WhatWGStorageProvider extends dojox.storage.Provider {
initialized : Object;
_domain : Object;
_available : Object;
_statusHandler : Object;
_allNamespaces : Object;
_storageEventListener : Object;
getFullKey (key:any,namespace:any) : any;
}
}
