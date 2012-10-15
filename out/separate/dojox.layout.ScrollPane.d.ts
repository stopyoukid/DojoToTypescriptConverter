/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.layout{
export class ScrollPane extends dijit.layout.ContentPane {
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
_line : any;
_lo : any;
_offset : number;
orientation : String;
autoHide : Object;
_dir : String;
_vertical : bool;
_size : Object;
_helpLine : Object;
_showAnim : Object;
_hideAnim : Object;
_edge : String;
_scroll : String;
_calc (e:any) : any;
_enter (e:any) : any;
_leave (e:any) : any;
}
}
