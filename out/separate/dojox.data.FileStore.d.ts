/// <reference path="Object.d.ts" />
module dojox.data{
export class FileStore{
url : any;
_storeRef : String;
label : any;
_identifier : String;
_attributes : String;
pathSeparator : String;
options : any[];
failOk : bool;
urlPreventCache : String;
pathAsQueryParam : Object;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
getFeatures () : any;
getValue (item:any,attribute:any,defaultValue:any) : any;
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:any) : any;
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
isItemLoaded (item:any) : any;
loadItem (keywordArgs:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
containsValue (item:any,attribute:any,value:any) : any;
getValues (item:any,attribute:any) : any;
isItem (item:any) : any;
close (request:any) : any;
fetch (request:any) : any;
fetchItemByIdentity (keywordArgs:any) : any;
_processResult (data:any,request:any) : any;
_processItemArray (itemArray:any) : any;
_processItem (item:any) : any;
}
}
