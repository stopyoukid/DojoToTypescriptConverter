/// <reference path="Object.d.ts" />
module dojox.charting.scaler.primitive{
export function buildScaler (min:number,max:number,span:number,kwArgs:Object) : any;
export function buildTicks (scaler:Object,kwArgs:Object) : Object;
export function getTransformerFromModel (scaler:Object) : Function;
export function getTransformerFromPlot (scaler:Object) : Function;
}
