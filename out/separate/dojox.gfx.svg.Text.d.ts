/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.svg.Shape.d.ts" />
/// <reference path="dojox.gfx.shape.Text.d.ts" />
module dojox.gfx.svg{
export class Text extends dojox.gfx.svg.Shape {
fontStyle : Object;
getFont () : Object;
setFont (newFont:Object) : any;
nodeType : String;
getTextWidth () : any;
}
}
