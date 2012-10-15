/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.charting.widget{
export class Chart extends dijit._Widget {
theme : Object;
margins : Object;
stroke : Object;
fill : Object;
chart : Object;
actions : Object;
resize (box:any) : any;
}
}
