/// <reference path="Object.d.ts" />
module dojox.math{
export var _base : Object;
export function toRadians (n:number) : number;
export function toDegrees (n:number) : number;
export function degreesToRadians (n:number) : number;
export function radiansToDegrees (n:number) : number;
export function _gamma (z:any) : any;
export function factorial (n:number) : number;
export function permutations (n:number,k:number) : number;
export function combinations (n:number,r:number) : number;
export function bernstein (t:number,n:number,i:number) : number;
export function gaussian () : number;
export function range (a:number,b?:number,step?:number) : any[];
export function distance (a:any[],b:any[]) : number;
export function midpoint (a:any[],b:any[]) : any[];
export function round (value:number,places?:number,increment?:number,v?:any,p?:any,m?:any) : number;
}
