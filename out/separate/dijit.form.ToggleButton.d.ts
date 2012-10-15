/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.Button.d.ts" />
module dijit.form{
export class ToggleButton extends dijit.form.Button {
checked : bool;
_hasBeenBlurred : bool;
_setCheckedAttr (value:bool,priorityChange?:bool) : any;
setChecked (checked:bool) : any;
reset () : any;
}
}
