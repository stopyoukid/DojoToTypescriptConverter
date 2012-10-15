/// <reference path="Object.d.ts" />
module dojox.math.stats{
export function sd (a:any) : number;
export function variance (a:any) : number;
export function bestFit (a:any,xProp?:String,yProp?:String) : Object;
export function forecast (a:any,x:number,xProp?:String,yProp?:String) : number;
export function mean (a:any) : number;
export function min (a:any) : number;
export function max (a:any) : number;
export function median (a:any) : number;
export function mode (a:any) : number;
export function sum (a:any) : number;
export function approxLin (a:any,pos:number) : number;
export function summary (a:any,alreadySorted?:bool) : any;
}
