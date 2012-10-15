/// <reference path="Object.d.ts" />
module dojox.grid{
export class _FocusManager{
_colHeadNode : Object;
_colHeadFocusIdx : number;
_contextMenuBindNode : Object;
tabbingOut : bool;
focusClass : String;
focusView : Object;
_headerConnects : any[];
rowIndex : number;
_connects : any[];
headerMenu : any;
destroy () : any;
initFocusView () : any;
isFocusCell (inCell:any,inRowIndex:number) : any;
isLastFocusCell () : any;
isFirstFocusCell () : any;
isNoFocusCell () : any;
isNavHeader () : any;
getHeaderIndex () : any;
_focusifyCellNode (inBork:any) : any;
_delayedCellFocus () : any;
_delayedHeaderFocus () : any;
_initColumnHeaders () : any;
_findHeaderCells () : any;
_setActiveColHeader (colHeaderNode:HTMLElement,colFocusIdx:number,prevColFocusIdx:number) : any;
scrollIntoView () : any;
_scrollInfo (cell:any,domNode:any) : any;
_scrollHeader (currentIdx:any) : any;
_isHeaderHidden () : any;
colSizeAdjust (e:any,colIdx:any,delta:any) : any;
styleRow (inRow:any) : any;
setFocusIndex (inRowIndex:number,inCellIndex:number) : any;
setFocusCell (inCell:any,inRowIndex:number) : any;
next () : any;
previous () : any;
move (inRowDelta:number,inColDelta:number) : any;
previousKey (e:any) : any;
nextKey (e:any) : any;
tabOut (inFocusNode:any) : any;
focusGridView () : any;
focusGrid (inSkipFocusCell:any) : any;
findAndFocusGridCell () : any;
focusHeader () : any;
blurHeader () : any;
doFocus (e:any) : any;
doBlur (e:any) : any;
doContextMenu (e:any) : any;
doLastNodeFocus (e:any) : any;
doLastNodeBlur (e:any) : any;
doColHeaderFocus (e:any) : any;
doColHeaderBlur (e:any) : any;
}
}
