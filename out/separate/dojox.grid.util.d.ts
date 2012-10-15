/// <reference path="Object.d.ts" />
module dojox.grid.util{
export var rowIndexTag : String;
export var gridViewTag : String;
export var na : String;
export var mouseEvents : any[];
export var keyEvents : any[];
export function fire (ob:any,ev:any,args:any) : any;
export function setStyleHeightPx (inElement:any,inHeight:any) : any;
export function funnelEvents (inNode:any,inObject:any,inMethod:any,inEvents:any) : any;
export function removeNode (inNode:any) : any;
export function arrayCompare (inA:any,inB:any) : any;
export function arrayInsert (inArray:any,inIndex:any,inValue:any) : any;
export function arrayRemove (inArray:any,inIndex:any) : any;
export function arraySwap (inArray:any,inI:any,inJ:any) : any;
}
