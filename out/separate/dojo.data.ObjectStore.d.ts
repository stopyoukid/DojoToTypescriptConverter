/// <reference path="Object.d.ts" />
module dojo.data{
export class ObjectStore{
objectStore : Object;
labelProperty : String;
getValue (item:Object,property:String,defaultValue?:any) : any;
getValues (item:any,property:String) : any;
getAttributes (item:any) : any;
hasAttribute (item:any,attribute:String) : any;
containsValue (item:any,attribute:String,value:any) : any;
isItem (item:any) : any;
isItemLoaded (item:any) : any;
loadItem (args:any) : any;
close (request:any) : any;
fetch (args:any) : any;
getFeatures () : any;
getLabel (item:any) : any;
getLabelAttributes (item:any) : any[];
getIdentity (item:any) : any;
getIdentityAttributes (item:any) : any;
fetchItemByIdentity (args:any) : any;
newItem (data:any,parentInfo:any) : any;
deleteItem (item:any) : any;
setValue (item:any,attribute:any,value:any) : any;
setValues (item:any,attribute:any,values:any) : any;
unsetAttribute (item:any,attribute:any) : any;
changing (object:any,_deleting:any) : any;
save (kwArgs:any) : any;
revert (kwArgs:any) : any;
isDirty (item:any) : any;
onSet () : any;
onNew () : any;
onDelete () : any;
}
}
