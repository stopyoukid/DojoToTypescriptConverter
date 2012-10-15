/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.Rotator.d.ts" />
module dojox.widget{
export class AutoRotator extends dojox.widget.Rotator {
suspendOnHover : bool;
duration : number;
autoStart : bool;
pauseOnManualChange : bool;
cycles : number;
random : bool;
reverse : bool;
playing : bool;
_resumeDuration : number;
_endTime : String;
_timer : Object;
_suspended : bool;
play (skipCycleDecrement?:bool,skipDuration?:bool) : any;
pause () : any;
_now () : any;
_resetTimer () : any;
_cycle (manual?:bool) : any;
}
}
