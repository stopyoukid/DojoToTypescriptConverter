/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit.form{
export class _ComboBoxMenu extends dijit._Widget {
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
_messages : Object;
value : any;
_setValueAttr (value:Object) : any;
onChange (value:Object) : any;
onPage (direction:number) : any;
_createOption (item:Object,labelFunc:any) : any;
createOptions (results:any[],dataObject:any,labelFunc:Function) : any;
clearResultList () : any;
_onMouseDown (evt:any) : any;
_onMouseUp (evt:any) : any;
_onMouseOver (evt:any) : any;
_onMouseOut (evt:any) : any;
_focusOptionNode (node:HTMLElement) : any;
_blurOptionNode () : any;
_highlightNextOption () : any;
highlightFirstOption () : any;
highlightLastOption () : any;
_highlightPrevOption () : any;
_page (up:bool) : any;
pageUp () : any;
pageDown () : any;
getHighlightedOption () : any;
handleKey (evt:any) : any;
}
}
