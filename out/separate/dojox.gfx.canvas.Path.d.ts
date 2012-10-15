/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.canvas.Shape.d.ts" />
/// <reference path="dojox.gfx.path.Path.d.ts" />
module dojox.gfx.canvas{
export class Path extends dojox.gfx.canvas.Shape {
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
canvasPath : any[];
_moveToA (result:any,action:any,args:any) : any;
_moveToR (result:any,action:any,args:any) : any;
_lineToA (result:any,action:any,args:any) : any;
_lineToR (result:any,action:any,args:any) : any;
_hLineToA (result:any,action:any,args:any) : any;
_hLineToR (result:any,action:any,args:any) : any;
_vLineToA (result:any,action:any,args:any) : any;
_vLineToR (result:any,action:any,args:any) : any;
_curveToA (result:any,action:any,args:any) : any;
_curveToR (result:any,action:any,args:any) : any;
_smoothCurveToA (result:any,action:any,args:any) : any;
_smoothCurveToR (result:any,action:any,args:any) : any;
_qCurveToA (result:any,action:any,args:any) : any;
_qCurveToR (result:any,action:any,args:any) : any;
_qSmoothCurveToA (result:any,action:any,args:any) : any;
_qSmoothCurveToR (result:any,action:any,args:any) : any;
_arcTo (result:any,action:any,args:any) : any;
_closePath (result:any,action:any,args:any) : any;
}
}
