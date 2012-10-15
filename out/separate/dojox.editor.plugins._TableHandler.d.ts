/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class _TableHandler extends dijit._editor._Plugin {
tablesConnected : bool;
currentlyAvailable : bool;
alwaysAvailable : bool;
availableCurrentlySet : Object;
initialized : bool;
tableData : Object;
shiftKeyDown : bool;
undoEnabled : Object;
refCount : number;
cnKeyDn : Object;
cnKeyUp : Object;
stopEvent : bool;
doMixins () : any;
initialize (editor:any) : any;
getTableInfo (forceNewData:any) : any;
connectDraggable () : any;
onDragStart () : any;
onDragEnd () : any;
checkAvailable () : any;
_prepareTable (tbl:any) : any;
getTimeStamp () : any;
_tempStoreTableData (type:any) : any;
_tempAvailability (type:any) : any;
connectTableKeys () : any;
disconnectTableKeys () : any;
onKeyDown (evt:any) : any;
onKeyUp (evt:any) : any;
onDisplayChanged () : any;
uninitialize (editor:any) : any;
}
}
