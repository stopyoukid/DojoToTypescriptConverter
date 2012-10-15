/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.gauge._Indicator.d.ts" />
module dojox.widget.gauge{
export class BarLineIndicator extends dojox.widget.gauge._Indicator {
shapes : Object;
text : Object;
highlight : String;
highlight2 : String;
currentValue : any;
_getShapes () : any;
_move (dontAnimate?:bool) : any;
}
}
