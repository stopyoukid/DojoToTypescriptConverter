/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.grid.enhanced.plugins{
export class _Paginator extends dijit._Widget {
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
position : String;
_maxItemSize : Object;
description : Object;
pageStepper : Object;
maxPageStep : number;
sizeSwitch : Object;
pageSizes : Object;
gotoButton : bool;
_originalResize : Object;
currentPageSize : any;
_resultSize : Object;
pageSizeValue : Object;
initializedSizeNode : Object;
pageStepValue : Object;
gotoPageTd : Object;
gotoPageDiv : Object;
_gotoPageDialog : Object;
_currentFocusNode : Object;
focusArea : String;
itemTitle : any;
descTemplate : any;
update () : any;
_setWidthValue () : any;
_regFocusMgr (position:any) : any;
_placeSelf () : any;
_resetGridHeight (changeSize:any,resultSize:any) : any;
_styleMsgNode (top:any,width:any,height:any) : any;
_updateDescription () : any;
_updateSizeSwitch () : any;
_createSizeSwitchNodes () : any;
_updateSwitchNodeClass () : any;
_updatePageStepper () : any;
_createPageStepNodes () : any;
_createWardBtns () : any;
_resetPageStepNodes () : any;
_updatePageStepNodeClass () : any;
_showGotoButton (flag:any) : any;
_updateGotoButton () : any;
_createGotoNode () : any;
_openGotopageDialog (event:any) : any;
_onFocusPaginator (event:any,step:any) : any;
_onFocusPageSizeNode (event:any) : any;
_onFocusPageStepNode (event:any) : any;
_onFocusGotoPageNode (event:any) : any;
_onBlurPaginator (event:any,step:any) : any;
_onKeyDown (event:any,isBubble:any) : any;
_moveFocus (rowDelta:any,colDelta:any,evt:any) : any;
_getPageSizeActivableNodes () : any;
_getPageStepActivableNodes () : any;
_getAllPageSizeNodes () : any;
_getAllPageStepNodes () : any;
_moveToNextActivableNode (nodeList:any,curNodeValue:any) : any;
_onSwitchPageSize (e:any) : any;
_onPageStep (e:any) : any;
_getCurrentPageNo () : any;
_getPageCount () : any;
_getStartPage () : any;
_getStepPageSize () : any;
}
}