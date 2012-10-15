/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid._FocusManager.d.ts" />
module dojox.grid.enhanced{
export class _FocusManager extends dojox.grid._FocusManager {
_areas : Object;
_currentAreaIdx : number;
_areaQueue : any[];
_gridBlured : Object;
cell : Object;
_blurFromEditableCell : Object;
_isNavigating : Object;
_contentMouseEventHandlers : any[];
_headerMouseEventHandlers : any[];
_stopEvent (evt:any) : any;
addArea (area:any) : any;
getArea (areaName:any) : any;
_bindAreaEvents () : any;
removeArea (areaName:any) : any;
currentArea (areaName:String,toBlurOld:any) : any;
placeArea (name:any,pos:any,otherAreaName:any) : any;
ignoreArea (name:any) : any;
focusArea (areaId:number,evt:any) : any;
tab (step:any,evt:any) : any;
_onMouseEvent (type:any,evt:any) : any;
contentMouseEvent (evt:any) : any;
headerMouseEvent (evt:any) : any;
_doBlur () : any;
_changeMenuBindNode (oldBindNode:any,newBindNode:any) : any;
_blurHeader (evt:any,step:any) : any;
_navHeader (rowStep:any,colStep:any,evt:any) : any;
_onHeaderKeyDown (e:any,isBubble:any) : any;
_focusContent (evt:any,step:any) : any;
_blurContent (evt:any,step:any) : any;
_navContent (rowStep:any,colStep:any,evt:any) : any;
_onContentKeyDown (e:any,isBubble:any) : any;
_focusEditableCell (evt:any,step:any) : any;
_applyEditableCell () : any;
_blurEditableCell (evt:any,step:any) : any;
_initNavigatableElems () : any;
_onEditableCellKeyDown (e:any,isBubble:any) : any;
_onEditableCellMouseEvent (evt:any) : any;
}
}
