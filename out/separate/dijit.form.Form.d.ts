/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit.form._FormMixin.d.ts" />
/// <reference path="dijit.layout._ContentPaneResizeMixin.d.ts" />
module dijit.form{
export class Form extends dijit._Widget {
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
doLayout : bool;
isLayoutContainer : bool;
_childOfLayoutWidget : any;
_needLayout : bool;
_singleChild : any;
_contentBox : Object;
_startChildren () : any;
_checkIfSingleChild () : any;
resize (changeSize:any,resultSize:any) : any;
_layout (changeSize:any,resultSize:any) : any;
_layoutChildren () : any;
name : String;
action : String;
method : String;
encType : String;
accept : String;
target : String;
attributeMap : Object;
nameAttrSetting : any;
execute (formContents:Object) : any;
onExecute () : any;
_setEncTypeAttr (value:String) : any;
onReset (e?:any) : bool;
_onReset (e:any) : any;
_onSubmit (e:any) : any;
onSubmit (e?:any) : bool;
submit () : any;
}
}
