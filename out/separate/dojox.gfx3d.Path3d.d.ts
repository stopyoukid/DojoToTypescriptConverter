/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx3d.Object.d.ts" />
module dojox.gfx3d{
export class Path3d extends dojox.gfx3d.Object {
segments : any[];
absolute : Object;
last : Object;
path : String;
_collectArgs (array:any[],args:any[]) : any;
_pushSegment (action:String,args:any[]) : any;
moveTo () : any;
lineTo () : any;
closePath () : any;
_draw () : any;
}
}
