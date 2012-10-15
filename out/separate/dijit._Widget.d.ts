/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dijit{
export class _Widget extends dijit._WidgetBase {
dojoAttachEvent : String;
dojoAttachPoint : String;
waiRole : String;
waiState : String;
focused : bool;
nodesWithKeyClick : any;
region : String;
layoutPriority : number;
splitter : bool;
minSize : number;
maxSize : number;
layoutAlign : String;
sizeMin : number;
sizeShare : number;
selected : bool;
closable : bool;
iconClass : String;
showTitle : bool;
observer : String;
column : String;
dragRestriction : bool;
slideFrom : String;
label : String;
spanLabel : bool;
colspan : number;
toggleSplitterOpen : bool;
toggleSplitterClosedThreshold : String;
toggleSplitterOpenSize : String;
dndType : String;
onClick (event:MouseEvent) : any;
onDblClick (event:MouseEvent) : any;
onKeyDown (event:KeyboardEvent) : any;
onKeyPress (event:KeyboardEvent) : any;
onKeyUp (event:KeyboardEvent) : any;
onMouseDown (event:MouseEvent) : any;
onMouseMove (event:MouseEvent) : any;
onMouseOut (event:MouseEvent) : any;
onMouseOver (event:MouseEvent) : any;
onMouseLeave (event:MouseEvent) : any;
onMouseEnter (event:MouseEvent) : any;
onMouseUp (event:MouseEvent) : any;
_onConnect (event:String) : any;
isFocusable () : any;
onFocus () : any;
onBlur () : any;
_onFocus (e:any) : any;
_onBlur () : any;
setAttribute (attr:String,value:any) : any;
attr (name:String,value?:Object) : any;
_onShow () : any;
onShow () : any;
onHide () : any;
onClose () : bool;
}
}
