/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.ToggleButton.d.ts" />
module dijit.form{
export class CheckBox extends dijit.form.ToggleButton {
readOnly : bool;
checkedAttrSetting : any;
_setReadOnlyAttr (value:bool) : any;
_setValueAttr (newValue:String,priorityChange:bool) : any;
_getValueAttr () : any;
}
}
