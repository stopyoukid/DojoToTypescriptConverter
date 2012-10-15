/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.widget{
export class _CalendarBase extends dijit._Widget {
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
_views : any[];
useFx : bool;
value : any;
footerFormat : String;
displayMonth : Object;
_currentChild : number;
_internalValue : any;
parseInitialValue (value:any) : any;
_makeDate (value:any) : any;
addFx (query:any,fromNode:any) : any;
_isInvalidDate (value:any) : any;
_setValueAttr (value:any) : any;
isDisabledDate (date:any,locale?:String) : any;
onValueSelected (date:any) : any;
_onDateSelected (date:any,formattedValue:any,force:any) : any;
onChange (date:any) : any;
onHeaderClick (e:any) : any;
goToToday () : any;
_transitionVert (direction:number) : any;
_updateTitleStyle () : any;
_slideTable (widget:String,direction:number,callback:Function) : any;
_addView (view:any) : any;
getClassForDate (dateObject:any,locale?:String) : String;
_adjustDisplay (part:String,amount:number,noSlide:any) : any;
}
}
