/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.gauge._Gauge.d.ts" />
module dojox.widget{
export class BarGauge extends dojox.widget.gauge._Gauge {
dataX : number;
dataY : number;
dataWidth : number;
dataHeight : number;
_getPosition (value:number) : any;
_getValueForPosition (pos:number) : any;
draw () : any;
drawRange (range:Object) : any;
getRangeUnderMouse (event:Object) : any;
_dragIndicator (widget:Object,event:Object) : any;
}
}
