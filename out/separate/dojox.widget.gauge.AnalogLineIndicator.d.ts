/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.gauge._Indicator.d.ts" />
module dojox.widget.gauge{
export class AnalogLineIndicator extends dojox.widget.gauge._Indicator {
text : Object;
highlight : String;
shapes : Object;
currentValue : any;
_getShapes () : any;
_move (dontAnimate?:bool) : any;
}
}
