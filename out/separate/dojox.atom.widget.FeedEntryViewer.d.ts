/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.atom.widget{
export class FeedEntryViewer extends dijit._Widget {
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
entrySelectionTopic : String;
_validEntryFields : Object;
displayEntrySections : String;
_displayEntrySections : any[];
enableMenu : bool;
enableMenuFade : bool;
_optionButtonDisplayed : Object;
_entry : Object;
_feed : Object;
_editMode : bool;
_subscriptions : any[];
clear () : any;
clearNodes () : any;
setEntry (entry:any,feed:any,leaveMenuState:bool) : any;
setTitleHeader (titleHeaderNode:HTMLElement,entry:any) : any;
setTitle (titleAnchorNode:any,editMode:bool,entry:any) : any;
setAuthorsHeader (authorHeaderNode:HTMLElement,entry:any) : any;
setAuthors (authorsAnchorNode:HTMLElement,editMode:bool,entry:any) : any;
setContributorsHeader (contributorsHeaderNode:HTMLElement,entry:any) : any;
setContributors (contributorsAnchorNode:HTMLElement,editMode:bool,entry:any) : any;
setIdHeader (idHeaderNode:HTMLElement,entry:any) : any;
setId (idAnchorNode:HTMLElement,editMode:bool,entry:any) : any;
setUpdatedHeader (updatedHeaderNode:HTMLElement,entry:any) : any;
setUpdated (updatedAnchorNode:HTMLElement,editMode:bool,entry:any) : any;
setSummaryHeader (summaryHeaderNode:HTMLElement,entry:any) : any;
setSummary (summaryAnchorNode:HTMLElement,editMode:bool,entry:any) : any;
setContentHeader (contentHeaderNode:HTMLElement,entry:any) : any;
setContent (contentAnchorNode:HTMLElement,editMode:bool,entry:any) : any;
_displaySections () : any;
setDisplaySections (sectionsArray:any[]) : any;
_setDisplaySectionsCheckboxes () : any;
_readDisplaySections () : any;
_toggleCheckbox (checkBox:any) : any;
_toggleOptions (checkBox:any) : any;
_handleEvent (entrySelectionEvent:any) : any;
setFieldValidity (field:String,isValid:bool) : any;
isFieldValid (field:String) : any;
getEntry () : any;
getFeed () : any;
}
}
