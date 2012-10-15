/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._LayoutWidget.d.ts" />
module dijit.layout{
export class SplitContainer extends dijit.layout._LayoutWidget {
activeSizing : bool;
sizerWidth : number;
orientation : String;
persist : bool;
isHorizontal : bool;
sizers : any[];
virtualSizer : any;
paneWidth : any;
paneHeight : any;
isSizing : bool;
sizingSplitter : any;
cover : Object;
originPos : Object;
startPoint : any;
lastPoint : String;
screenToClientOffset : number;
dragOffset : number;
_ownconnects : any[];
isDraggingLeft : bool;
_onSizerMouseDown (e:any) : any;
_addSizer (index:any) : any;
_movePanel (panel:any,pos:any,size:any) : any;
_moveSlider (slider:any,pos:any,size:any) : any;
_growPane (growth:any,pane:any) : any;
_checkSizes () : any;
beginSizing (e:any,i:any) : any;
changeSizing (e:any) : any;
endSizing (e:any) : any;
movePoint () : any;
legaliseSplitPoint (a:any) : any;
_updateSize () : any;
_showSizingLine () : any;
_hideSizingLine () : any;
_moveSizingLine () : any;
_getCookieName (i:any) : any;
_restoreState () : any;
_saveState () : any;
}
}
