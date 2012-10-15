/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.Button.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.form._BusyButtonMixin.d.ts" />
module dojox.form{
export class BusyButton extends dijit.form.Button {
isBusy : bool;
busyLabel : String;
timeout : Object;
useIcon : Object;
_label : any;
_initTimeout : any;
_timeout : Object;
makeBusy () : any;
cancel () : any;
resetTimeout (timeout:number) : any;
}
}
