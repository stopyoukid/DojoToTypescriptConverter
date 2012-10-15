/// <reference path="Object.d.ts" />
module dojox.charting.themes.gradientGenerator{
export function generateGradientByIntensity (color:any,intensityMap:any[]) : any[];
export function generateFills (colors:any[],fillPattern:Object,lumFrom:number,lumTo:number) : any[];
export function updateFills (themes:any[],fillPattern:Object,lumFrom:number,lumTo:number) : any;
export function generateMiniTheme (colors:any[],fillPattern:Object,lumFrom:number,lumTo:number,lumStroke:number) : any[];
}
