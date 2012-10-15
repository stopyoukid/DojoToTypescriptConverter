/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class TabBar extends dijit._WidgetBase {
iconBase : String;
iconPos : String;
barType : String;
inHeading : Object;
_fixedButtonWidth : number;
_fixedButtonMargin : number;
_largeScreenWidth : number;
_clsName : any;
onResize () : any;
}
}
