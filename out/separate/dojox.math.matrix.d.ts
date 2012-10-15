/// <reference path="Object.d.ts" />
module dojox.math.matrix{
export var iDF : number;
export var ALMOST_ZERO : number;
export function multiply (a:any[],b:any[]) : any[];
export function product () : any[];
export function sum () : any;
export function inverse (a:any[]) : any[];
export function determinant (a:any[]) : number;
export function create (a:number,b:number,value?:number) : any[];
export function ones (a:number,b:number) : any[];
export function zeros (a:number,b:number) : any[];
export function identity (size:number,scale?:number) : any[];
export function adjoint (a:any[]) : any[];
export function transpose (a:any[]) : any[];
export function format (a:any[],points?:number) : String;
export function copy (a:any[]) : any[];
export function scale (a:any[],factor:number) : any;
}
