/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.MappedTextBox.d.ts" />
module dijit.form{
export class RangeBoundTextBox extends dijit.form.MappedTextBox {
rangeMessage : String;
rangeCheck (primitive:number,constraints:any) : any;
isInRange (isFocused:bool) : any;
_isDefinitelyOutOfRange () : any;
}
}
