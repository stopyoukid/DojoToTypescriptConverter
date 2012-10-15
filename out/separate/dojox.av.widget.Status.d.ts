/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.av.widget{
export class Status extends dijit._Widget {
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
media : any;
duration : any;
isBuffering : any;
setMedia (med:Object) : any;
onMetaData (data:any) : any;
onBuffer (isBuffering:any) : any;
onPosition (time:any) : any;
onStart () : any;
onPlay () : any;
onPaused () : any;
onStop () : any;
onEnd () : any;
onError (evt:any) : any;
onLoad () : any;
setStatus (str:any,isError:any) : any;
toSeconds (time:any) : any;
}
}
