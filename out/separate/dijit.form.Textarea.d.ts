/// <reference path="Object.d.ts" />
/// <reference path="dijit.form.SimpleTextarea.d.ts" />
module dijit.form{
export class Textarea extends dijit.form.SimpleTextarea {
_previousNewlines : number;
_strictMode : bool;
_needsHelpShrinking : Object;
_busyResizing : bool;
_setTimeoutHandle : Object;
_getHeight (textarea:any) : any;
_estimateHeight (textarea:any) : any;
_shrink () : any;
resize () : any;
}
}
