/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.cells._Widget.d.ts" />
module dojox.grid.cells{
export class RowSelector extends dojox.grid.cells._Widget {
inputType : String;
map : Object;
disabledMap : Object;
isRowSelector : bool;
_connects : any[];
_subscribes : any[];
checkedText : String;
unCheckedText : String;
baseClass : String;
disabledCount : number;
inA11YMode : Object;
checkedClass : String;
disabledClass : String;
checkedDisabledClass : String;
statusTextClass : String;
toggleRow (index:number,value:bool) : any;
setDisabled (index:any,disabled:bool) : any;
disabled (index:any) : any;
_onClick (e:any) : any;
_dokeyup (e:any) : any;
_focusEndingCell (rowIndex:number,cellIndex:number) : any;
_nativeSelect (index:any,value:any) : any;
_onSelected (index:any) : any;
_onDeselected (index:any) : any;
_onUpdateRow (index:any) : any;
_toggleCheckedStyle (index:any,value:any) : any;
_toggleDisabledStyle (index:any,disabled:any) : any;
_getSelector (index:any) : any;
_pageDestroyed (pageIndex:number) : any;
destroy () : any;
}
}
