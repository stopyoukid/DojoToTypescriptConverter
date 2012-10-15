/// <reference path="Object.d.ts" />
/// <reference path="dijit._HasDropDown.d.ts" />
module dijit.form{
export class ComboBoxMixin extends dijit._HasDropDown {
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
templateString : Object;
baseClass : String;
dropDownClass : String;
searchTimer : Object;
_fetchHandle : Object;
_prev_key_backspace : Object;
_lastQuery : Object;
value : String;
_lastInput : any;
_maxOptions : any;
srcNodeRef : any;
_getCaretPos (element:HTMLElement) : any;
_setCaretPos (element:HTMLElement,location:number) : any;
_setDisabledAttr (value:bool) : any;
_abortQuery () : any;
_onInput (evt:any) : any;
_autoCompleteText (text:String) : any;
_openResultList (results:Object,dataObject:Object) : any;
_showResultList () : any;
_setBlurValue () : any;
_setItemAttr (item:any,priorityChange?:bool,displayedValue?:String) : any;
_announceOption (node:HTMLElement) : any;
_selectOption (evt:any) : any;
_startSearchAll () : any;
_startSearchFromInput () : any;
_getQueryString (text:String) : any;
_startSearch (key:String) : any;
_setMaxOptions (size:any,request:any) : any;
_getValueField () : any;
postMixInProperties () : any;
_setHasDownArrowAttr (val:any) : any;
_getMenuLabelFromItem (item:any) : any;
doHighlight (label:String,find:String) : any;
_escapeHtml (str:String) : String;
reset () : any;
labelFunc (item:any,store:any) : String;
}
}
