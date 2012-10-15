/// <reference path="Object.d.ts" />
module dojox.charting{
export class DataChart{
scroll : bool;
comparative : bool;
query : String;
queryOptions : String;
fieldName : String;
chartTheme : any;
displayRange : number;
stretchToFit : bool;
minWidth : number;
minHeight : number;
showing : bool;
label : String;
firstRun : Object;
store : Object;
_events : any[];
onSetInterval : number;
items : any;
dataOffset : number;
dataLength : number;
domNode : Object;
onSetItems : Object;
seriesData : Object;
seriesDataBk : Object;
destroy () : any;
setStore (store:Object,query:any,fieldName:any,queryOptions:any) : any;
show () : any;
hide () : any;
onSet (item:any) : any;
onError (err:any) : any;
onDataReceived (items:any[]) : any;
getProperty (item:any,prop:any) : any;
onData (items:any[]) : any;
fetch () : any;
convertLabels (axis:any) : any;
seriesLabels (val:number) : String;
resizeChart (dim:Object) : any;
}
}
