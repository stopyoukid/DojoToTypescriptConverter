/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class PasteFromWord extends dijit._editor._Plugin {
width : String;
height : String;
_template : Object;
_filters : any[];
_uId : Object;
_dialog : Object;
_openDialog () : any;
_paste () : any;
_cancel () : any;
_clearDialog () : any;
}
}
