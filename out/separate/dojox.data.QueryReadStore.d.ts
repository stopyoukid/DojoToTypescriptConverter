module dojox.data{
export class QueryReadStore{
url : String;
requestMethod : String;
_className : String;
_items : any[];
_lastServerQuery : Object;
_numRows : number;
lastRequestHash : String;
doClientPaging : bool;
doClientSorting : bool;
_itemsByIdentity : Object;
_identifier : Object;
_features : Object;
_labelAttr : String;
getValue (item:any,attribute:any,defaultValue?:any) : any;
getValues (item:any,attribute:any) : any;
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:any) : any;
containsValue (item:any,attribute:any,value:any) : any;
isItem (something:any) : any;
isItemLoaded (something:any) : any;
loadItem (args:any) : any;
fetch (request?:Object) : Object;
getFeatures () : any;
close (request:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
_xhrFetchHandler (data:any,request:any,fetchHandler:any,errorHandler:any) : any;
_fetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
_filterResponse (data:any) : any;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
fetchItemByIdentity (keywordArgs:Object) : any;
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
}
}
