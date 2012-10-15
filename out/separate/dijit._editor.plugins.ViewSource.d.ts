/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dijit._editor.plugins{
export class ViewSource extends dijit._editor._Plugin {
stripScripts : bool;
stripComments : bool;
stripIFrames : Object;
readOnly : bool;
_vsFocused : Object;
_ieFixNode : Object;
_sourceShown : any;
_pluginList : any[];
_resizeHandle : Object;
_readOnly : Object;
toggle () : any;
_showSource (source:bool) : any;
_resize () : any;
_createSourceView () : any;
_stripScripts (html:String) : any;
_stripComments (html:String) : any;
_stripIFrames (html:String) : any;
_filter (html:String) : any;
setSourceAreaCaret () : any;
}
}
