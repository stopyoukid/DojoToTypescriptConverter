/// <reference path="Object.d.ts" />
module dojox.data{
export class XmlStore{
url : any;
rootItem : any;
keyAttribute : any;
label : Object;
sendQuery : any;
attributeMap : Object;
urlPreventCache : any;
_newItems : any[];
_deletedItems : any[];
_modifiedItems : any[];
_attributeMap : Object;
getValue (item:any,attribute:String,defaultValue?:any) : any;
getValues (item:any,attribute:String) : any[];
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:String) : bool;
containsValue (item:any,attribute:String,value:any) : bool;
isItem (something:any) : any;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
getFeatures () : any[];
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
_fetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
_getFetchUrl (request:any) : any;
_getItems (document:any,request:any) : any;
_flattenNodes (nodes:any) : any;
close (request:any) : any;
newItem (keywordArgs?:any,parentInfo?:any) : any;
deleteItem (item:any) : bool;
setValue (item:any,attribute:String,value:any) : bool;
setValues (item:any,attribute:String,values:any[]) : bool;
unsetAttribute (item:any,attribute:String) : bool;
save (keywordArgs:any) : any;
revert () : bool;
isDirty (item?:any) : any;
_saveItem (item:any,keywordArgs:any,method:any) : any;
_getPostUrl (item:any) : String;
_getPutUrl (item:any) : String;
_getDeleteUrl (item:any) : String;
_getPostContent (item:any) : any;
_getPutContent (item:any) : any;
_getAttribute (tagName:any,attribute:any) : any;
_getItem (element:any) : any;
_getItemIndex (items:any,element:any) : number;
_backupItem (item:any) : any;
_restoreItems (items:any) : any;
_forgetItem (item:any) : any;
_getDocument (element:any) : any;
_getRootElement (element:any) : any;
_getXPath (element:any) : String;
getIdentity (item:any) : String;
getIdentityAttributes (item:any) : any;
fetchItemByIdentity (keywordArgs:any) : any;
}
}
