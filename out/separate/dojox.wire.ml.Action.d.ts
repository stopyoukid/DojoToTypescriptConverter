/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.wire.ml{
export class Action extends dijit._Widget {
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
trigger : any;
triggerEvent : any;
triggerTopic : any;
_triggerHandle : Object;
_connect () : any;
_disconnect () : any;
run () : any;
_run () : any;
}
}
