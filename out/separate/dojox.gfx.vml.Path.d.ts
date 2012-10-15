/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.vml.Shape.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.path.Path.d.ts" />
module dojox.gfx.vml{
export class Path extends dojox.gfx.vml.Shape {
absolute : Object;
tbbox : Object;
segmented : bool;
_2PI : number;
setAbsoluteMode (mode:bool) : any;
getAbsoluteMode () : bool;
_getRealBBox () : any[];
getLastPosition () : Object;
_updateBBox (x:number,y:number,matrix:any) : any;
_updateWithSegment (segment:Object,matrix:any) : any;
_pushSegment (action:String,args:any[]) : any;
_collectArgs (array:any[],args:any[]) : any;
moveTo () : any;
lineTo () : any;
hLineTo () : any;
vLineTo () : any;
curveTo () : any;
smoothCurveTo () : any;
qCurveTo () : any;
qSmoothCurveTo () : any;
arcTo () : any;
closePath () : any;
_confirmSegmented () : any;
_setPath (path:String) : any;
vmlPath : String;
nodeType : String;
_addArgs (path:any,segment:any,from:any,upto:any) : any;
_adjustRelCrd (last:any,segment:any,step:any) : any;
_adjustRelPos (last:any,segment:any) : any;
_moveToA (segment:any) : any;
_moveToR (segment:any,last:any) : any;
_lineToA (segment:any) : any;
_lineToR (segment:any,last:any) : any;
_hLineToA (segment:any,last:any) : any;
_hLineToR (segment:any,last:any) : any;
_vLineToA (segment:any,last:any) : any;
_vLineToR (segment:any,last:any) : any;
_curveToA (segment:any) : any;
_curveToR (segment:any,last:any) : any;
_smoothCurveToA (segment:any,last:any) : any;
_smoothCurveToR (segment:any,last:any) : any;
_qCurveToA (segment:any) : any;
_qCurveToR (segment:any,last:any) : any;
_qSmoothCurveToA (segment:any,last:any) : any;
_qSmoothCurveToR (segment:any,last:any) : any;
_arcTo (segment:any,last:any) : any;
_closePath () : any;
}
}
