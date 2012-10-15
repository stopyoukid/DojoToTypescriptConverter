/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dijit._editor.plugins{
export class FullScreen extends dijit._editor._Plugin {
zIndex : number;
_origState : Object;
_origiFrameState : Object;
_resizeHandle : Object;
isFullscreen : bool;
_editorResizeHolder : any;
_oldOverflow : String;
_oldBodyParentOverflow : String;
_resizeHandle2 : Object;
_rst : Object;
_resizer : Object;
toggle () : any;
_containFocus (e:any) : any;
_resizeEditor () : any;
_getAltViewNode () : any;
_setFullScreen (full:any) : any;
}
}
