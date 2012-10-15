/// <reference path="Object.d.ts" />
/// <reference path="dojo.data.api.Read.d.ts" />
module dojo.data.api{
export class Write extends dojo.data.api.Read {
newItem (keywordArgs?:Object,parentInfo?:Object) : any;
deleteItem (item:any) : bool;
setValue (item:any,attribute:String,value:any) : bool;
setValues (item:any,attribute:String,values:any[]) : bool;
unsetAttribute (item:any,attribute:String) : bool;
save (keywordArgs:any) : any;
revert () : bool;
isDirty (item?:any) : bool;
}
}
