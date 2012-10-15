/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dijit._editor.plugins{
export class AlwaysShowToolbar extends dijit._editor._Plugin {
_handleScroll : bool;
_lastHeight : number;
_scrollSetUp : Object;
_scrollThreshold : any;
_IEOriginalPos : Object;
_fixEnabled : bool;
enable (d:any) : any;
_updateHeight () : any;
globalOnScrollHandler () : any;
}
}
