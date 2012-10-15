/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class AutoScroll extends dojox.grid.enhanced._Plugin {
autoScrollInterval : number;
autoScrollMargin : number;
_scrolling : bool;
_handler : Object;
readyForAutoScroll : bool;
_initEvents () : any;
_mixinGrid () : any;
_fireEvent (eventName:any,args:any) : any;
_manageAutoScroll (toStop:any,isVertical:any,isForward:any,view:any) : any;
_autoScroll (isVertical:any,isForward:any,view:any) : any;
_scrollColumn (isForward:any,view:any) : any;
}
}
