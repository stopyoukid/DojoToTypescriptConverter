/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class LocalStorageProvider extends dojox.storage.Provider {
store : Object;
initialized : Object;
isValidNamespace (keyName:String) : any;
getFullKey (key:any,namespace:any) : any;
_beginsWith (haystack:String,needle:String) : any;
_assertIsValidNamespace (namespace:String) : any;
_assertIsValidKey (key:String) : any;
}
}
