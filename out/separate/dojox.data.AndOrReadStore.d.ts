/// <reference path="Object.d.ts" />
module dojox.data{
export class AndOrReadStore{
url : String;
_ccUrl : String;
data : Object;
typeMap : Object;
clearOnClose : Object;
urlPreventCache : bool;
hierarchical : Object;
_jsonFileUrl : any;
_jsonData : Object;
_loadInProgress : bool;
_loadFinished : bool;
_queuedFetches : any[];
_arrayOfAllItems : any[];
_arrayOfTopLevelItems : any[];
_itemsByIdentity : Object;
_labelAttr : any;
_features : Object;
_storeRefPropName : String;
_itemNumPropName : String;
_rootItemPropName : String;
_reverseRefMap : String;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
getValue (item:any,attribute:any,defaultValue?:any) : any;
getValues (item:any,attribute:any) : any[];
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:any) : any;
containsValue (item:any,attribute:any,value:any) : bool;
_containsValue (item:any,attribute:any,value:any,regexp?:any) : bool;
isItem (something:any) : bool;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
getFeatures () : Object;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
_fetchItems (keywordArgs:Object,findCallback:Function,errorCallback:Function) : any;
_handleQueuedFetches () : any;
_getItemsArray (queryOptions?:any) : any;
close (request:any) : any;
_getItemsFromLoadedData (dataObject:Object) : any;
_addReferenceToMap (refItem:any,parentItem:any,attribute:String) : any;
getIdentity (item:any) : any;
fetchItemByIdentity (keywordArgs:Object) : any;
_getItemByIdentity (identity:Object) : Object;
getIdentityAttributes (item:any) : any;
_forceLoad () : any;
}
}
