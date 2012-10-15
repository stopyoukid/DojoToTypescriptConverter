/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class FindReplace extends dijit._editor._Plugin {
_frToolbar : any;
_closeBox : any;
_findField : any;
_replaceField : any;
_findButton : any;
_replaceButton : any;
_replaceAllButton : any;
_caseSensitive : any;
_backwards : any;
_promDialog : any;
_promDialogTimeout : Object;
_strings : any;
_displayed : bool;
toggle () : any;
_toggleFindReplace (show:bool,ignoreState?:bool,buttonDisabled?:bool) : any;
_populateFindField () : any;
_checkButtons () : any;
_onFindKeyDown (evt:any) : any;
_onReplaceKeyDown (evt:any) : any;
_find (showMessage?:bool) : any;
_replace (showMessage?:bool) : any;
_replaceAll (showMessage?:bool) : any;
_findText (txt:String,caseSensitive:bool,backwards:bool) : any;
_filterRegexp (pattern:String,ignoreCase:bool) : any;
}
}
