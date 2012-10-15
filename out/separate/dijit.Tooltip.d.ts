/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dijit{
export class Tooltip extends dijit._Widget {
showDelay : number;
connectId : any;
position : any;
_connections : Object;
_connectIds : any;
_focus : bool;
_showTimer : Object;
_connectNode : any;
defaultPosition : any[];
_setConnectIdAttr (newId:String) : any;
addTarget (node:HTMLElement) : any;
removeTarget (node:HTMLElement) : any;
_onTargetMouseEnter (e:any) : any;
_onTargetMouseLeave (e:any) : any;
_onTargetFocus (e:any) : any;
_onTargetBlur (e:any) : any;
_onHover (e:any) : any;
_onUnHover (e:any) : any;
open (target:HTMLElement) : any;
close () : any;
}
}
