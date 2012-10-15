module dojox.charting.scaler.linear{
export function buildScaler (min:number,max:number,span:number,kwArgs:Object) : Object;
export function buildTicks (scaler:Object,kwArgs:Object) : Object;
export function getTransformerFromModel (scaler:Object) : Function;
export function getTransformerFromPlot (scaler:Object) : Function;
}
