/// <reference path="Object.d.ts" />
module dojo.data.api{
export class Read{
getValue (item:any,attribute:any,defaultValue?:any) : any;
getValues (item:any,attribute:any) : any;
getAttributes (item:any) : any[];
hasAttribute (item:any,attribute:any) : bool;
containsValue (item:any,attribute:any,value:any) : bool;
isItem (something:any) : bool;
isItemLoaded (something:any) : bool;
loadItem (keywordArgs:any) : any;
fetch (keywordArgs:Object) : any;
getFeatures () : any;
close (request:any) : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any;
}
}
