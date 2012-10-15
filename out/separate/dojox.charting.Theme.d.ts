/// <reference path="Object.d.ts" />
module dojox.charting{
export class Theme{
defaultColors : any[];
_current : number;
markers : any;
_markers : any[];
colors : Object;
seriesThemes : Object;
markerThemes : Object;
noGradConv : any;
noRadialConv : any;
defineColors (kwArgs:any) : any;
generateGradient (fillPattern:any,colorFrom:any,colorTo:any) : any;
generateHslColor (color:any,luminance:any) : any;
generateHslGradient (color:any,fillPattern:any,lumFrom:any,lumTo:any) : Object;
clone () : any;
clear () : any;
next (elementType?:String,mixin?:Object,doPost?:bool) : Object;
skip () : any;
addMixin (theme:any,elementType:String,mixin:Object,doPost:bool) : any;
post (theme:any,elementType:String) : any;
getTick (name:String,mixin?:Object) : Object;
inspectObjects (f:any) : any;
reverseFills () : any;
addMarker (name:String,segment:String) : any;
setMarkers (obj:Object) : any;
_buildMarkerArray () : any;
}
}
