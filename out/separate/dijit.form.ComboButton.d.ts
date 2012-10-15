/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.DropDownButton.d.ts" />
module dijit.form{
export class ComboButton extends dijit.form.DropDownButton {
optionsTitle : String;
_focusedNode : Object;
_onButtonKeyPress (evt:any) : any;
_onArrowKeyPress (evt:any) : any;
}
}
