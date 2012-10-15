/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.image{
export class ThumbnailPicker extends dijit._Widget {
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
imageStore : Object;
size : number;
thumbHeight : number;
thumbWidth : number;
useLoadNotifier : bool;
useHyperlink : bool;
hyperlinkTarget : String;
isClickable : bool;
isScrollable : bool;
isHorizontal : bool;
autoLoad : bool;
linkAttr : String;
imageThumbAttr : String;
imageLargeAttr : String;
pageSize : number;
titleAttr : String;
_thumbs : any[];
_thumbIndex : number;
_maxPhotos : number;
_loadedImages : Object;
widgetid : any;
_scrollerSize : number;
_sizeProperty : any;
_totalSize : number;
isInitialized : bool;
_offsetAttr : String;
_sizeAttr : String;
_scrollAttr : String;
_loadInProgress : Object;
_noImages : bool;
_loadingImages : Object;
init () : any;
getClickTopicName () : String;
getShowTopicName () : String;
setDataStore (dataStore:any,request:any,paramNames:any) : any;
reset () : any;
isVisible (index:any) : any;
resize (dim:any) : any;
_next () : any;
_prev () : any;
_checkLoad (img:any,index:any) : any;
_showThumbs (index:number) : any;
markImageLoaded (index:any) : any;
_setThumbClass (thumb:HTMLElement,className:String) : any;
_loadNextPage () : any;
_loadImage (data:any,index:any,callback:any) : any;
_updateNavControls () : any;
}
}
