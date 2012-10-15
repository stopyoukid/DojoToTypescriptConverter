/// <reference path="Object.d.ts" />
/// <reference path="dojo._Url.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dojox.av._Media.d.ts" />
module dojox.av{
export class FLVideo extends dijit._Widget {
mediaUrl : String;
initialVolume : number;
autoPlay : bool;
bufferTime : number;
minBufferTime : number;
updateTime : number;
isDebug : bool;
percentDownloaded : number;
_flashObject : any;
flashMedia : any;
allowScriptAccess : String;
allowNetworking : String;
wmode : String;
allowFullScreen : bool;
status : String;
_positionHandle : Object;
duration : any;
isBuffering : any;
_prevPos : any;
_prevStatus : any;
_initStatus () : any;
getTime () : number;
onLoad (mov:any) : any;
onDownloaded (percent:number) : any;
onSwfSized (data:Object) : any;
onMetaData (data:Object,evt:Object) : any;
onPosition (time:number) : any;
onStart (data:Object) : any;
onPlay (data:Object) : any;
onPause (data:Object) : any;
onEnd (data:Object) : any;
onStop () : any;
onBuffer (isBuffering:bool) : any;
onError (data:Object,url:String) : any;
onStatus (data:Object) : any;
onPlayerStatus (data:Object) : any;
onResize () : any;
_figureStatus () : any;
_eventFactory () : Object;
_sub (topic:any,method:any) : any;
_normalizeVolume (vol:any) : any;
_normalizeUrl (_url:any) : any;
_swfPath : dojo._Url;
_subs : any[];
_cons : any[];
isPlaying : bool;
isStopped : bool;
_updateHandle : Object;
play (newUrl?:String) : any;
pause () : any;
seek (time:number) : any;
volume (vol:number) : number;
_checkBuffer (time:number,bufferLength:number) : any;
_update () : any;
}
}
