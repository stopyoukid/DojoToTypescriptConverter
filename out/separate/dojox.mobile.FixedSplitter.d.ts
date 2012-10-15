/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class FixedSplitter extends dijit._WidgetBase {
orientation : String;
isContainer : Object;
resize (changeSize:any,resultSize:any) : any;
layout () : any;
}
}
