/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dijit{
export class _TimePicker extends dijit._Widget {
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
clickableIncrement : String;
visibleIncrement : String;
visibleRange : String;
value : String;
_visibleIncrement : number;
_clickableIncrement : number;
_totalIncrements : number;
constraints : any;
filterString : String;
_clickableIncrementDate : Object;
_visibleIncrementDate : Object;
_visibleRangeDate : Object;
_refDate : Object;
_maxIncrement : number;
_highlighted_option : Object;
_keyboardSelected : Object;
serialize (val:any,options?:Object) : any;
setValue (value:any) : any;
_setValueAttr (date:any) : any;
_setFilterStringAttr (val:any) : any;
isDisabledDate (dateObject:any,locale?:String) : bool;
_getFilteredNodes (start:number,maxNum:number,before:bool,lastNode:HTMLElement) : any;
_showText () : any;
_setConstraintsAttr (constraints:Object) : any;
_buttonMouse (e:any) : any;
_createOption (index:number) : any;
_onOptionSelected (tgt:Object) : any;
onChange (time:any) : any;
_highlightOption (node:HTMLElement,highlight:bool) : any;
onmouseover (e:any) : any;
onmouseout (e:any) : any;
_mouseWheeled (e:any) : any;
_onArrowUp (count:any) : any;
_onArrowDown (count:any) : any;
handleKey (e:any) : any;
}
}
