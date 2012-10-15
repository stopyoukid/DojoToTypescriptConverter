/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dijit.layout{
export class _Splitter extends dijit._Widget {
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
container : any;
live : bool;
horizontal : Object;
_factor : any;
_cookieName : String;
cover : Object;
_resize : Object;
fake : Object;
_handlers : Object;
_computeMaxSize () : any;
_startDrag (e:any) : any;
_drag (e:any,forceResize:any) : any;
_onMouse (e:any) : any;
_stopDrag (e:any) : any;
_cleanupHandlers () : any;
_onKeyPress (e:any) : any;
}
}
