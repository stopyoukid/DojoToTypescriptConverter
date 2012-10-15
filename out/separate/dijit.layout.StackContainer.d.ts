/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._LayoutWidget.d.ts" />
module dijit.layout{
export class StackContainer extends dijit.layout._LayoutWidget {
doLayout : bool;
persist : bool;
selectedChildWidget : any;
_hasBeenShown : Object;
selectChild (page:any,animate:bool) : any;
_transition (newWidget:any,oldWidget:any,animate:bool) : any;
_adjacent (forward:bool) : any;
forward () : any;
back () : any;
_onKeyPress (e:any) : any;
_showChild (page:any) : any;
_hideChild (page:any) : any;
closeChild (page:any) : any;
}
}
