/// <reference path="Object.d.ts" />
/// <reference path="dojo._Url.d.ts" />
module dojox.av{
export class FLAudio{
id : String;
initialVolume : number;
initialPan : number;
isDebug : bool;
statusInterval : number;
_swfPath : dojo._Url;
allowScriptAccess : String;
allowNetworking : String;
_subs : any[];
domNode : Object;
init () : any;
load (options:Object) : String;
doPlay (options:Object) : any;
pause (options:Object) : any;
stop (options:Object) : any;
setVolume (options:Object) : any;
setPan (options:Object) : any;
getVolume (options:Object) : any;
getPan (options:Object) : any;
getPosition (options:Object) : any;
onError (msg:any) : any;
onLoadStatus (events:any[]) : any;
onAllLoaded () : any;
onPlayStatus (events:any[]) : any;
onComplete (events:any[]) : any;
onLoad () : any;
onID3 (evt:any) : any;
destroy () : any;
_sub (topic:any,method:any) : any;
_normalizeVolume (vol:any) : any;
_normalizeUrl (_url:any) : any;
}
}
