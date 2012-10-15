/// <reference path="Object.d.ts" />
module dojox.data{
export class PicasaStore{
_picasaUrl : String;
_storeRef : String;
label : String;
urlPreventCache : bool;
maxResults : any;
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
_fetchItems (request:any,fetchHandler:any,errorHandler:any) : any;
_processPicasaData (data:any) : any;
_unescapeHtml (str:String) : any;
}
}
