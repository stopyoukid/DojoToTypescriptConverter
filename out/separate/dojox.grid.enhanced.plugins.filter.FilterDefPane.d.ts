/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class FilterDefPane extends dijit._Widget {
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
_addRuleBtnLabel : any;
_cancelBtnLabel : any;
_clearBtnLabel : any;
_filterBtnLabel : any;
_relAll : any;
_relAny : any;
_relMsgFront : any;
_relMsgTail : any;
cboxContainer : Object;
_onRelSelectChange (val:any) : any;
_onAddCBox () : any;
_onCancel () : any;
_onClearFilter () : any;
_onFilter () : any;
_onKey (e:any) : any;
}
}
