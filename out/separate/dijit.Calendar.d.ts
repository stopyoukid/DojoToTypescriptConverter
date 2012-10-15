/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit{
export class Calendar extends dijit._Widget {
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
cssStateNodes : Object;
hovering : bool;
active : bool;
_mouseDown : Object;
_stateClasses : any;
_cssMouseEvent (event:any) : any;
_setStateClass () : any;
_trackMouseState (node:HTMLElement,clazz:String) : any;
value : any;
datePackage : String;
dayWidth : String;
tabIndex : number;
currentFocus : any;
_currentNode : Object;
dateClassObj : Object;
dateFuncObj : Object;
dateLocaleModule : Object;
_isValidDate (value:any) : any;
setValue (value:any) : any;
_getValueAttr () : any;
_setValueAttr (value:any,priorityChange:bool) : any;
_setText (node:any,text:any) : any;
_populateGrid () : any;
goToToday () : any;
_adjustDisplay (part:String,amount:number) : any;
_setCurrentFocusAttr (date:any,forceFocus:bool) : any;
focus () : any;
_onMonthSelect (newMonth:number) : any;
_onDayClick (evt:any) : any;
_onDayMouseOver (evt:any) : any;
_onDayMouseOut (evt:any) : any;
_onDayMouseDown (evt:any) : any;
_onDayMouseUp (evt:any) : any;
handleKey (evt:any) : any;
_onKeyPress (evt:any) : any;
onValueSelected (date:any) : any;
onChange (date:any) : any;
_isSelectedDate (dateObject:any,locale?:String) : any;
isDisabledDate (dateObject:any,locale?:String) : bool;
getClassForDate (dateObject:any,locale?:String) : String;
}
}
