/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dijit._editor{
export class _Plugin{
editor : any;
iconClassPrefix : String;
button : any;
command : String;
useDefaultCommand : bool;
buttonClass : dijit._Widget;
disabled : bool;
enabled : any;
checked : any;
_attrPairNames : Object;
params : Object;
_connects : any[];
getLabel (key:String) : String;
_initButton () : any;
destroy () : any;
connect (o:any,f:any,tf:any) : any;
updateState () : any;
setEditor (editor:any) : any;
setToolbar (toolbar:any) : any;
set (name:String,value:any) : any;
get (name:any) : any;
_setDisabledAttr (disabled:any) : any;
_getAttrNames (name:any) : any;
_set (name:String,value:any) : any;
}
}
