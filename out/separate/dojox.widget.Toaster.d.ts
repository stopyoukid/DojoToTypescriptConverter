/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class Toaster extends dijit._Widget {
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
messageTopic : String;
defaultType : String;
positionDirection : String;
positionDirectionTypes : any[];
duration : number;
slideDuration : number;
separator : String;
slideAnim : Object;
_hideTimer : Object;
_stickyMessage : Object;
_scrollConnected : bool;
_handleMessage (message:String) : any;
_capitalize (w:String) : any;
setContent (message:String,messageType:String,duration?:number) : any;
_setContent (message:any) : any;
_cancelHideTimer () : any;
_setHideTimer (duration:any) : any;
_placeClip () : any;
onSelect (e:any) : any;
show () : any;
hide () : any;
}
}
