/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.silverlight.Shape.d.ts" />
/// <reference path="dojox.gfx.path.TextPath.d.ts" />
module dojox.gfx.silverlight{
export class TextPath extends dojox.gfx.silverlight.Shape {
text : Object;
fontStyle : Object;
getText () : Object;
setText (newText:any) : any;
getFont () : Object;
setFont (newFont:any) : any;
nodeType : String;
_updateWithSegment (segment:Object) : any;
_setText () : any;
}
}
