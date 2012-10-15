module dojox.data{
export class GoogleSearchStore{
_id : number;
_requestCount : number;
_googleUrl : String;
_storeRef : String;
_attributes : any[];
label : String;
_type : String;
urlPreventCache : bool;
_key : any;
_lang : any;
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
_format (item:any,name:any) : any;
fetch (request:any) : any;
_getSort () : any;
_processItem (item:any,data:any) : any;
_getItems (data:any) : any;
_createContent (query:any,callback:any,request:any) : any;
}
}
