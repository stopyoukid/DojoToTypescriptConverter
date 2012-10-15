module dojox.data{
export class HtmlStore{
url : any;
dataId : any;
trimWhitespace : any;
urlPreventCache : bool;
fetchOnCreate : bool;
_rootNode : Object;
_headings : any[];
_indexItems () : any;
_getHeadings () : any;
_getAllItems () : any[];
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:String) : number;
getValue (item:any,attribute:any,defaultValue?:any) : any;
getValues (item:any,attribute:any) : any[];
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:any) : any;
containsValue (item:any,attribute:any,value:any) : bool;
_containsValue (item:any,attribute:any,value:any,regexp?:any) : bool;
isItem (something:any) : any;
isItemLoaded (something:any) : any;
loadItem (keywordArgs:Object) : any;
_fetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
_finishFetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
getFeatures () : any;
close (request:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
fetchItemByIdentity (keywordArgs:any) : any;
}
}
