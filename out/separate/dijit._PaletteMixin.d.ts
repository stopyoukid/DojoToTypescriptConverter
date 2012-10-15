/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit{
export class _PaletteMixin extends dijit._CssStateMixin {
defaultTimeout : number;
timeoutChangeRate : number;
value : String;
_selectedCell : number;
_currentFocus : HTMLElement;
_xDim : number;
_yDim : number;
tabIndex : String;
cellClass : String;
dyeClass : String;
_cells : any[];
_blankGif : any;
_preparePalette (choices:any,titles:any) : any;
postCreate () : any;
focus () : any;
_onCellClick (evt:any) : any;
_setCurrent (node:HTMLElement) : any;
_setValueAttr (value:String,priorityChange:any) : any;
onChange (value:String) : any;
_navigateByKey (increment:any,typeCount:any) : any;
_getDye (cell:HTMLElement) : any;
}
}
