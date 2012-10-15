/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.shape.Surface.d.ts" />
module dojox.gfx.vml{
export class Surface extends dojox.gfx.shape.Surface {
width : Object;
height : Object;
setDimensions (width:String,height:String) : any;
getDimensions () : Object;
}
}
