module dojox.data{
export class AppStore{
url : any;
urlPreventCache : any;
xmethod : bool;
_atomIO : Object;
_feed : Object;
_requests : any[];
_processing : Object;
_updates : Object;
_adds : Object;
_deletes : Object;
_setFeed (feed:any,data:any) : any;
_getAllItems () : any[];
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:String) : any;
_addUpdate (update:Object) : any;
getValue (item:any,attribute:any,defaultValue?:any) : any;
getValues (item:any,attribute:any) : any[];
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:any) : any;
containsValue (item:any,attribute:any,value:any) : bool;
_containsValue (item:any,attribute:any,value:any,regexp?:any,trim?:bool) : bool;
isItem (something:any) : bool;
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
newItem (keywordArgs?:Object) : any;
deleteItem (item:any) : any;
setValue (item:any,attribute:String,value:any) : any;
setValues (item:any,attribute:String,values:any[]) : any;
unsetAttribute (item:any,attribute:String) : bool;
save (keywordArgs:any) : any;
revert () : any;
isDirty (item?:any) : bool;
}
}
