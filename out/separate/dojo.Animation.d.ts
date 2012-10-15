/// <reference path="Object.d.ts" />
module dojo{
export class Animation{
duration : number;
curve : any;
repeat : number;
rate : number;
delay : number;
beforeBegin : any;
onBegin : any;
onAnimate : any;
onEnd : any;
onPlay : any;
onPause : any;
onStop : any;
_percent : number;
_startRepeatCount : number;
_reversed : bool;
easing () : any;
_fire (evt:any,args?:any[]) : any;
play (delay?:number,gotoStart?:bool) : any;
_play (gotoStart:any) : any;
pause () : any;
gotoPercent (percent:number,andPlay?:bool) : any;
stop (gotoEnd?:bool) : any;
status () : String;
_cycle () : any;
_clearTimer () : any;
}
}
