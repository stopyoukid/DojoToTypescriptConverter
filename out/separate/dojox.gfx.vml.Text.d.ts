/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.vml.Shape.d.ts" />
/// <reference path="dojox.gfx.shape.Text.d.ts" />
module dojox.gfx.vml{
export class Text extends dojox.gfx.vml.Shape {
fontStyle : Object;
getFont () : Object;
setFont (newFont:Object) : any;
nodeType : String;
_setFont () : any;
getTextWidth () : any;
}
}
