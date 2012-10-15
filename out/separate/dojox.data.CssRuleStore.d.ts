/// <reference path="Object.d.ts" />
module dojox.data{
export class CssRuleStore{
_storeRef : String;
_labelAttribute : String;
_cache : Object;
_browserMap : Object;
_cName : String;
context : Object;
_pending : any[];
_allItems : Object;
_waiting : any[];
gatherHandle : Object;
setContext (context:any[]) : any;
getFeatures () : any;
isItem (item:any) : any;
hasAttribute (item:any,attribute:any) : any;
getAttributes (item:any) : any;
getValue (item:any,attribute:any,defaultValue:any) : any;
getValues (item:any,attribute:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
containsValue (item:any,attribute:any,value:any) : bool;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
fetch (request:any) : any;
_fetch (request:any) : any;
_handleRule (rule:any,styleSheet:any,href:any) : any;
_handleReturn () : any;
_handleFetchReturn (request:any) : any;
close () : any;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
_containsValue (item:any,attribute:any,value:any,regexp?:any) : bool;
}
}
