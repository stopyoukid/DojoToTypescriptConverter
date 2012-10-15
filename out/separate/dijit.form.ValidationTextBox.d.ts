/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.TextBox.d.ts" />
module dijit.form{
export class ValidationTextBox extends dijit.form.TextBox {
required : bool;
promptMessage : String;
invalidMessage : String;
missingMessage : String;
message : String;
constraints : any;
regExp : String;
state : String;
tooltipPosition : any;
_maskValidSubsetError : Object;
_partialre : String;
messages : Object;
regExpGen (constraints:any) : String;
validator (value:any,constraints:any) : any;
_isValidSubset () : any;
isValid (isFocused:bool) : any;
_isEmpty (value:any) : bool;
getErrorMessage (isFocused:bool) : String;
getPromptMessage (isFocused:bool) : String;
validate (isFocused:bool) : any;
displayMessage (message:String) : any;
_setConstraintsAttr (constraints:Object) : any;
_computePartialRE () : any;
_setRequiredAttr (value:bool) : any;
_setMessageAttr (message:String) : any;
}
}
