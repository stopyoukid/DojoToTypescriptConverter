/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._Splitter.d.ts" />
module dojox.layout{
export class ToggleSplitter extends dijit.layout._Splitter {
open : bool;
closedThreshold : number;
openSize : String;
_closedSize : String;
_openStyleProps : Object;
_startPosn : number;
_onUpHandle : Object;
_onMoveHandle : Object;
_onMouseUp (evt:any) : any;
_onPrelimMouseMove (evt:any) : any;
_onMouseDown (evt:any) : any;
_handleOnChange () : any;
_getStyleProps (paneNode:any,open:any,paneStyle:any) : any;
_setStateClass () : any;
_setOpenAttr (value:bool) : any;
onOpen () : any;
_toggleMe (evt:any) : any;
}
}
