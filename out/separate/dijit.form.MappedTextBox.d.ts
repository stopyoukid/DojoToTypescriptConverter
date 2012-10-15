/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.ValidationTextBox.d.ts" />
module dijit.form{
export class MappedTextBox extends dijit.form.ValidationTextBox {
serialize (val:any,options?:Object) : String;
}
}
