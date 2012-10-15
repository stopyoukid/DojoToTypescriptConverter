/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.svg.Shape.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.path.TextPath.d.ts" />
module dojox.gfx.svg{
export class TextPath extends dojox.gfx.svg.Shape {
text : Object;
fontStyle : Object;
getText () : Object;
setText (newText:any) : any;
getFont () : Object;
setFont (newFont:any) : any;
nodeType : String;
_updateWithSegment (segment:Object) : any;
_setTextPath () : any;
_setText () : any;
}
}
