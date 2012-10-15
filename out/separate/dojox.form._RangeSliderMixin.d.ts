module dojox.form{
export class _RangeSliderMixin{
value : Object;
_movableMax : Object;
_movableBar : Object;
_lastValueReported : String;
postMixInProperties () : any;
postCreate () : any;
destroy () : any;
_onKeyPress (e:any) : any;
_onHandleClickMax (e:any) : any;
_onClkIncBumper () : any;
_bumpValue (signedChange:any,useMaxValue:any) : any;
_getBumpValue (signedChange:any,useMaxValue:any) : any;
_onBarClick (e:any) : any;
_onRemainingBarClick (e:any) : any;
_setPixelValue (pixelValue:number,maxPixels:number,priorityChange:bool,isMaxVal:bool) : any;
_getValueByPixelValue (pixelValue:number,maxPixels:number) : any;
_setValueAttr (value:any[],priorityChange:any,isMaxVal:any) : any;
_printSliderBar (priorityChange:any,isMaxVal:any) : any;
}
}
