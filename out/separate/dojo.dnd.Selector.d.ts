/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Container.d.ts" />
module dojo.dnd{
export class Selector extends dojo.dnd.Container {
selection : any;
singular : bool;
anchor : Object;
simpleSelection : bool;
onmousemoveEvent : Object;
autoSync : any;
getSelectedNodes () : dojo.NodeList;
selectNone () : any;
selectAll () : any;
deleteSelectedNodes () : any;
forInSelectedItems (f:Function,o?:Object) : any;
onMouseDown (e:any) : any;
onMouseUp (e:any) : any;
onMouseMove (e:any) : any;
_removeSelection () : any;
_removeAnchor () : any;
}
}
