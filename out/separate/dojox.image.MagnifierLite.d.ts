/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.image{
export class MagnifierLite extends dijit._Widget {
glassSize : number;
scale : number;
glassNode : Object;
surfaceNode : Object;
img : Object;
offset : Object;
_imageSize : Object;
_zoomSize : Object;
_createGlass () : any;
_adjustScale () : any;
_showGlass (e:any) : any;
_hideGlass (e:any) : any;
_placeGlass (e:any) : any;
_setImage (e:any) : any;
}
}
