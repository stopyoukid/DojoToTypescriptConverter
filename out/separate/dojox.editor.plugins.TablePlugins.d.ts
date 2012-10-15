/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class TablePlugins extends dijit._editor._Plugin {
commandName : String;
label : Object;
alwaysAvailable : bool;
undoEnabled : Object;
available : any;
_availableTopic : Object;
valBeforeUndo : Object;
onDisplayChanged (withinTable:any) : any;
onEditorLoaded () : any;
selectTable () : any;
modTable (cmd:any,args:any) : any;
begEdit () : any;
endEdit () : any;
makeColumnsEven () : any;
getTableInfo (forceNewData:any) : any;
_makeTitle (str:any) : any;
getSelectedCells () : any;
}
}
