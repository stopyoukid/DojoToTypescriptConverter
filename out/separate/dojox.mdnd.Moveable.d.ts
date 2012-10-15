/// <reference path="Object.d.ts" />
module dojox.mdnd{
export class Moveable{
handle : HTMLElement;
skip : bool;
dragDistance : number;
_selectStart : Object;
_firstX : any;
_firstY : any;
_isDragging : bool;
size : Object;
date : Object;
events : any[];
d : any;
autoScroll : any;
isFormElement (e:Event) : bool;
onMouseDown (e:Event) : any;
onFirstMove (e:Event) : any;
initOffsetDrag (e:Event) : any;
onMove (e:Event) : any;
onMouseUp (e:Event) : any;
onDragStart (node:HTMLElement,coords:Object,size:Object) : any;
onDragEnd (node:HTMLElement) : any;
onDrag (node:HTMLElement,coords:Object,size:Object,mousePosition:Object) : any;
destroy () : any;
}
}
