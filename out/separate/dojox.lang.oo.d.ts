/// <reference path="Object.d.ts" />
module dojox.lang.oo{
export function makeDecorator (decorator:Function) : any;
export function makeDecorator (decorator:Object) : any;
export function filter (bag:Object,map:Object) : any;
export function applyDecorator (decorator:Function,name:String,newValue:Object,oldValue:Object) : any;
export function __mixin (target:Object,source:Object,decorator:any,filter:any,mixer:any) : Object;
export function mixin (target:Object,source:Object) : Object;
export function mixin (target:Object,...source:Object[]) : Object;
export function rearrange (bag:Object,map:Object) : Object;
}
