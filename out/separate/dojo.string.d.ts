/// <reference path="Object.d.ts" />
module dojo.string{
export function rep (str:String,num:number) : String;
export function pad (text:String,size:number,ch?:String,end?:bool) : String;
export function substitute (template:String,map:Object,transform?:Function,thisObject?:Object) : any;
export function substitute (template:String,map:any[],transform?:Function,thisObject?:Object) : any;
export function trim (str:String) : String;
}
