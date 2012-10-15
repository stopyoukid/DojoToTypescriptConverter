/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class NormalizeStyle extends dijit._editor._Plugin {
mode : String;
condenseSpans : Object;
_browserFilter : any;
_convertToSemantic (node:HTMLElement) : any;
_normalizeTags (node:any) : any;
_convertToCss (node:HTMLElement) : any;
_condenseSpans (node:any) : any;
_isInline (tag:any) : any;
_inserthtmlImpl (html:any) : any;
}
}
