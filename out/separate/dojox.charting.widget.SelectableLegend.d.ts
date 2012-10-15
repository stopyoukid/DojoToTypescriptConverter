/// <reference path="Object.d.ts" />
/// <reference path="dojox.charting.widget.Legend.d.ts" />
module dojox.charting.widget{
export class SelectableLegend extends dojox.charting.widget.Legend {
outline : bool;
transitionFill : Object;
transitionStroke : Object;
legends : any[];
legendAnim : Object;
_applyEvents () : any;
_toggle (shapes:any,index:any,isOff:any,dyn:any,seriesName:any,plotName:any) : any;
_highlight (e:any,iconShape:any,shapes:any,index:any,isOff:any,dyn:any,seriesName:any,plotName:any) : any;
_getAnim (plotName:any) : any;
_getTransitionFill (plotName:any) : any;
_getFilledShape (shapes:any) : any;
_isPie () : any;
}
}
