/// <reference path="Object.d.ts" />
module dojo.dnd{
export class Moveable{
handle : Object;
delay : number;
skip : bool;
events : any[];
node : HTMLElement;
_lastX : any;
_lastY : any;
mover : any;
markupFactory (params:any,node:any) : any;
destroy () : any;
onMouseDown (e:any) : any;
onMouseMove (e:any) : any;
onMouseUp (e:any) : any;
onSelectStart (e:any) : any;
onDragDetected (e:any) : any;
onMoveStart (mover:any) : any;
onMoveStop (mover:any) : any;
onFirstMove (mover:any,e:any) : any;
onMove (mover:any,leftTop:Object,e:any) : any;
onMoving (mover:any,leftTop:Object) : any;
onMoved (mover:any,leftTop:Object) : any;
}
}
