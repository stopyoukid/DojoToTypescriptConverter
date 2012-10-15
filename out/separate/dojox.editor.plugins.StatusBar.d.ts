/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class StatusBar extends dijit._editor._Plugin {
statusBar : any;
resizer : bool;
resizeHandle : Object;
_msgListener : Object;
_getValueAttr () : any;
_setValueAttr (str:String) : any;
}
}
