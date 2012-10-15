/// <reference path="Object.d.ts" />
module dojox.geo.charting{
export class Map{
defaultColor : String;
highlightColor : String;
series : any[];
dataStore : any;
containerSize : Object;
surface : Object;
container : any;
setMarkerData (markerFile:String) : any;
setDataStore (dataStore:any,query:Object) : any;
addSeries (series:any) : any;
_init (shapeData:any) : any;
_appendMarker (markerData:any) : any;
_createZoomingCursor () : any;
onFeatureClick (feature:any) : any;
onFeatureOver (feature:any) : any;
onZoomEnd (feature:any) : any;
}
}
