/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit{
export class TitlePane extends dijit.layout.ContentPane {
templateString : String;
templatePath : String;
widgetsInTemplate : bool;
_skipNodeCache : bool;
_earlyTemplatedStartup : bool;
_attachPoints : any;
_attachEvents : any[];
declaredClass : any;
_startupWidgets : Object;
_supportingWidgets : Object;
_templateCache : Object;
_stringRepl (tmpl:any) : any;
_fillContent (source:HTMLElement) : any;
_attachTemplateNodes (rootNode:HTMLElement,getAttrFunc?:Function) : any;
getCachedTemplate (templatePath:String,templateString?:String,alwaysUseString?:any) : any;
cssStateNodes : Object;
hovering : bool;
active : bool;
_mouseDown : Object;
_stateClasses : any;
_cssMouseEvent (event:any) : any;
_setStateClass () : any;
_trackMouseState (node:HTMLElement,clazz:String) : any;
open : bool;
toggleable : bool;
tabIndex : String;
duration : number;
hideNode : any;
wipeNode : any;
_wipeIn : Object;
_wipeOut : Object;
titleBarNode : Object;
_titleBarClass : String;
_setOpenAttr (open:bool,animate:bool) : any;
_setToggleableAttr (canToggle:bool) : any;
toggle () : any;
_setCss () : any;
_onTitleKey (e:any) : any;
_onTitleClick () : any;
setTitle (title:String) : any;
_dxfindParent () : any;
}
}
