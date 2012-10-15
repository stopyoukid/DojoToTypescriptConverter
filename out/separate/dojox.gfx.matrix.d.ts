/// <reference path="Object.d.ts" />
module dojox.gfx.matrix{
export var identity : any;
export var flipX : any;
export var flipY : any;
export var flipXY : any;
export function multiplyPoint (matrix:any,a:number,b:any) : any;
export function multiplyPoint (matrix:any,a:any,b:any) : any;
export function translate (a:number,b:number) : any;
export function scale (a:number,b:number) : any;
export function rotate (angle:number) : any;
export function rotateg (degree:number) : any;
export function skewX (angle:number) : any;
export function skewXg (degree:number) : any;
export function skewY (angle:number) : any;
export function skewYg (degree:number) : any;
export function reflect (a:any,b:any) : any;
export function project (a:any,b:any) : any;
export function normalize (matrix:Object) : any;
export function clone (matrix:any) : any;
export function invert (matrix:any) : any;
export function _multiplyPoint (matrix:any,x:number,y:number) : any;
export function multiply (matrix:any) : any;
export function multiply (...matrix:any[]) : any;
export function _sandwich (matrix:any,x:number,y:number) : any;
export function scaleAt (a:number,b:number,c:number,d:number) : any;
export function rotateAt (angle:number,a:number,b:number) : any;
export function rotategAt (degree:number,a:number,b:number) : any;
export function skewXAt (angle:number,a:number,b:number) : any;
export function skewXgAt (degree:number,a:number,b:number) : any;
export function skewYAt (angle:number,a:number,b:number) : any;
export function skewYgAt (degree:number,a:number,b:any) : any;
export function skewYgAt (degree:number,a:any,b:any) : any;
export function _degToRad (degree:any) : any;
export function _radToDeg (radian:any) : any;
}
