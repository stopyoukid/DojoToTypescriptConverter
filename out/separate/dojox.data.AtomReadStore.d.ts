/// <reference path="Object.d.ts" />
module dojox.data{
export class AtomReadStore{
url : any;
label : Object;
sendQuery : any;
unescapeHTML : any;
urlPreventCache : bool;
_feedMetaData : Object;
_items : any;
rewriteUrl : any;
getValue (item:any,attribute:String,defaultValue?:any) : any;
getValues (item:any,attribute:String) : any;
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:String) : bool;
containsValue (item:any,attribute:String,value:any) : bool;
isItem (something:any) : any;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
getFeatures () : any[];
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
getFeedValue (attribute:any,defaultValue:any) : any;
getFeedValues (attribute:any,defaultValue:any) : any;
_initItem (item:any) : any;
_fetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
_getFetchUrl (request:any) : any;
_getItems (document:any,request:any) : any;
close (request:any) : any;
_getItem (element:any) : any;
_parseItem (item:any) : any;
_unescapeHTML (text:any) : any;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
}
}
