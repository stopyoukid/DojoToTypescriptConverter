/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dijit._editor.plugins{
export class LinkDialog extends dijit._editor._Plugin {
urlRegExp : String;
emailRegExp : String;
htmlTemplate : String;
tag : String;
_hostRxp : Object;
_userAtRxp : Object;
linkDialogTemplate : String;
dropDown : Object;
_uniqueId : any;
_textInput : Object;
_setButton : Object;
_urlRegExp : Object;
_emailRegExp : Object;
_delayedCheck : Object;
_checkAndFixInput () : any;
_connectTagEvents () : any;
_isValid () : any;
_setContent (staticPanel:any) : any;
_checkValues (args:Object) : any;
setValue (args:any) : any;
_onCloseDialog () : any;
_getCurrentValues (a:any) : any;
_onOpenDialog () : any;
_onDblClick (e:Object) : any;
}
}
