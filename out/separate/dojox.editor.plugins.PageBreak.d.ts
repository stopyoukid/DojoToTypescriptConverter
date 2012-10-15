/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class PageBreak extends dijit._editor._Plugin {
_unbreakableNodes : any[];
_pbContent : String;
_styled : Object;
_style () : any;
_insertPageBreak () : any;
_allowBreak () : any;
}
}
