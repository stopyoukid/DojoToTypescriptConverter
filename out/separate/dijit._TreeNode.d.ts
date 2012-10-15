/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit{
export class _TreeNode extends dijit._Widget {
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
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
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
item : any;
isTreeNode : bool;
isExpandable : bool;
isExpanded : bool;
state : String;
attributeMap : Object;
_expandDeferred : Object;
_wipeOut : Object;
indent : number;
_setIndentAttr (indent:any) : any;
markProcessing () : any;
unmarkProcessing () : any;
_updateItemClasses (item:any) : any;
_applyClassAndStyle (item:any,lower:any,upper:any) : any;
_updateLayout () : any;
_setExpando (processing:bool) : any;
expand () : any;
collapse () : any;
setChildItems (items:any) : any;
getTreePath () : any;
getIdentity () : any;
makeExpandable () : any;
_onLabelFocus (evt:any) : any;
setSelected (selected:bool) : any;
setFocusable (selected:bool) : any;
_onClick (evt:any) : any;
_onDblClick (evt:any) : any;
_onMouseEnter (evt:any) : any;
_onMouseLeave (evt:any) : any;
}
}
