/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile.app{
export class List extends dijit._WidgetBase {
items : any[];
itemTemplate : String;
emptyTemplate : String;
dividerTemplate : String;
labelDelete : String;
labelCancel : String;
controller : Object;
autoDelete : bool;
enableDelete : bool;
enableHold : bool;
formatters : Object;
_templateLoadCount : number;
_mouseDownPos : Object;
_dragThreshold : Object;
_deleting : bool;
_deleteAnimConn : Object;
_postDeleteAnim : Object;
_deleteBtns : Object;
buttons : Object;
_replaceToken : Object;
_checkLoadComplete : Object;
dividerFunction () : any;
handleDrag (event:any) : any;
handleDragCancel () : any;
preDelete (currentLeftPos:any) : any;
createDeleteButtons (aroundNode:any) : any;
_handleButtonClick (event:any) : any;
onDelete (data:any,index:any,array:any) : any;
cancelDelete () : any;
applyClass (node:any,idx:any,array:any) : any;
_setDataInfo (rowNode:any,event:any) : any;
onSelect (data:any,index:any,rowNode:any) : any;
_selectRow (row:any) : any;
_deselectRow () : any;
_getRowNode (fromNode:any,ignoreNoClick:any) : any;
applyTemplate (template:any,data:any) : any;
render () : any;
_renderRange (startIdx:any,endIdx:any) : any;
_loadTemplate (url:any,thisAttr:any,callback:any) : any;
_setFormattersAttr (formatters:any) : any;
_setItemsAttr (items:any) : any;
}
}
