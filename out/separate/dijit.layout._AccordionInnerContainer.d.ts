/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit.layout{
export class _AccordionInnerContainer extends dijit._Widget {
cssStateNodes : Object;
hovering : bool;
active : bool;
_mouseDown : Object;
_stateClasses : any;
_cssMouseEvent (event:any) : any;
_setStateClass () : any;
_trackMouseState (node:HTMLElement,clazz:String) : any;
buttonWidget : String;
isContainer : Object;
isLayoutContainer : Object;
button : Object;
_contentWidgetWatches : any[];
_setSelectedAttr (isSelected:bool) : any;
}
}
