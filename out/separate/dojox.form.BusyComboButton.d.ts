/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.ComboButton.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.form._BusyButtonMixin.d.ts" />
module dojox.form{
export class BusyComboButton extends dijit.form.ComboButton {
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
