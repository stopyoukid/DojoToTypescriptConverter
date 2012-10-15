/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dijit._editor.plugins{
export class EnterKeyHandling extends dijit._editor._Plugin {
blockNodeForEnter : String;
_checkListLater : bool;
bogusHtmlContent : String;
blockNodes : RegExp;
_pressedEnterInBlock : any;
onKeyPressed (e:any) : any;
handleEnterKey (e:any) : any;
_adjustNodeAndOffset (node:HTMLElement,offset:number) : any;
removeTrailingBr (container:any) : any;
}
}
