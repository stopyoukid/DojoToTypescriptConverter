/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget.RollingList.d.ts" />
module dojox.widget{
export class FilePicker extends dojox.widget.RollingList {
pathSeparator : String;
topDir : String;
pathAttr : String;
selectDirectories : bool;
selectFiles : bool;
_setPathValueAttr (path:String,resetLastExec?:bool,onSet?:Function) : any;
_getPathValueAttr (val?:any) : any;
}
}
