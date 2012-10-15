/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class InsertAnchor extends dijit._editor._Plugin {
htmlTemplate : String;
_template : Object;
dropDown : Object;
_uniqueId : any;
_anchorInput : Object;
_textInput : Object;
_setButton : Object;
_styled : Object;
_checkInput () : any;
_setup () : any;
getAnchorStyle () : any;
_applyStyles () : any;
_calcBaseUrl (fullUrl:String) : String;
_checkValues (args:Object) : any;
setValue (args:any) : any;
_onCloseDialog () : any;
_getCurrentValues (a:any) : any;
_onOpenDialog () : any;
_onDblClick (e:Object) : any;
_preDomFilter (node:any) : any;
_postDomFilter (node:any) : any;
}
}
