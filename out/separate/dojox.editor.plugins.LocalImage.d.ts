/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor.plugins.ImgLinkDialog.d.ts" />
module dojox.editor.plugins{
export class LocalImage extends dijit._editor.plugins.ImgLinkDialog {
uploadable : bool;
uploadUrl : String;
baseImageUrl : String;
fileMask : String;
_fileUploader : Object;
htmlFieldName : String;
_isLocalFile : bool;
_messages : Object;
_cssPrefix : String;
_closable : Object;
_urlInput : Object;
_initialFileUploader () : any;
_cancelFileUpload () : any;
_checkAndSetValue () : any;
_setDialogStatus (value:bool) : any;
}
}
