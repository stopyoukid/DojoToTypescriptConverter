/// <reference path="Object.d.ts" />
module dojox.data{
export class OpmlStore{
label : String;
url : String;
urlPreventCache : bool;
_loadFinished : bool;
_xmlData : Object;
_metadataNodes : Object;
_loadInProgress : bool;
_opmlData : Object;
_queuedFetches : any[];
_arrayOfTopLevelItems : any[];
_arrayOfAllItems : any[];
_identityMap : Object;
_identCount : number;
_idProp : String;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
_removeChildNodesThatAreNotElementNodes (node:HTMLElement,recursive:bool) : any;
_processRawXmlTree (rawXmlTree:any) : any;
_checkChildNodes (node:HTMLElement) : any;
_getItemsArray (queryOptions?:any) : any;
getValue (item:any,attribute:String,defaultValue?:any) : Object;
getValues (item:any,attribute:String) : any[];
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:String) : bool;
containsValue (item:any,attribute:String,value:any) : bool;
_containsValue (item:any,attribute:String,value:any,regexp?:any) : bool;
isItem (something:any) : any;
isItemLoaded (something:any) : bool;
loadItem (item:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any[];
_fetchItems (keywordArgs:Object,findCallback:Function,errorCallback:Function) : any;
getFeatures () : Object;
getIdentity (item:any) : any;
fetchItemByIdentity (keywordArgs:Object) : any;
getIdentityAttributes (item:any) : any;
_handleQueuedFetches () : any;
close (request:any) : any;
}
}
