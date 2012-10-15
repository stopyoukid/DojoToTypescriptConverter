/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.image{
export class Gallery extends dijit._Widget {
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
imageHeight : number;
imageWidth : number;
pageSize : number;
autoLoad : bool;
linkAttr : String;
imageThumbAttr : String;
imageLargeAttr : String;
titleAttr : String;
slideshowInterval : number;
widgetid : any;
thumbPicker : Object;
slideShow : Object;
setDataStore (dataStore:any,request:any,paramNames:any) : any;
reset () : any;
showNextImage (inTimer:bool) : any;
toggleSlideshow () : any;
toggleSlideShow () : any;
showImage (index:any,callback:any) : any;
resize (dim:any) : any;
_centerChildren () : any;
}
}
