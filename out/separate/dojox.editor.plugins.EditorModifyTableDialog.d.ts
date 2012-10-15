/// <reference path="Object.d.ts" />
/// <reference path="dijit.Dialog.d.ts" />
module dojox.editor.plugins{
export class EditorModifyTableDialog extends dijit.Dialog {
table : Object;
tableAtts : Object;
_cleanupWidgets : any[];
brdColor : any;
bkColor : any;
setBrdColor (color:any) : any;
setBkColor (color:any) : any;
onSet () : any;
onSetTable (tableText:any) : any;
}
}
