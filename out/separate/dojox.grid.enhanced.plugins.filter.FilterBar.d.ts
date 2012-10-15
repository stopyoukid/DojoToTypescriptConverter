/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class FilterBar extends dijit._Widget {
templateString : String;
templatePath : String;
widgetsInTemplate : bool;
_skipNodeCache : bool;
_earlyTemplatedStartup : bool;
_attachPoints : any;
_attachEvents : any[];
declaredClass : any;
_startupWidgets : Object;
_supportingWidgets : Object;
_templateCache : Object;
_stringRepl (tmpl:any) : any;
_fillContent (source:HTMLElement) : any;
_attachTemplateNodes (rootNode:HTMLElement,getAttrFunc?:Function) : any;
getCachedTemplate (templatePath:String,templateString?:String,alwaysUseString?:any) : any;
_timeout_statusTooltip : number;
_handle_statusTooltip : Object;
_curColIdx : number;
_filterBarDefBtnLabel : any;
_filterBarClearBtnLabel : any;
_closeFilterBarBtnLabel : any;
_noFilterMsg : Object;
oldGetHeaderHeight : Object;
_leavingBtn : bool;
_defPaneIsShown : bool;
_tippos : Object;
_isFocused : bool;
_focusPos : number;
_previousHeaderIdx : any;
isFilterBarShown () : any;
showFilterBar (toShow:any,useAnim:any,animArgs:any) : any;
toggleFilterBar (useAnim:any,animArgs:any) : any;
getColumnIdx (coordX:number) : number;
toggleClearFilterBtn (toHide:any) : any;
_closeFilterBar (e:any) : any;
_showFilterDefDialog (e:any) : any;
_clearFilterDefDialog (e:any) : any;
_onEnterButton (e:any) : any;
_onMoveButton (e:any) : any;
_onLeaveButton (e:any) : any;
_onShowFilterDefDialog (colIdx:number) : any;
_onCloseFilterDefDialog () : any;
_onClickFilterBar (e:any) : any;
_onMouseEnter (e:any) : any;
_onMouseMove (e:any) : any;
_onMouseLeave (e:any) : any;
_updateTipPosition (evt:any) : any;
_onFocusFilterBar (highlightOnly:any,evt:any,step:any) : any;
_onBlurFilterBar (evt:any,step:any) : any;
_onFiltered (filteredSize:number,originSize:number) : any;
_initAriaInfo () : any;
_isInColumn (mousePos_x:number,headerNode:HTMLElement,colIndex:number) : any;
_setStatusTipTimeout () : any;
_clearStatusTipTimeout () : any;
_showStatusTooltip () : any;
_highlightHeader (colIdx:number) : any;
_clearHeaderHighlight () : any;
}
}
