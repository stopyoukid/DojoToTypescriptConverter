module dojox.av{
export class _Media{
mediaUrl : String;
initialVolume : number;
autoPlay : bool;
bufferTime : number;
minBufferTime : number;
updateTime : number;
id : String;
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
onClick (evt:Object) : any;
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
destroy () : any;
}
}
