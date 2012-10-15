/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.gauge._Gauge.d.ts" />
module dojox.widget{
export class AnalogGauge extends dojox.widget.gauge._Gauge {
startAngle : number;
endAngle : number;
cx : number;
cy : number;
radius : number;
_oppositeMiddle : number;
_getAngle (value:number) : any;
_getValueForAngle (angle:number) : any;
_getRadians (angle:number) : any;
_getDegrees (radians:number) : any;
draw () : any;
drawRange (range:Object) : any;
getRangeUnderMouse (event:Object) : any;
_dragIndicator (widget:Object,event:Object) : any;
}
}
