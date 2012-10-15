/// <reference path="Object.d.ts" />
module dojox.data{
export class CdfStore{
identity : String;
url : String;
xmlStr : String;
data : Object;
label : String;
mode : any;
cdfDoc : Object;
_modifiedItems : Object;
getValue (item:any,property:String,defaultValue?:any) : any;
getValues (item:any,property:String) : any;
getAttributes (item:any) : any[];
hasAttribute (item:any,property:String) : bool;
hasProperty (item:any,property:String) : any;
containsValue (item:any,property:String,value:any) : bool;
isItem (something:any) : any;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
getFeatures () : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
fetch (request?:Object) : Object;
_loadCDF () : any;
_getItems (cdfDoc:any,request:Object) : any;
close (request:any) : any;
newItem (keywordArgs?:any,parentInfo?:any) : any;
deleteItem (item:any) : bool;
setValue (item:any,property:String,value:any) : bool;
setValues (item:any,property:String,values:any[]) : any;
unsetAttribute (item:any,property:String) : bool;
revert () : bool;
isDirty (item:any) : bool;
_makeDirty (item:any) : any;
_makeXmlString (obj:any) : any;
getIdentity (item:any) : String;
getIdentityAttributes (item:any) : any[];
fetchItemByIdentity (args:Object) : any;
byId (args:Object) : any;
}
}
