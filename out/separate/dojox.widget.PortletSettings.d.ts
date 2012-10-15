/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
module dojox.widget{
export class PortletSettings extends dijit._Container {
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
baseClass : String;
ioArgs : Object;
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
create (params:any,srcNodeRef:any) : any;
postMixInProperties () : any;
setHref (href:String) : any;
_setHrefAttr (href:String) : any;
setContent (data:String) : any;
_setContentAttr (data:String) : any;
_getContentAttr () : any;
cancel () : any;
uninitialize () : any;
destroyRecursive (preserveDom:bool) : any;
_isShown () : any;
_onShow () : any;
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
portletIconClass : String;
portletIconHoverClass : String;
portlet : any;
domNode : any;
postCreate () : any;
_setPortletAttr (portlet:any) : any;
toggle () : any;
}
}
