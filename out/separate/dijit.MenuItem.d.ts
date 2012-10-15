/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit{
export class MenuItem extends dijit._Widget {
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
getParent () : any;
_getSibling (which:String) : any;
getPreviousSibling () : any;
getNextSibling () : any;
getIndexInParent () : number;
cssStateNodes : Object;
hovering : bool;
active : bool;
_mouseDown : Object;
_stateClasses : any;
_cssMouseEvent (event:any) : any;
_setStateClass () : any;
_trackMouseState (node:HTMLElement,clazz:String) : any;
attributeMap : Object;
accelKey : String;
disabled : bool;
_onHover () : any;
_onUnhover () : any;
_onClick (evt:any) : any;
focus () : any;
_setSelected (selected:any) : any;
setLabel (content:String) : any;
setDisabled (disabled:bool) : any;
_setDisabledAttr (value:bool) : any;
_setAccelKeyAttr (value:String) : any;
}
}
