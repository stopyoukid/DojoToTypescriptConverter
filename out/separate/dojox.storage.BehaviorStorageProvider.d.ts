/// <reference path="Object.d.ts" />
/// <reference path="dojox.storage.Provider.d.ts" />
module dojox.storage{
export class BehaviorStorageProvider extends dojox.storage.Provider {
store : Object;
storeName : String;
keys : Object;
initialized : Object;
_createStore () : any;
isValidNamespace (keyName:String) : any;
getFullKey (key:any,namespace:any) : any;
_beginsWith (haystack:String,needle:String) : any;
_assertIsValidNamespace (namespace:String) : any;
_assertIsValidKey (key:String) : any;
_addKey (key:any) : any;
_removeKey (key:any) : any;
}
}
