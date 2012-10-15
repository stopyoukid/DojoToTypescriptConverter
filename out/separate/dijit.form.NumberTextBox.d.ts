/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.RangeBoundTextBox.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.NumberTextBoxMixin.d.ts" />
module dijit.form{
export class NumberTextBox extends dijit.form.RangeBoundTextBox {
_formatter (value:number,options?:any) : String;
_parser (value:String,constraints:any) : number;
}
}
