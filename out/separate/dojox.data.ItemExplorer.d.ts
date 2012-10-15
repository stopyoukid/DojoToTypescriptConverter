/// <reference path="Object.d.ts" />
/// <reference path="dijit.Tree.d.ts" />
module dojox.data{
export class ItemExplorer extends dijit.Tree {
useSelect : bool;
refSelectSearchAttr : Object;
_modelNodeIdMap : Object;
_modelNodePropMap : Object;
_editDialog : Object;
setStore (store:any) : any;
setItem (item:any) : any;
refreshItem () : any;
_createEditDialog () : any;
_enableFields (selection:any) : any;
_updateItem (vals:any) : any;
_editProperty () : any;
_destroyProperty () : any;
_addProperty () : any;
}
}
