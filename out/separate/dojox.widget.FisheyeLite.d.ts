/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.widget{
export class FisheyeLite extends dijit._Widget {
durationIn : number;
durationOut : number;
properties : Object;
units : String;
_target : Object;
_runningIn : Object;
_runningOut : Object;
easeIn () : any;
easeOut () : any;
show () : any;
hide () : any;
_makeAnims () : any;
onSelected (e:Object) : any;
}
}
