module dojox.charting.plot2d{
export class _PlotEvents{
dirty : Object;
_shapeEvents : any[];
_eventSeries : Object;
destroy () : any;
plotEvent (o:Object) : any;
raiseEvent (o:Object) : any;
connect (object:Object,method:String) : any[];
events () : any;
resetEvents () : any;
_connectSingleEvent (o:any,eventName:any) : any;
_connectEvents (o:any) : any;
_reconnectEvents (seriesName:any) : any;
fireEvent (seriesName:String,eventName:String,index:number,eventObject?:Object) : any;
}
}
