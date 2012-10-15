/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.DialogSimple.d.ts" />
module dojox.widget{
export class Dialog extends dojox.widget.DialogSimple {
sizeToViewport : bool;
viewportPadding : number;
dimensions : any[];
easing : any;
sizeDuration : number;
sizeMethod : String;
modal : bool;
_navIn : Object;
_navOut : Object;
_vp : Object;
_sizing : Object;
_sizingConnect : Object;
_setSize () : any;
_handleNav (e:any) : any;
_showContent (e:any) : any;
}
}
