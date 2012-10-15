/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.atom.widget{
export class FeedViewer extends dijit._Widget {
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
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
feedViewerTableBody : Object;
feedViewerTable : Object;
entrySelectionTopic : String;
url : String;
xmethod : bool;
localSaveOnly : bool;
_feed : Object;
_currentSelection : Object;
_includeFilters : any[];
alertsEnabled : bool;
_subscriptions : any[];
atomIO : Object;
childWidgets : any[];
clear () : any;
setFeedFromUrl (url:String) : any;
setFeed (feed:any) : any;
_displayDateForEntry (entry:any) : any;
appendGrouping (titleText:String) : any;
appendEntry (entry:any) : any;
deleteEntry (entryRow:any) : any;
_removeEntry (entry:any,success:bool) : any;
_rowSelected (evt:any) : any;
_deselectCurrentSelection () : any;
_isEditable (entry:any) : any;
onEntrySelected (entry:any) : any;
_isRelativeURL (url:String) : any;
_calculateBaseURL (fullURL:String,currentPageRelative:bool) : any;
_isFilterAccepted (entry:any) : any;
addCategoryIncludeFilter (filter:any) : any;
removeCategoryIncludeFilter (filter:any) : any;
_handleEvent (entrySelectionEvent:any) : any;
_addEntry (entry:any) : any;
}
}
