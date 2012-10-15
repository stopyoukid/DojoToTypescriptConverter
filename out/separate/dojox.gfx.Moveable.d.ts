/// <reference path="Object.d.ts" />
module dojox.gfx{
export class Moveable{
events : any[];
shape : any;
_lastX : any;
_lastY : any;
delay : number;
mover : Object;
destroy () : any;
onMouseDown (e:any) : any;
onMouseMove (e:any) : any;
onMouseUp (e:any) : any;
onMoveStart (mover:any) : any;
onMoveStop (mover:any) : any;
onFirstMove (mover:any) : any;
onMove (mover:any,shift:Object) : any;
onMoving (mover:any,shift:Object) : any;
onMoved (mover:any,shift:Object) : any;
}
}
