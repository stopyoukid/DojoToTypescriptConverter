/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.TextBox.d.ts" />
module dijit.form{
export class SimpleTextarea extends dijit.form.TextBox {
rows : number;
cols : String;
_previousValue : String;
}
}
