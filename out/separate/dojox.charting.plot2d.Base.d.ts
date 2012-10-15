/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.Element.d.ts" />
/// <reference path="dojox.charting.plot2d._PlotEvents.d.ts" />
module dojox.charting.plot2d{
export class Base extends dojox.charting.Element {
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
series : any[];
zoom : Object;
zoomQueue : any[];
lastWindow : Object;
clear () : any;
setAxis (axis:any) : any;
addSeries (run:any) : any;
getSeriesStats () : any;
calculateAxes (dim:Object) : any;
isDirty () : bool;
isDataDirty () : bool;
performZoom (dim:Object,offsets:Object) : any;
render (dim:Object,offsets:Object) : any;
getRequiredColors () : number;
initializeScalers (dim:Object,stats:Object) : any;
}
}
