/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit.layout._ContentPaneResizeMixin.d.ts" />
module dijit.layout{
export class ContentPane extends dijit._Widget {
doLayout : bool;
isLayoutContainer : bool;
_childOfLayoutWidget : any;
_needLayout : bool;
_singleChild : any;
_contentBox : Object;
_startChildren () : any;
_checkIfSingleChild () : any;
resize (changeSize:any,resultSize:any) : any;
_layout (changeSize:any,resultSize:any) : any;
_layoutChildren () : any;
href : String;
content : String;
extractContent : bool;
parseOnLoad : bool;
parserScope : String;
preventCache : bool;
preload : bool;
refreshOnShow : bool;
loadingMessage : String;
errorMessage : String;
isLoaded : bool;
ioArgs : Object;
isContainer : bool;
onLoadDeferred : any;
attributeMap : Object;
stopParser : Object;
template : bool;
_hrefChanged : Object;
_isDownloaded : bool;
_resizeCalled : Object;
_wasShown : Object;
_xhrDfd : Object;
_contentSetter : Object;
_changeSize : any;
_resultSize : any;
setHref (href:String) : any;
_setHrefAttr (href:String) : any;
setContent (data:String) : any;
_setContentAttr (data:String) : any;
_getContentAttr () : any;
cancel () : any;
_isShown () : any;
refresh () : any;
_load () : any;
_onLoadHandler (data:any) : any;
_onUnloadHandler () : any;
_setContent (cont:String,isFakeContent:bool) : any;
_onError (type:any,err:any,consoleText:any) : any;
_scheduleLayout (changeSize:any,resultSize:any) : any;
onLoad (data:any) : any;
onUnload () : any;
onDownloadStart () : any;
onContentError (error:any) : any;
onDownloadError (error:any) : any;
onDownloadEnd () : any;
}
}
