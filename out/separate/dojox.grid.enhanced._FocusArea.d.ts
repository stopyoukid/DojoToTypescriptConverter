/// <reference path="Object.d.ts" />
module dojox.grid.enhanced{
export class _FocusArea{
name : String;
onFocus : any;
onBlur : any;
onMove : any;
onKey : any;
getRegions : any;
onRegionFocus : any;
onRegionBlur : any;
_fm : any;
move (rowStep:any,colStep:any,evt:any) : any;
_onKeyEvent (evt:any,funcName:any) : any;
keydown (evt:any) : any;
keyup (evt:any) : any;
contentMouseEventPlanner () : any;
headerMouseEventPlanner () : any;
}
}
