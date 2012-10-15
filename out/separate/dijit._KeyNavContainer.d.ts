/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dijit{
export class _KeyNavContainer extends dijit._Container {
focusedChild : dijit._Widget;
tabIndex : number;
_keyNavCodes : Object;
connectKeyNavHandlers (prevKeyCodes:any,nextKeyCodes:any) : any;
startupKeyNavChildren () : any;
focus () : any;
focusFirstChild () : any;
focusLastChild () : any;
focusNext () : any;
focusPrev () : any;
focusChild (widget:any,last:bool) : any;
_startupChild (widget:any) : any;
_onContainerFocus (evt:any) : any;
_onBlur (evt:any) : any;
_onContainerKeypress (evt:any) : any;
_onChildBlur (widget:any) : any;
_getFirstFocusableChild () : any;
_getLastFocusableChild () : any;
_getNextFocusableChild (child:dijit._Widget,dir:number) : any;
}
}
