/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._LayoutWidget.d.ts" />
module dojox.layout{
export class TableContainer extends dijit.layout._LayoutWidget {
cols : number;
labelWidth : any;
showLabels : bool;
orientation : String;
spacing : number;
customClass : String;
_children : any[];
_initialized : Object;
_setSpacingAttr (value:any) : any;
}
}
