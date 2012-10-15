/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.Element.d.ts" />
/// <reference path="dojox.charting.plot2d._PlotEvents.d.ts" />
module dojox.charting.plot2d{
export class Spider extends dojox.charting.Element {
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
series : any[];
datas : Object;
labelKey : any[];
oldSeriePoints : Object;
animations : Object;
_hScaler : Object;
_vScaler : Object;
aroundRect : any;
clear () : any;
setAxis (axis:any) : any;
addSeries (run:any) : any;
getSeriesStats () : any;
calculateAxes (dim:Object) : any;
getRequiredColors () : number;
initializeScalers (dim:Object,stats:Object) : any;
render (dim:Object,offsets:Object) : any;
_createSeriesEntry (ts:any,osps:any,sps:any,f:any,sk:any,r:any,ro:any,ms:any,at:any) : any;
_getBoundary (points:any) : any;
_drawArrow (s:any,start:any,end:any,stroke:any) : any;
_buildPoints (points:any,count:any,circle:any,radius:any,angle:any,recursive:any) : any;
_getCoordinate (circle:any,radius:any,angle:any) : any;
_getObjectLength (obj:any) : any;
_getLabel (number:any) : any;
}
}
