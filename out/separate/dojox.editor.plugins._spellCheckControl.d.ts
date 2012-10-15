/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.editor.plugins{
export class _spellCheckControl extends dijit._Widget {
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
textId : String;
selectId : String;
isChanged : bool;
ignoreChange : bool;
isOpen : bool;
onSkip () : any;
onSkipAll () : any;
onAddToDic () : any;
onReplace () : any;
onReplaceAll () : any;
onCancel () : any;
onEnter () : any;
focus () : any;
_cancel (evt:any) : any;
_enter (evt:any) : any;
_unfoundTextBoxChange () : any;
_setUnfoundWordAttr (value:String) : any;
_getUnfoundWordAttr () : any;
_setSuggestionListAttr (values:any[]) : any;
_getSelectedWordAttr () : any;
_setDisabledAttr (disabled:bool) : any;
_setInProgressAttr (show:bool) : any;
}
}
