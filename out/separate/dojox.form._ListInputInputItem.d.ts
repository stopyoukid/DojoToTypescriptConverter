/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.form{
export class _ListInputInputItem extends dijit._Widget {
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
closeButtonNode : HTMLElement;
readOnlyItem : bool;
value : String;
regExp : String;
_editBox : dijit._Widget;
_handleKeyDown : any;
_setReadOnlyItemAttr (value:bool) : any;
_createInlineEditBox () : any;
edit () : any;
_onCloseEdit (value:String) : any;
_onEdit () : any;
_setDisabledAttr (value:bool) : any;
_getValueAttr () : any;
_onCloseEnter () : any;
_onCloseLeave () : any;
onEdit () : any;
onChange (value:String) : any;
}
}
