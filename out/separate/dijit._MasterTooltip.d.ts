/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dijit{
export class _MasterTooltip extends dijit._Widget {
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
duration : number;
bgIframe : Object;
fadeIn : Object;
fadeOut : Object;
_onDeck : Object;
isShowingNow : bool;
aroundNode : Object;
show (innerHTML:String,aroundNode:HTMLElement,position?:any,rtl?:bool) : any;
orient (node:HTMLElement,aroundCorner:String,tooltipCorner:String,spaceAvailable:Object,aroundNodeCoords:Object) : any;
hide (aroundNode:any) : any;
_onHide () : any;
}
}
