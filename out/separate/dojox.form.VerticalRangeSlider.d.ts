/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.VerticalSlider.d.ts" />
/// <reference path="dojox.form._RangeSliderMixin.d.ts" />
module dojox.form{
export class VerticalRangeSlider extends dijit.form.VerticalSlider {
_movableMax : Object;
_movableBar : Object;
_onHandleClickMax (e:any) : any;
_getBumpValue (signedChange:any,useMaxValue:any) : any;
_onRemainingBarClick (e:any) : any;
_getValueByPixelValue (pixelValue:number,maxPixels:number) : any;
_printSliderBar (priorityChange:any,isMaxVal:any) : any;
}
}
