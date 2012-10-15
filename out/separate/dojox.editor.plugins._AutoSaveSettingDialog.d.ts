/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.editor.plugins{
export class _AutoSaveSettingDialog extends dijit._Widget {
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
dialogTitle : String;
dialogDescription : String;
paramName : String;
paramLabel : String;
btnOk : String;
btnCancel : String;
dialogId : String;
textBoxId : String;
_value : number;
show () : any;
hide () : any;
onOk () : any;
onCancel () : any;
_onKeyDown (evt:any) : any;
_onChange (val:String) : any;
_setValueAttr (val:String) : any;
_getValueAttr () : any;
_isValidValue (val:String) : any;
}
}
