/// <reference path="Object.d.ts" />
/// <reference path="dojox.layout.ContentPane.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.layout{
export class FloatingPane extends dojox.layout.ContentPane {
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
dockable : bool;
resizable : bool;
maxable : bool;
resizeAxis : String;
dockTo : HTMLElement;
duration : number;
iconSrc : String;
contentClass : String;
_showAnim : Object;
_hideAnim : Object;
_dockNode : Object;
_restoreState : Object;
_allFPs : any[];
_startZ : number;
bgIframe : Object;
_naturalState : Object;
_resizeHandle : Object;
_maximized : bool;
_isDocked : Object;
_currentState : any;
setTitle (title:String) : any;
close () : any;
hide (callback?:Function) : any;
show (callback?:Function) : any;
minimize () : any;
maximize () : any;
_restore () : any;
_dock () : any;
bringToTop () : any;
}
}
