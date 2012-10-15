/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormValueWidget.d.ts" />
module dojox.form{
export class PasswordValidator extends dijit.form._FormValueWidget {
required : bool;
_inputWidgets : any[];
oldName : String;
isValid (isFocused:bool) : any;
validate (isFocused:bool) : any;
_createSubWidgets () : any;
pwCheck (password:String) : any;
_childValueAttr (v:any) : any;
_setRequiredAttribute (value:any) : any;
_getValueAttr () : any;
}
}
