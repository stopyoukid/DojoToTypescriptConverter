/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.image{
export class SlideShow extends dijit._Widget {
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
titleTemplate : String;
noLink : bool;
loop : bool;
hasNav : bool;
images : any[];
pageSize : number;
autoLoad : bool;
autoStart : bool;
fixedHeight : bool;
imageStore : Object;
linkAttr : String;
imageLargeAttr : String;
titleAttr : String;
slideshowInterval : number;
_imageCounter : number;
_tmpImage : HTMLElement;
_currentImage : any;
isInitialized : bool;
imageIndex : number;
_timerCancelled : Object;
_slideId : Object;
_navAnim : Object;
_navShowing : bool;
setDataStore (dataStore:any,request:any,paramNames:any) : any;
reset () : any;
isImageLoaded (index:any) : any;
moveImageLoadingPointer (index:any) : any;
showNextImage (inTimer:bool,forceLoop:any) : any;
toggleSlideShow () : any;
getShowTopicName () : any;
getLoadTopicName () : any;
showImage (index:number,callback?:Function) : any;
_fitSize (force:bool) : any;
_getTopPadding () : any;
_loadNextImage () : any;
_loadImage (index:any,callbackFn:any) : any;
_stop () : any;
_prev () : any;
_next () : any;
_startTimer () : any;
_calcNavDimensions () : any;
_setTitle (title:String) : any;
_fitImage (img:HTMLElement) : any;
_handleClick (e:any) : any;
_showNav (force:bool) : any;
_hideNav (e:any) : any;
_overElement (element:HTMLElement,e:any) : any;
}
}
