/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
module dojox.widget.gauge{
export class Range extends dijit._Widget {
getParent () : any;
_getSibling (which:String) : any;
getPreviousSibling () : any;
getNextSibling () : any;
getIndexInParent () : number;
low : number;
high : any;
hover : String;
color : Object;
size : number;
}
}
