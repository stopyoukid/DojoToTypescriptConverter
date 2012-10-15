/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._Spinner.d.ts" />
/// <reference path="dijit.form.NumberTextBoxMixin.d.ts" />
module dijit.form{
export class NumberSpinner extends dijit.form._Spinner {
_formatter (value:number,options?:any) : String;
_parser (value:String,constraints:any) : number;
_onKeyPress (e:any) : any;
}
}
