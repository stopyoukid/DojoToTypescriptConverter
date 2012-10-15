/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class AirEncryptedLocalStorageProvider extends dojox.storage.Provider {
_statusHandler : any;
_getItem (key:any) : any;
_setItem (key:any,value:any) : any;
_removeItem (key:any) : any;
}
}
