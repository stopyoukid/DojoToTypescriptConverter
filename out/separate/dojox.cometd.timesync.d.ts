module dojox.cometd{
export class timesync{
_window : number;
_lags : any[];
_offsets : any[];
lag : Object;
offset : Object;
samples : number;
getServerTime () : any;
getServerDate () : any;
setTimeout (call:Function,atTimeOrDate:any) : any;
_in (msg:Object) : any;
_out (msg:any) : any;
}
}
