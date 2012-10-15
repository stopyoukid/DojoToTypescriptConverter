/// <reference path="Object.d.ts" />
module dojox.charting{
export class Chart3D{
node : Object;
surface : Object;
view : Object;
theme : any;
walls : any[];
plots : any[];
generate () : any;
invalidate () : any;
render () : any;
addPlot (plot:any) : any;
removePlot (plot:any) : any;
addWall (wall:any) : any;
removeWall (wall:any) : any;
_add (array:any,item:any) : any;
_remove (array:any,item:any) : any;
_generateWalls () : any;
_generatePlots () : any;
}
}
