/// <reference path="Object.d.ts" />
module dojox.charting.plot2d.common{
export function makeStroke (stroke:any) : any;
export function augmentColor (target:any,color:any) : any;
export function augmentStroke (stroke:any,color:any) : any;
export function augmentFill (fill:any,color:any) : any;
export function collectSimpleStats (series:any) : any;
export function calculateBarSize (availableSize:number,opt:Object,clusterSize?:number) : Object;
export function collectStackedStats (series:any) : any;
export function curve (a:any,tension:number) : any;
export function curve (a:any,tension:String) : any;
export function getLabel (number:number,fixed:bool,precision:number) : any;
}
