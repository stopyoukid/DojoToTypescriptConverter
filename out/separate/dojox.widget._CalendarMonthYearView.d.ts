/// <reference path="Object.d.ts" />
/// <reference path="dojox.widget._CalendarView.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class _CalendarMonthYearView extends dojox.widget._CalendarView {
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
displayedYears : number;
monthContainer : any;
yearContainer : any;
_decBtn : any;
_incBtn : any;
_cachedDate : Object;
_monthNames : Object;
_displayedYear : any;
_year : Object;
_month : String;
_setValueAttr (value:any) : any;
_getMonthNames (format:any) : any;
_populateMonths () : any;
_populateYears (year:any) : any;
_updateSelectedYear () : any;
_updateSelectedMonth () : any;
_updateSelectedNode (query:any,filter:any) : any;
onOk (evt:any) : any;
onCancel (evt:any) : any;
}
}
