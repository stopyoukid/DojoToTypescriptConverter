/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dijit{
export class InlineEditBox extends dijit._Widget {
editing : bool;
autoSave : bool;
buttonSave : String;
buttonCancel : String;
renderAsHtml : bool;
editor : any;
editorWrapper : any;
editorParams : Object;
disabled : bool;
width : String;
value : String;
noValueIndicator : String;
_savedPosition : Object;
_savedOpacity : Object;
_savedTabIndex : Object;
onChange (value:any) : any;
onCancel () : any;
setDisabled (disabled:bool) : any;
_setDisabledAttr (disabled:bool) : any;
_onMouseOver () : any;
_onMouseOut () : any;
_onClick (e:any) : any;
edit () : any;
_showText (focus:bool) : any;
save (focus:bool) : any;
setValue (val:String) : any;
_setValueAttr (val:String) : any;
getValue () : any;
cancel (focus:bool) : any;
}
}
