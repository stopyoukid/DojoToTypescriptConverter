/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class CookieStorageProvider extends dojox.storage.Provider {
store : Object;
cookieName : String;
storageLife : number;
initialized : Object;
isValidNamespace (keyName:String) : any;
getFullKey (key:any,namespace:any) : any;
_save () : any;
_beginsWith (haystack:String,needle:String) : any;
_assertIsValidNamespace (namespace:String) : any;
_assertIsValidKey (key:String) : any;
}
}
