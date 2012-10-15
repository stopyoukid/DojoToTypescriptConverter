/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.canvas.Shape.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.shape.Text.d.ts" />
module dojox.gfx.canvas{
export class Text extends dojox.gfx.canvas.Shape {
fontStyle : Object;
getFont () : Object;
setFont (newFont:Object) : any;
canvasFont : Object;
_setFont () : any;
getTextWidth () : any;
}
}
