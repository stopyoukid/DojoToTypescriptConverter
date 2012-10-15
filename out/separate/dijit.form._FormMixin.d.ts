/// <reference path="Object.d.ts" />
module dijit.form{
export class _FormMixin{
state : String;
_descendants : Object;
_childConnections : any[];
_childWatches : any[];
reset () : any;
validate () : any;
setValues (val:any) : any;
_setValueAttr (obj:Object) : any;
getValues () : any;
_getValueAttr () : any;
isValid () : any;
onValidStateChange (isValid:any) : any;
_getState () : any;
disconnectChildren () : any;
connectChildren (inStartup:bool) : any;
startup () : any;
destroy () : any;
}
}
