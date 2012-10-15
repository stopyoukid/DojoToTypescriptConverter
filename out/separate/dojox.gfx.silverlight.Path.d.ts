/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.silverlight.Shape.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.path.Path.d.ts" />
module dojox.gfx.silverlight{
export class Path extends dojox.gfx.silverlight.Shape {
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
nodeType : String;
}
}
