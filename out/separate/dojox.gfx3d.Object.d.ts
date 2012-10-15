/// <reference path="Object.d.ts" />
module dojox.gfx3d{
export class Object{
object : Object;
matrix : Object;
fillStyle : Object;
strokeStyle : Object;
shape : Object;
cache : Object;
renderer : Object;
parent : Object;
setObject (newObject:any) : any;
setTransform (matrix:any) : any;
applyRightTransform (matrix:any) : any;
applyLeftTransform (matrix:any) : any;
applyTransform (matrix:any) : any;
setFill (fill:Object) : any;
setStroke (stroke:Object) : any;
toStdFill (lighting:any,normal:any) : any;
invalidate () : any;
destroy () : any;
render (camera:any) : any;
draw (lighting:any) : any;
getZOrder () : any;
getOutline () : any;
}
}
