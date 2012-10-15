/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.widget{
export class _CalendarView extends dijit._Widget {
headerClass : String;
useHeader : Object;
header : Object;
cloneClass (clazz:any,n:any,before:any) : any;
_setText (node:any,text:any) : any;
getHeader () : any;
onValueSelected (date:any) : any;
adjustDate (date:any,amount:any) : any;
onDisplay () : any;
onBeforeDisplay () : any;
onBeforeUnDisplay () : any;
}
}
