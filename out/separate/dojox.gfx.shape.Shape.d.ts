/// <reference path="Object.d.ts" />
module dojox.gfx.shape{
export class Shape{
shape : Object;
bbox : Object;
fillStyle : Object;
strokeStyle : Object;
matrix : Object;
parent : Object;
parentMatrix : Object;
rawNode : HTMLElement;
getNode () : HTMLElement;
getShape () : Object;
getTransform () : any;
getFill () : Object;
getStroke () : Object;
getParent () : Object;
getBoundingBox () : any;
getTransformedBoundingBox () : any;
getEventSource () : HTMLElement;
setShape (shape:Object) : any;
setFill (fill:Object) : any;
setStroke (stroke:Object) : any;
setTransform (matrix:any) : any;
_applyTransform () : any;
moveToFront () : any;
moveToBack () : any;
_moveToFront () : any;
_moveToBack () : any;
applyRightTransform (matrix:any) : any;
applyLeftTransform (matrix:any) : any;
applyTransform (matrix:any) : any;
removeShape (silently?:bool) : any;
_setParent (parent:Object,matrix:any) : any;
_updateParentMatrix (matrix:any) : any;
_getRealMatrix () : any;
}
}
