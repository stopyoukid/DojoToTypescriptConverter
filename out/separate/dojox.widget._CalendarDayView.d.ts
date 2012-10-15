/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget._CalendarView.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class _CalendarDayView extends dojox.widget._CalendarView {
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
datePart : String;
dayWidth : String;
_addedFx : Object;
_lastDate : any;
_onDayClick (e:any) : any;
_setValueAttr (value:any) : any;
_populateDays () : any;
}
}
