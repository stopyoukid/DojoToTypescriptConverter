/// <reference path="Object.d.ts" />
/// <reference path="dojox.gfx.shape.Surface.d.ts" />
module dojox.gfx.canvas{
export class Surface extends dojox.gfx.shape.Surface {
width : Object;
height : Object;
pendingRender : Object;
pendingImageCount : number;
setDimensions (width:String,height:String) : any;
getDimensions () : Object;
_render () : any;
makeDirty () : any;
downloadImage (img:any,url:String) : any;
onImageLoad () : any;
connect () : any;
disconnect () : any;
}
}
