/// <reference path="Object.d.ts" />
module dojox.editor.plugins{
export class _SpellCheckScriptMultiPart{
ACTION_QUERY : Object;
ACTION_UPDATE : String;
callbackHandle : String;
maxBufferLength : number;
delimiter : String;
label : String;
_timeout : number;
SEC : number;
serviceEndPoint : String;
exArgs : Object;
_result : any[];
_counter : number;
_queue : any[];
isWorking : bool;
send (content:String,action?:String) : any;
_finalizeCollection (action:any) : any;
onLoad (data:String) : any;
setWaitingTime (seconds:number) : any;
}
}
