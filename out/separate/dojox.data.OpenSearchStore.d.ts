module dojox.data{
export class OpenSearchStore{
url : String;
itemPath : String;
_storeRef : String;
iframeElement : Object;
urlPreventCache : bool;
ATOM_CONTENT_TYPE : number;
ATOM_CONTENT_TYPE_STRING : String;
RSS_CONTENT_TYPE : number;
RSS_CONTENT_TYPE_STRING : String;
XML_CONTENT_TYPE : number;
XML_CONTENT_TYPE_STRING : String;
contentType : any;
label : any;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
getFeatures () : any;
getValue (item:any,attribute:any,defaultValue:any) : any;
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:any) : any;
isItemLoaded (item:any) : any;
loadItem (keywordArgs:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
containsValue (item:any,attribute:any,value:any) : any;
getValues (item:any,attribute:any) : any;
isItem (item:any) : any;
close (request:any) : any;
process (data:any) : any;
processItem (item:any,attribute:any) : any;
_createSearchUrl (request:any) : any;
_fetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
_processOSDxml (data:any) : any;
_processItemxml (item:any,attribute:any) : any;
_processOSDatom (data:any) : any;
_processItematom (item:any,attribute:any) : any;
_processOSDrss (data:any) : any;
_processItemrss (item:any,attribute:any) : any;
_processOSDfeed (data:any,type:any) : any;
_processItemfeed (item:any,attribute:any,type:any) : any;
_getNodeXml (node:any,skipFirst:any) : any;
_processOsdd (doc:any) : any;
}
}
