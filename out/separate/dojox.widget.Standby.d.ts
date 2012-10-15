/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class Standby extends dijit._Widget {
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
_underlayNode : HTMLElement;
_imageNode : HTMLElement;
_centerNode : HTMLElement;
image : String;
imageText : String;
text : String;
centerIndicator : String;
_displayed : bool;
_resizeCheck : Object;
color : String;
duration : number;
_parent : HTMLElement;
zIndex : String;
_ieFixNode : Object;
_anim : Object;
_overflowDisabled : Object;
_oldOverflow : String;
_oldBodyParentOverflow : String;
show () : any;
hide () : any;
isVisible () : bool;
_size () : any;
_cloneStyles (list:any[]) : any;
_fadeIn () : any;
_fadeOut () : any;
_ignore (event:any) : any;
_scrollerWidths () : any;
_setTextAttr (text:String) : any;
_setColorAttr (c:String) : any;
_setImageTextAttr (text:String) : any;
_setImageAttr (url:any) : any;
_setCenterIndicatorAttr (indicator:String) : any;
_disableOverflow () : any;
_enableOverflow () : any;
}
}
