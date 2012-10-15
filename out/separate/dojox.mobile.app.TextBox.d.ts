/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.app._FormValueWidget.d.ts" />
module dojox.mobile.app{
export class TextBox extends dojox.mobile.app._FormValueWidget {
trim : bool;
uppercase : bool;
lowercase : bool;
propercase : bool;
maxLength : String;
selectOnClick : bool;
placeHolder : String;
focusNode : any;
displayedValue : String;
_blankValue : String;
_selectOnClickHandle : Object;
_setPlaceHolderAttr (v:any) : any;
_getDisplayedValueAttr () : any;
_setDisplayedValueAttr (value:String) : any;
format (value:String,constraints:Object) : any;
parse (value:String,constraints:Object) : String;
_refreshState () : any;
_onInput (e:any) : any;
filter (val:any) : any;
_setBlurValue () : any;
_onBlur (e:any) : any;
}
}
