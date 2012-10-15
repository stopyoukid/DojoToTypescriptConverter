/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormWidget.d.ts" />
module dojox.widget{
export class ColorPicker extends dijit.form._FormWidget {
showRgb : bool;
showHsv : bool;
showHex : bool;
webSafe : bool;
animatePoint : bool;
slideDuration : number;
liveUpdate : bool;
PICKER_HUE_H : number;
PICKER_SAT_VAL_H : number;
PICKER_SAT_VAL_W : number;
PICKER_HUE_SELECTOR_H : number;
PICKER_SAT_SELECTOR_H : number;
PICKER_SAT_SELECTOR_W : number;
_underlay : Object;
_hueUnderlay : Object;
_pickerPointer : Object;
_huePickerPointer : Object;
_huePickerPointerAlly : Object;
_uId : Object;
_mover : Object;
_hueMover : Object;
_subs : any[];
_keyListeners : any[];
_timer : Object;
_setValueAttr (value:any) : any;
setColor (color:String,force:any) : any;
_setTimer (mover:any) : any;
_clearTimer (mover:any) : any;
_setHue (h:number) : any;
_updateHueCursorNode (count:number,node:any,e:any) : any;
_updateCursorNode (count:number,node:any,e:any) : any;
_updateColor () : any;
_colorInputChange (e:any) : any;
_updateValue (col:any,fireChange:bool) : any;
_updatePickerLocations (col:any) : any;
_updateColorInputs (col:any) : any;
_setHuePoint (evt:any) : any;
_setPoint (evt:any) : any;
_handleKey (e:any) : any;
_stopDrag (e:any) : any;
}
}
