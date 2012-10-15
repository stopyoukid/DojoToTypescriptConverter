/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.ValidationTextBox.d.ts" />
/// <reference path="dijit.form.ComboBoxMixin.d.ts" />
module dijit.form{
export class ComboBox extends dijit.form.ValidationTextBox {
item : Object;
pageSize : number;
store : Object;
fetchProperties : Object;
query : Object;
autoComplete : bool;
highlightMatch : String;
searchDelay : number;
searchAttr : String;
labelAttr : String;
labelType : String;
queryExpr : String;
ignoreCase : bool;
hasDownArrow : bool;
dropDownClass : String;
maxHeight : number;
searchTimer : Object;
_fetchHandle : Object;
_prev_key_backspace : Object;
_lastQuery : Object;
_lastInput : any;
_maxOptions : any;
_getCaretPos (element:HTMLElement) : any;
_setCaretPos (element:HTMLElement,location:number) : any;
_abortQuery () : any;
_onKey (evt:any) : any;
_autoCompleteText (text:String) : any;
_openResultList (results:Object,dataObject:Object) : any;
_showResultList () : any;
loadDropDown (callback:Function) : any;
isLoaded () : any;
closeDropDown () : any;
_setItemAttr (item:any,priorityChange?:bool,displayedValue?:String) : any;
_announceOption (node:HTMLElement) : any;
_selectOption (evt:any) : any;
_startSearchAll () : any;
_startSearchFromInput () : any;
_getQueryString (text:String) : any;
_startSearch (key:String) : any;
_setMaxOptions (size:any,request:any) : any;
_getValueField () : any;
_setHasDownArrowAttr (val:any) : any;
_getMenuLabelFromItem (item:any) : any;
doHighlight (label:String,find:String) : any;
_escapeHtml (str:String) : String;
labelFunc (item:any,store:any) : String;
}
}
