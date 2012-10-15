/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.plot2d.Base.d.ts" />
module dojox.charting.plot2d{
export class OHLC extends dojox.charting.plot2d.Base {
opt : Object;
hAxis : any;
vAxis : any;
animate : any;
collectStats (series:any) : any;
_animateOHLC (shape:any,voffset:any,vsize:any) : any;
}
}
