/// <reference path="Object.d.ts" />
/// <reference path="dijit.tree._dndContainer.d.ts" />
module dijit.tree{
export class _dndSelector extends dijit.tree._dndContainer {
selection : any;
singular : bool;
anchor : Object;
_doDeselect : bool;
getSelectedTreeNodes () : any;
selectNone () : any;
addTreeNode (node:any,isAnchor?:bool) : any;
removeTreeNode (node:any) : any;
isTreeNodeSelected (node:any) : any;
setSelection (newSelection:any) : any;
_setDifference (xs:any,ys:any) : any;
_updateSelectionProperties () : any;
onMouseDown (e:any) : any;
onMouseUp (e:any) : any;
onMouseMove (e:any) : any;
userSelect (node:any,multi:bool,range:bool) : any;
forInSelectedItems (f:Function,o?:Object) : any;
}
}
