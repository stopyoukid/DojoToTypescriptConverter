/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.axis2d.Base.d.ts" />
module dojox.charting.axis2d{
export class Invisible extends dojox.charting.axis2d.Base {
scale : any;
offset : number;
labels : any;
ticks : Object;
dependOnData () : bool;
setWindow (scale:number,offset:number) : any;
getWindowScale () : number;
getWindowOffset () : number;
_groupLabelWidth (labels:any,font:any,wcLimit:any) : any;
}
}
