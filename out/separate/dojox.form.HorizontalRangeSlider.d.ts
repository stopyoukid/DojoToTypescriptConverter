/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.HorizontalSlider.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.form._RangeSliderMixin.d.ts" />
module dojox.form{
export class HorizontalRangeSlider extends dijit.form.HorizontalSlider {
_movableMax : Object;
_movableBar : Object;
_onHandleClickMax (e:any) : any;
_getBumpValue (signedChange:any,useMaxValue:any) : any;
_onRemainingBarClick (e:any) : any;
_getValueByPixelValue (pixelValue:number,maxPixels:number) : any;
_printSliderBar (priorityChange:any,isMaxVal:any) : any;
}
}
