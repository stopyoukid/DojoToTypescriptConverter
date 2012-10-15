/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormValueWidget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dijit.form{
export class HorizontalSlider extends dijit.form._FormValueWidget {
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
showButtons : bool;
minimum : number;
maximum : number;
discreteValues : number;
pageIncrement : number;
clickSelect : bool;
slideDuration : number;
_mousePixelCoord : String;
_pixelCount : String;
_startingPixelCoord : String;
_startingPixelCount : String;
_handleOffsetCoord : String;
_progressPixelSize : String;
_inProgressAnim : Object;
_movable : Object;
_onKeyUp (e:any) : any;
_onKeyPress (e:any) : any;
_onHandleClick (e:any) : any;
_isReversed () : any;
_onBarClick (e:any) : any;
_setPixelValue (pixelValue:number,maxPixels:number,priorityChange?:bool) : any;
_bumpValue (signedChange:any,priorityChange?:bool) : any;
_onClkBumper (val:any) : any;
_onClkIncBumper () : any;
_onClkDecBumper () : any;
decrement (e:any) : any;
increment (e:any) : any;
_mouseWheeled (evt:any) : any;
_typematicCallback (count:number,button:Object,e:any) : any;
}
}
