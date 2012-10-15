/// <reference path="Object.d.ts" />
module dojox.data{
export class SnapLogicStore{
url : any;
_parameters : any;
_assertIsItem (item:any) : any;
_assertIsAttribute (attribute:any) : any;
getFeatures () : any;
getValue (item:any,attribute:any,defaultValue:any) : any;
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:any) : any;
isItemLoaded (item:any) : bool;
loadItem (keywordArgs:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
containsValue (item:any,attribute:any,value:any) : bool;
getValues (item:any,attribute:any) : any[];
isItem (item:any) : any;
close (request:any) : any;
_fetchHandler (request:Object) : any;
_partHandler (request:Object,part:String,response:Object) : any;
fetch (request:Object) : Object;
}
}
