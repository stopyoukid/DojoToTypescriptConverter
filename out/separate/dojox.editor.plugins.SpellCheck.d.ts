/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class SpellCheck extends dijit._editor._Plugin {
url : String;
bufferLength : number;
interactive : bool;
timeout : number;
exArgs : Object;
_cursorSpan : String;
_cursorSelector : String;
_incorrectWordsSpan : String;
_selector : String;
_maxItemNumber : number;
_strings : Object;
_dialog : Object;
_service : Object;
_iterator : number;
_enabled : Object;
_cache : Object;
_delayHandler : Object;
parser : any;
_setNetwork () : any;
_connectUp () : any;
_disabled (name:any,disabled:any) : any;
_keyPress (evt:any) : any;
_loadData (data:any[]) : any;
_openDialog () : any;
_skip (evt?:any,noUpdate?:bool) : any;
_skipAll () : any;
_add () : any;
_replace () : any;
_replaceAll () : any;
_cancel () : any;
_enter () : any;
_query (html:String) : any;
_html2Text (html:any) : any;
_getBookmark (eValue:String) : any;
_moveToBookmark () : any;
_submitContent (delay?:bool) : any;
_populateDialog (index:any) : any;
_markIncorrectWords (html:String,cache:Object) : any;
_selectWord (index:any) : any;
_replaceWord (index:any,text:any) : any;
_skipWord (index:any) : any;
_skipWordAll (index:any,word?:String) : any;
_addWord (index:any,word?:String) : any;
_findText (txt:String,caseSensitive:bool,backwards:bool) : any;
_spellCheckFilter (value:String) : any;
}
}
