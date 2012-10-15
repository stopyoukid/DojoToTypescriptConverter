/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit.form.ValidationTextBox.d.ts" />
module dojox.form{
export class _ChildTextBox extends dijit.form.ValidationTextBox {
containerWidget : dijit._Widget;
_onChildKeyPress (e:any) : any;
}
}
