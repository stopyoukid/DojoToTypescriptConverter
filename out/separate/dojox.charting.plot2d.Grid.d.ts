/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.Element.d.ts" />
module dojox.charting.plot2d{
export class Grid extends dojox.charting.Element {
optionalParams : Object;
opt : Object;
hAxis : any;
vAxis : any;
animate : any;
zoom : Object;
zoomQueue : any[];
lastWindow : Object;
clear () : any;
setAxis (axis:any) : any;
addSeries (run:any) : any;
getSeriesStats () : any;
initializeScalers () : any;
isDirty () : bool;
performZoom (dim:Object,offsets:Object) : any;
getRequiredColors () : number;
render (dim:Object,offsets:Object) : any;
_animateGrid (shape:any,type:any,offset:any,size:any) : any;
}
}
