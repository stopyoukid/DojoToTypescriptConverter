/// <reference path="Object.d.ts" />
module dojox.data{
export class CsvStore{
url : String;
label : String;
identifier : String;
separator : String;
urlPreventCache : bool;
_loadInProgress : bool;
_csvData : Object;
_getArrayOfArraysFromCsvFileContents : any;
_attributes : any[];
_dataArray : any[];
_arrayOfAllItems : any[];
_loadFinished : bool;
_queuedFetches : any[];
_attributeIndexes : Object;
_storeProp : String;
_idProp : String;
_features : Object;
_idMap : Object;
_assertIsItem (item:any) : any;
_getIndex (item:any) : any;
getValue (item:any,attribute:String,defaultValue?:any) : String;
getValues (item:any,attribute:String) : any[];
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:any) : bool;
containsValue (item:any,attribute:String,value:any) : bool;
_containsValue (item:any,attribute:String,value:any,regexp?:any) : bool;
isItem (something:any) : bool;
isItemLoaded (something:any) : bool;
loadItem (item:any) : any;
getFeatures () : Object;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
_fetchItems (keywordArgs:Object,findCallback:Function,errorCallback:Function) : any;
close (request:any) : any;
_splitLines (csvContent:any) : any;
_processData (data:String) : any;
_createItemFromIdentity (identity:String) : Object;
getIdentity (item:any) : any;
fetchItemByIdentity (keywordArgs:Object) : any;
getIdentityAttributes (item:any) : any;
_handleQueuedFetches () : any;
}
}
