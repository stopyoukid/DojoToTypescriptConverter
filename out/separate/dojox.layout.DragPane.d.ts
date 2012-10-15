/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.layout{
export class DragPane extends dijit._Widget {
invert : bool;
_x : any;
_y : any;
_mover : Object;
_down (e:any) : any;
_up (e:any) : any;
_move (e:any) : any;
}
}
