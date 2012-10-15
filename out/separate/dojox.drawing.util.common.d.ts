/// <reference path="Object.d.ts" />
module dojox.drawing.util.common{
export var objects : Object;
export function radToDeg (n:any) : number;
export function degToRad (n:any) : number;
export function angle (obj:any,snap:any) : any;
export function oppAngle (ang:any) : any;
export function radians (o:any) : any;
export function length (o:any) : any;
export function lineSub (x1:number,y1:number,x2:number,y2:number,amt:number) : Object;
export function argsToObj () : any;
export function distance () : number;
export function slope (p1:Object,p2:Object) : number;
export function pointOnCircle (cx:number,cy:number,radius:number,angle:number) : any;
export function constrainAngle (obj:any,min:number,max:number) : Object;
export function snapAngle (obj:any,ca:number) : Object;
export function idSetStart (num:any) : any;
export function uid (str:any) : String;
export function abbr (type:any) : any;
export function mixin (o1:any,o2:any) : any;
export function register (obj:Object) : any;
export function byId (id:String) : any;
export function attr (elem:Object,prop:any,value:any,squelchErrors:any) : any;
}
