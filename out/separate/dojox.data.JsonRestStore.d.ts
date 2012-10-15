/// <reference path="Object.d.ts" />
/// <reference path="dojox.data.ServiceStore.d.ts" />
module dojox.data{
export class JsonRestStore extends dojox.data.ServiceStore {
loadReferencedSchema : Object;
idAsRef : bool;
referenceIntegrity : Object;
target : String;
allowNoTrailingSlash : bool;
serverVersion : any;
newItem (data:any,parentInfo:any) : any;
deleteItem (item:any) : any;
changing (item:any,_deleting:any) : any;
setValue (item:any,attribute:any,value:any) : any;
setValues (item:any,attribute:any,values:any) : any;
unsetAttribute (item:any,attribute:any) : any;
save (kwArgs:any) : any;
revert (kwArgs:any) : any;
isDirty (item:any) : any;
getConstructor () : any;
onSet () : any;
onNew () : any;
onDelete () : any;
getParent (item:any) : any;
_constructor (data:any) : any;
getStore (options:any,Class:any) : any;
}
}
