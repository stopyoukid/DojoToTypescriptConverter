/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit.form._FormMixin.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._DialogMixin.d.ts" />
module dijit{
export class TooltipDialog extends dijit.layout.ContentPane {
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
state : String;
_descendants : Object;
_childConnections : any[];
_childWatches : any[];
reset () : any;
validate () : any;
setValues (val:any) : any;
_setValueAttr (obj:Object) : any;
getValues () : any;
_getValueAttr () : any;
isValid () : any;
onValidStateChange (isValid:any) : any;
_getState () : any;
disconnectChildren () : any;
connectChildren (inStartup:bool) : any;
_firstFocusItem : Object;
_lastFocusItem : Object;
execute (formContents:Object) : any;
onCancel () : any;
onExecute () : any;
_onSubmit () : any;
_getFocusItems () : any;
autofocus : bool;
_currentOrientClass : any;
_setTitleAttr (title:String) : any;
orient (node:HTMLElement,aroundCorner:String,corner:String) : any;
focus () : any;
onOpen (pos:Object) : any;
_onKey (evt:any) : any;
}
}
