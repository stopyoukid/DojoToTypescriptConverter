module dojox.form{
export class _BusyButtonMixin{
isBusy : bool;
busyLabel : String;
timeout : Object;
useIcon : Object;
_label : any;
_initTimeout : any;
_timeout : Object;
label : any;
postMixInProperties () : any;
postCreate () : any;
makeBusy () : any;
cancel () : any;
resetTimeout (timeout:number) : any;
setLabel (content:String,timeout:number) : any;
_clicked (e:any) : any;
}
}
