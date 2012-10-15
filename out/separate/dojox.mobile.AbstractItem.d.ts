/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class AbstractItem extends dijit._WidgetBase {
icon : String;
iconPos : String;
href : String;
hrefTarget : String;
moveTo : String;
scene : String;
clickable : bool;
url : String;
transition : String;
transitionDir : number;
callback : Object;
sync : Object;
label : String;
toggle : bool;
_duration : number;
_text : Object;
_ws : Object;
inheritParams () : any;
findCurrentView (moveTo:any) : any;
transitionTo (moveTo:any,href:any,url:any,scene:any) : any;
_parse (text:any) : any;
_instantiate (obj:Object,node:HTMLElement,parent:dijit._Widget) : any;
createDomButton (refNode:HTMLElement,toNode?:HTMLElement) : any;
select (deselect?:bool) : any;
defaultClickAction () : any;
getParentWidget () : any;
}
}
