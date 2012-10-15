/// <reference path="Object.d.ts" />
module dojo.mouseButtons{
export var LEFT : number;
export var MIDDLE : number;
export var RIGHT : number;
export function isButton (e:any,button:number) : bool;
export function isLeft (e:any) : bool;
export function isMiddle (e:any) : bool;
export function isRight (e:any) : bool;
}
