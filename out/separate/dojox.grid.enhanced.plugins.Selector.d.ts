/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class Selector extends dojox.grid.enhanced._Plugin {
_enabled : Object;
_selected : Object;
_oldDeselectAll : any;
_lastFocusedRowBarIdx : number;
_isUsingRowSelector : Object;
_toSelect : any;
_curType : any;
_isStartFocus : bool;
_lastType : Object;
_selectedRowModified : Object;
_selecting : Object;
_startPoint : Object;
_currentPoint : Object;
_lastAnchorPoint : Object;
_lastEndPoint : Object;
_lastSelectedAnchorPoint : Object;
_lastSelectedEndPoint : Object;
_keyboardSelect : Object;
setupConfig (config:Object) : any;
isSelected (type:String,rowIndex:number,colIndex?:number) : any;
toggleSelect (type:any,rowIndex:any,colIndex:any) : any;
select (type:String,rowIndex:number,colIndex?:number) : any;
deselect (type:any,rowIndex:any,colIndex:any) : any;
selectRange (type:String,start:number,end:number,toSelect:any) : any;
clear (type?:String) : any;
isSelecting (type:String) : any;
selectEnabled (toEnable?:bool) : any;
getSelected (type:String,includeExceptions:bool) : any;
getSelectedCount (type:String,includeExceptions:bool) : any;
getSelectedType () : any;
getLastSelectedRange (type:any) : any;
_hacks () : any;
_mixinGrid () : any;
_initEvents () : any;
_onSelectedById (id:any,newIndex:any,isSelected:any) : any;
_onInternalRearrange (type:any,mapping:any) : any;
_onExternalChange (type:any,target:any) : any;
_refresh (type:any,toHighlight:any) : any;
_refreshSelected () : any;
_initAreas () : any;
_clearSelection (type:String,reservedItem:any) : any;
_startSelect (type:String,start:any,extending:bool,isRange:bool,mandatarySelect:bool,toSelect:any) : any;
_endSelect (type:String) : any;
_fireEvent (evtName:any,type:any) : any;
_calcToHighlight (type:any,target:any,toHighlight:any,toSelect:any) : any;
_highlightNode (node:any,toHighlight:any) : any;
_highlightHeader (colIdx:any,toHighlight:any) : any;
_highlightRowSelector (rowIdx:any,toHighlight:any) : any;
_highlightSingle (type:any,toHighlight:any,target:any,toSelect:any,isRefresh:any) : any;
_highlight (type:any,target:any,toSelect:bool) : any;
_focusPoint (type:any,point:any) : any;
_blurPoint (type:any,point:any) : any;
_addToSelected (type:any) : any;
_forEach (type:any,start:any,end:any,func:any,halfClose:any) : any;
_makeupForExceptions (type:any,newCellItems:any) : any;
_makeupForCells (type:any,newItems:any) : any;
_addException (type:any,items:any) : any;
_addCellException (type:any,items:any) : any;
_add (type:any,items:any) : any;
_remove (type:any,items:any) : any;
_isCellNotInExcept (type:any,item:any) : any;
_isSelected (type:any,item:any) : any;
_isInLastRange (type:any,item:any,isSelected:any) : any;
_isValid (type:any,item:any,allowNotSelectable:any) : any;
}
}
