/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormSelectWidget.d.ts" />
module dojox.form{
export class CheckedMultiSelect extends dijit.form._FormSelectWidget {
required : bool;
invalidMessage : String;
_message : String;
tooltipPosition : any;
validator () : any;
validate (isFocused:any) : any;
isValid (isFocused:bool) : any;
getErrorMessage (isFocused:bool) : any;
displayMessage (message:String) : any;
onAfterAddOptionItem (item:any,option:any) : any;
_refreshState () : any;
invertSelection (onChange:bool) : any;
}
}
