/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class TabPane extends dijit._WidgetBase {
label : String;
icon : String;
iconPos : String;
selected : bool;
inheritParams () : any;
getParentWidget () : any;
}
}
