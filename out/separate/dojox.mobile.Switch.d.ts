/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class Switch extends dijit._WidgetBase {
value : String;
leftLabel : String;
rightLabel : String;
_width : number;
inner : any;
left : any;
right : any;
knob : any;
_moved : Object;
innerStartX : any;
touchStartX : any;
_conn1 : Object;
_conn2 : Object;
_changeState (state:String) : any;
onClick (e:any) : any;
onTouchStart (e:any) : any;
onTouchMove (e:any) : any;
onTouchEnd (e:any) : any;
onStateChanged (newState:String) : any;
}
}
