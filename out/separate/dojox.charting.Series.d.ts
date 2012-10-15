/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.Element.d.ts" />
module dojox.charting{
export class Series extends dojox.charting.Element {
dyn : Object;
data : any;
source : any;
plot : String;
clear () : any;
update (data:any[]) : any;
}
}
