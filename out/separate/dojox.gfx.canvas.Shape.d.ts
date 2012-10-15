/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.shape.Shape.d.ts" />
module dojox.gfx.canvas{
export class Shape extends dojox.gfx.shape.Shape {
canvasTransform : any;
canvasFill : Object;
_render (ctx:Object) : any;
_renderTransform (ctx:Object) : any;
_renderShape (ctx:Object) : any;
_renderFill (ctx:Object,apply:bool) : any;
_renderStroke (ctx:Object,apply:bool) : any;
connect () : any;
disconnect () : any;
}
}
