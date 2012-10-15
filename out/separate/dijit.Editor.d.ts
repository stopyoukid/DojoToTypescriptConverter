/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor.RichText.d.ts" />
module dijit{
export class Editor extends dijit._editor.RichText {
plugins : any;
extraPlugins : any;
setValueDeferred : Object;
_steps : any[];
_undoedSteps : any[];
commands : Object;
toolbar : Object;
_plugins : any[];
_layoutMode : Object;
customUndo : bool;
editActionInterval : number;
_inEditing : bool;
_editTimer : Object;
_undoRedoActive : Object;
_savedSelection : Object;
_editInterval : number;
addPlugin (plugin:String,index?:number) : any;
resize (size:any) : any;
layout () : any;
onBeforeActivate (e:any) : any;
onBeforeDeactivate (e:any) : any;
beginEditing (cmd:any) : any;
_moveToBookmark (b:any) : any;
_changeToStep (from:any,to:any) : any;
undo () : any;
redo () : any;
endEditing (ignore_caret:any) : any;
_getBookmark () : any;
_beginEditing (cmd:any) : any;
_endEditing (ignore_caret:any) : any;
_saveSelection () : any;
_restoreSelection () : any;
}
}
