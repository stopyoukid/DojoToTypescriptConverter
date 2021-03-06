/// <reference path="Object.d.ts" />
module dojox.gfx3d.matrix{
export var identity : any;
export function translate (a:number,b:number,c:number) : any;
export function scale (a:number,b:number,c:number) : any;
export function rotateX (angle:number) : any;
export function rotateXg (degree:number) : any;
export function rotateY (angle:number) : any;
export function rotateYg (degree:number) : any;
export function rotateZ (angle:number) : any;
export function rotateZg (degree:number) : any;
export function cameraTranslate (a:number,b:number,c:number) : any;
export function cameraRotateX (angle:number) : any;
export function cameraRotateXg (degree:number) : any;
export function cameraRotateY (angle:number) : any;
export function cameraRotateYg (degree:number) : any;
export function cameraRotateZ (angle:number) : any;
export function cameraRotateZg (degree:number) : any;
export function normalize (matrix:Object) : any;
export function clone (matrix:any) : any;
export function invert (matrix:any) : any;
export function _multiplyPoint (m:any,x:number,y:number,z:number) : Object;
export function multiplyPoint (matrix:any,a:number,b:any,c:any) : Object;
export function multiplyPoint (matrix:any,a:any,b:any,c:any) : Object;
export function multiply (matrix:any) : any;
export function multiply (...matrix:any[]) : any;
export function _project (m:any,x:number,y:number,z:number) : Object;
export function project (matrix:any,a:number,b:any,c:any) : Object;
export function project (matrix:any,a:any,b:any,c:any) : Object;
export function _degToRad (degree:any) : any;
export function _radToDeg (radian:any) : any;
}
