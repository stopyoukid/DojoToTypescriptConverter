/// <reference path="Object.d.ts" />
module dijit.tree{
export class _dndContainer{
current : HTMLElement;
node : Object;
parent : Object;
tree : HTMLElement;
map : Object;
containerState : String;
events : any[];
getItem (key:String) : any;
destroy () : any;
onMouseOver (widget:dijit._TreeNode,evt:any) : any;
onMouseOut (widget:dijit._TreeNode,evt:any) : any;
_changeState (type:String,newState:String) : any;
_addItemClass (node:HTMLElement,type:String) : any;
_removeItemClass (node:HTMLElement,type:String) : any;
onOverEvent () : any;
onOutEvent () : any;
}
}
