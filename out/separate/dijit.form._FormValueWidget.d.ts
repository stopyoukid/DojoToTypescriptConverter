/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormWidget.d.ts" />
module dijit.form{
export class _FormValueWidget extends dijit.form._FormWidget {
readOnly : bool;
_hasBeenBlurred : bool;
_setReadOnlyAttr (value:bool) : any;
_setValueAttr (newValue:any,priorityChange?:bool) : any;
undo () : any;
reset () : any;
_onKeyDown (e:any) : any;
_layoutHackIE7 () : any;
}
}
