/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor.plugins._FontDropDown.d.ts" />
module dijit._editor.plugins{
export class _FontNameDropDown extends dijit._editor.plugins._FontDropDown {
generic : bool;
command : String;
values : any[];
getLabel (value:String,name:String) : any;
}
}
