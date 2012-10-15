/// <reference path="Object.d.ts" />
module dojox.lang.utils{
export function merge (object:Object,mixin:Object) : any;
export function coerceType (target:Object,source:Object) : any;
export function updateWithObject (target:Object,source:Object,conv?:bool) : Object;
export function updateWithPattern (target:Object,source:Object,pattern:Object,conv?:bool) : Object;
}
