/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.layout{
export class ExpandoPane extends dijit.layout.ContentPane {
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
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
easeOut : any;
easeIn : any;
duration : number;
startExpanded : bool;
previewOpacity : number;
previewOnDblClick : bool;
_animConnects : any[];
_isHorizontal : Object;
_container : Object;
_closedSize : any;
_titleHeight : any;
_currentSize : Object;
_showSize : any;
_showing : bool;
_hasSizes : Object;
_showAnim : Object;
_hideAnim : Object;
_isonlypreview : bool;
_previewShowing : bool;
_startupSizes () : any;
_afterResize (e:any) : any;
_setupAnims () : any;
preview () : any;
toggle () : any;
_hideWrapper () : any;
_showEnd () : any;
_hideEnd () : any;
_trap (e:any) : any;
}
}
