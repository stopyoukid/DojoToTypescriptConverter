/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.Element.d.ts" />
module dojox.charting.axis2d{
export class Base extends dojox.charting.Element {
vertical : any;
clear () : any;
initialized () : bool;
calculate (min:any,max:any,span:any) : any;
getScaler () : Object;
getTicks () : Object;
getOffsets () : Object;
render (dim:any,offsets:any) : any;
}
}
