/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormValueWidget.d.ts" />
module dijit.form{
export class _FormSelectWidget extends dijit.form._FormValueWidget {
multiple : bool;
store : any;
query : any;
queryOptions : any;
sortByLabel : bool;
loadChildrenOnOpen : bool;
_notifyConnections : any[];
_loadingStore : Object;
_pendingValue : any;
_oValue : Object;
onFetch () : any;
getOptions (valueOrIdx:any) : any;
addOption (option:any) : any;
removeOption (valueOrIdx:String) : any;
updateOption (newOption:any) : any;
setStore (store:any,selectedValue?:any,fetchArgs?:Object) : any;
_getDisplayedValueAttr () : any;
_loadChildren () : any;
_updateSelection () : any;
_getValueFromOpts () : any;
_onNewItem (item:any,parentInfo?:Object) : any;
_onDeleteItem (item:any) : any;
_onSetItem (item:any) : any;
_getOptionObjForItem (item:any) : any;
_addOptionForItem (item:any) : any;
_addOptionItem (option:any) : any;
_removeOptionItem (option:any) : any;
_setDisplay (newDisplay:String) : any;
_getChildren () : any;
_getSelectedOptionsAttr () : any;
_pseudoLoadChildren (items:any) : any;
onSetStore () : any;
}
}
