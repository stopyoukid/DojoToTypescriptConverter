/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormValueWidget.d.ts" />
module dijit.form{
export class TextBox extends dijit.form._FormValueWidget {
trim : bool;
uppercase : bool;
lowercase : bool;
propercase : bool;
maxLength : String;
selectOnClick : bool;
placeHolder : String;
_singleNodeTemplate : String;
_buttonInputDisabled : any;
displayedValue : String;
_blankValue : String;
_selectOnClickHandle : Object;
_setPlaceHolderAttr (v:any) : any;
_updatePlaceHolder () : any;
_getValueAttr () : any;
getDisplayedValue () : any;
_getDisplayedValueAttr () : any;
setDisplayedValue (value:String) : any;
_setDisplayedValueAttr (value:String) : any;
format (value:String,constraints:Object) : any;
parse (value:String,constraints:Object) : String;
_refreshState () : any;
_onInput (e:any) : any;
filter (val:any) : any;
_setBlurValue () : any;
}
}
