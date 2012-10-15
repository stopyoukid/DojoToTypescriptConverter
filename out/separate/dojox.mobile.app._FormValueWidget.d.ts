/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.app._FormWidget.d.ts" />
module dojox.mobile.app{
export class _FormValueWidget extends dojox.mobile.app._FormWidget {
readOnly : bool;
_hasBeenBlurred : bool;
_setReadOnlyAttr (value:bool) : any;
_setValueAttr (newValue:any,priorityChange:any) : any;
_getValueAttr () : any;
undo () : any;
reset () : any;
}
}
