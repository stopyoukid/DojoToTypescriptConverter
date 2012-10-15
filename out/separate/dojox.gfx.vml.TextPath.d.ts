/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.vml.Path.d.ts" />
/// <reference path="dojox.gfx.path.TextPath.d.ts" />
module dojox.gfx.vml{
export class TextPath extends dojox.gfx.vml.Path {
text : Object;
fontStyle : Object;
getText () : Object;
setText (newText:any) : any;
getFont () : Object;
setFont (newFont:any) : any;
_setText () : any;
_setFont () : any;
}
}
