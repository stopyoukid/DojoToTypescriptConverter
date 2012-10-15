/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class Heading extends dijit._WidgetBase {
back : String;
href : String;
moveTo : String;
transition : String;
label : Object;
iconBase : String;
_view : Object;
_body : any;
_head : any;
_btn : any;
onClick (e:any) : any;
setLabel (label:any) : any;
goTo (moveTo:any,href:any) : any;
}
}
