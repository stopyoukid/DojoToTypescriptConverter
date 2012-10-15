/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._CssStateMixin.d.ts" />
module dijit.form{
export class _FormWidget extends dijit._Widget {
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
name : String;
alt : String;
value : String;
type : String;
tabIndex : number;
disabled : bool;
intermediateChanges : bool;
scrollOnFocus : bool;
attributeMap : Object;
nameAttrSetting : any;
_onChangeActive : bool;
_resetValue : any;
_lastValueReported : any;
_pendingOnChange : bool;
_onChangeHandle : Object;
_setDisabledAttr (value:bool) : any;
setDisabled (disabled:bool) : any;
focus () : any;
compare (val1:any,val2:any) : any;
onChange (newValue:any) : any;
_handleOnChange (newValue:any,priorityChange?:bool) : any;
setValue (value:String) : any;
getValue () : any;
_onMouseDown (e:any) : any;
}
}
