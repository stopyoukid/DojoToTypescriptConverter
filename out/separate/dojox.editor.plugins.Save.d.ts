/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class Save extends dijit._editor._Plugin {
url : String;
logResults : Object;
_save () : any;
save (content:any) : any;
onSuccess (resp:any,ioargs:any) : any;
onError (error:any,ioargs:any) : any;
}
}
