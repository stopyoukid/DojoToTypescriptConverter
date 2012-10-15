/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class AutoUrlLink extends dijit._editor._Plugin {
_template : String;
_saved : any;
_keyPress (evt:any) : any;
_recognize (args:any) : any;
_inLink (node:HTMLElement) : any;
_findLastEditingNode (node:HTMLElement) : any;
_findUrls (node:HTMLElement,bm:HTMLElement,bmOff:number) : any;
}
}
