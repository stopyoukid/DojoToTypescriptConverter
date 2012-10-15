/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class NormalizeIndentOutdent extends dijit._editor._Plugin {
indentBy : number;
indentUnits : String;
_queryCommandEnabled (command:any) : any;
_indentImpl (html:String) : any;
_indentElement (node:any) : any;
_outdentElement (node:any) : any;
_outdentImpl (html:String) : any;
_indentList (listItem:any) : any;
_outdentList (listItem:any) : any;
_isEmpty (node:any) : any;
_isIndentableElement (tag:any) : any;
_convertIndent (indent:any) : any;
_isLtr () : any;
_isInlineFormat (tag:any) : any;
_getTagName (node:any) : any;
_isRootInline (node:any) : any;
_isTextElement (node:any) : any;
}
}
