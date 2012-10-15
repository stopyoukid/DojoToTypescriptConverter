/// <reference path="Object.d.ts" />
/// <reference path="dojo.data.ItemFileReadStore.d.ts" />
module dojo.data{
export class ItemFileWriteStore extends dojo.data.ItemFileReadStore {
referenceIntegrity : bool;
_saveInProgress : bool;
_pending : Object;
_assert (condition:bool) : any;
_getIdentifierAttribute () : any;
newItem (keywordArgs?:Object,parentInfo?:Object) : any;
_removeArrayElement (array:any[],element:any) : any;
deleteItem (item:any) : any;
setValue (item:any,attribute:any,value:any) : bool;
setValues (item:any,attribute:any,values:any[]) : bool;
unsetAttribute (item:any,attribute:any) : any;
_setValueOrValues (item:any,attribute:any,newValueOrValues:any,callOnSet?:bool) : bool;
_removeReferenceFromMap (refItem:any,parentItem:any,attribute:String) : any;
_dumpReferenceMap () : any;
_getValueOrValues (item:any,attribute:any) : any;
_flatten (value:any) : any;
_getNewFileContentString () : any;
_isEmpty (something:any) : bool;
save (keywordArgs:any) : any;
revert () : bool;
isDirty (item?:any) : bool;
onSet (item:any,attribute:any,oldValue:any,newValue:any) : any;
onNew (newItem:any,parentInfo?:any) : any;
onDelete (deletedItem:any) : any;
}
}
