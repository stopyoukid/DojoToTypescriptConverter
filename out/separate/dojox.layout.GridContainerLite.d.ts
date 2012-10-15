/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout._LayoutWidget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.layout{
export class GridContainerLite extends dijit.layout._LayoutWidget {
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
autoRefresh : bool;
dragHandleClass : any[];
nbZones : number;
doLayout : bool;
isAutoOrganized : bool;
acceptTypes : any[];
colWidths : String;
_border : Object;
_draggedNode : any;
_disabled : Object;
resizeChildAfterDrop (node:HTMLElement,targetArea:Object,indexChild:number) : any;
resizeChildAfterDragStart (node:HTMLElement,sourceArea:Object,indexChild:number) : any;
_isShown () : bool;
_createCells () : any;
_getZonesAttr () : any;
enableDnd () : any;
disableDnd () : any;
_organizeChildren () : any;
_organizeChildrenManually () : any;
_insertChild (child:dijit._Widget,column:number,p?:number) : dijit._Widget;
addService (child:Object,column?:number,p?:number) : any;
_setColWidthsAttr (value:any) : any;
_updateColumnsWidth (manager:Object) : any;
_selectFocus (event:any) : any;
}
}
