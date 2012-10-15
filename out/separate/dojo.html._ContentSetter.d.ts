/// <reference path="Object.d.ts" />
module dojo.html{
export class _ContentSetter{
node : any;
content : any;
id : String;
cleanContent : bool;
extractContent : bool;
parseContent : bool;
parserScope : String;
startup : bool;
parseResults : Object;
set (cont?:String,params?:Object) : any;
setContent () : any;
empty () : any;
onBegin () : any;
onEnd () : any;
tearDown () : any;
onContentError (err:any) : any;
_mixin (params:any) : any;
_parse () : any;
_onError (type:any,err:any,consoleText:any) : any;
}
}
