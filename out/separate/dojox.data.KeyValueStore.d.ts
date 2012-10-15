module dojox.data{
export class KeyValueStore{
url : String;
data : String;
urlPreventCache : bool;
_loadInProgress : bool;
_keyValueString : Object;
_keyValueVar : Object;
_queuedFetches : any[];
_arrayOfAllItems : any[];
_loadFinished : Object;
_keyAttribute : String;
_valueAttribute : String;
_storeProp : String;
_features : Object;
_assertIsItem (item:any) : any;
_assertIsAttribute (item:any,attribute:String) : any;
getValue (item:any,attribute:any,defaultValue?:any) : any;
getValues (item:any,attribute:any) : any[];
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:any) : any;
containsValue (item:any,attribute:any,value:any) : bool;
_containsValue (item:any,attribute:String,value:any,regexp?:any) : bool;
isItem (something:any) : bool;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
getFeatures () : Object;
close (request:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
_fetchItems (keywordArgs:Object,findCallback:Function,errorCallback:Function) : any;
_handleQueuedFetches () : any;
_processData (data:any[]) : any;
_createItem (something:Object) : Object;
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
fetchItemByIdentity (keywordArgs:any) : any;
_finishFetchItemByIdentity (items:any[],request:any) : any;
}
}
