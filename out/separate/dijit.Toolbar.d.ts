/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._KeyNavContainer.d.ts" />
module dijit{
export class Toolbar extends dijit._Widget {
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
focusedChild : dijit._Widget;
tabIndex : number;
_keyNavCodes : Object;
connectKeyNavHandlers (prevKeyCodes:any,nextKeyCodes:any) : any;
startupKeyNavChildren () : any;
addChild (widget:any,insertIndex?:number) : any;
focus () : any;
focusFirstChild () : any;
focusLastChild () : any;
focusNext () : any;
focusPrev () : any;
focusChild (widget:any,last:bool) : any;
_startupChild (widget:any) : any;
_onContainerFocus (evt:any) : any;
_onContainerKeypress (evt:any) : any;
_onChildBlur (widget:any) : any;
_getFirstFocusableChild () : any;
_getLastFocusableChild () : any;
_getNextFocusableChild (child:dijit._Widget,dir:number) : any;
}
}
