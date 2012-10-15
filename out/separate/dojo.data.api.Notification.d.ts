/// <reference path="Object.d.ts" />
/// <reference path="dojo.data.api.Read.d.ts" />
module dojo.data.api{
export class Notification extends dojo.data.api.Read {
onSet (item:any,attribute:any,oldValue:any,newValue:any) : any;
onNew (newItem:any,parentInfo?:any) : any;
onDelete (deletedItem:any) : any;
}
}
