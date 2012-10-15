/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.Element.d.ts" />
/// <reference path="dojox.charting.plot2d._PlotEvents.d.ts" />
module dojox.charting.plot2d{
export class Pie extends dojox.charting.Element {
_shapeEvents : any[];
_eventSeries : Object;
plotEvent (o:Object) : any;
raiseEvent (o:Object) : any;
connect (object:Object,method:String) : any[];
events () : any;
resetEvents () : any;
_connectSingleEvent (o:any,eventName:any) : any;
_connectEvents (o:any) : any;
_reconnectEvents (seriesName:any) : any;
fireEvent (seriesName:String,eventName:String,index:number,eventObject?:Object) : any;
dyn : any[];
clear () : any;
setAxis (axis:any) : any;
addSeries (run:any) : any;
getSeriesStats () : any;
initializeScalers () : any;
getRequiredColors () : any;
render (dim:Object,offsets:Object) : any;
_getProperLabelRadius (slices:any,labelHeight:any,minRidius:any) : any;
_caculateLabelR (firstSlice:any,slices:any,labelHeight:any) : any;
_getLabel (number:any) : any;
}
}
