/// <reference path="Object.d.ts" />
module dojox{
export class analytics{
_data : any[];
_id : number;
sendInterval : number;
inTransitRetry : number;
dataUrl : Object;
sendMethod : String;
maxRequestSize : any;
_base : Object;
schedulePusher (interval:number) : any;
addData (dataType:any,data:any) : any;
checkData () : any;
onPushComplete (results:any) : any;
}
}
