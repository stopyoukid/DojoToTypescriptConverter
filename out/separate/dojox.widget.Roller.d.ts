/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.widget{
export class Roller extends dijit._Widget {
delay : number;
autoStart : bool;
itemSelector : String;
durationIn : number;
durationOut : number;
items : any[];
_idx : number;
_anim : any;
rolling : bool;
_timeout : any;
makeAnims () : any;
_setupConnects () : any;
start () : any;
_run () : any;
stop () : any;
_setIndex (i:any) : any;
}
}
