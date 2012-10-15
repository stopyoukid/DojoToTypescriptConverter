/// <reference path="Object.d.ts" />
module dojo.dnd{
export class Container{
skipForm : bool;
current : HTMLElement;
map : any;
creator : Object;
node : HTMLElement;
parent : Object;
defaultCreator : Object;
containerState : String;
events : any[];
getItem (key:String) : any;
setItem (key:String,data:any) : any;
delItem (key:String) : any;
forInItems (f:Function,o?:Object) : Object;
clearItems () : any;
getAllNodes () : dojo.NodeList;
sync () : any;
insertNodes (data:any[],before:bool,anchor:HTMLElement) : any;
destroy () : any;
markupFactory (params:any,node:any) : any;
startup () : any;
onMouseOver (e:any) : any;
onMouseOut (e:any) : any;
onSelectStart (e:any) : any;
onOverEvent () : any;
onOutEvent () : any;
_changeState (type:String,newState:String) : any;
_addItemClass (node:HTMLElement,type:String) : any;
_removeItemClass (node:HTMLElement,type:String) : any;
_getChildByEvent (e:any) : any;
_normalizedCreator (item:any,hint:String) : any;
}
}
