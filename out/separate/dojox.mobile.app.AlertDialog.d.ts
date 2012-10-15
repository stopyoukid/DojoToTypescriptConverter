/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile.app{
export class AlertDialog extends dijit._WidgetBase {
text : String;
controller : Object;
buttons : any[];
defaultButtonLabel : String;
mask : Object;
_handleSelect : Object;
onClick : Object;
onChoose () : any;
show () : any;
hide () : any;
_doTransition (dir:any) : any;
}
}
