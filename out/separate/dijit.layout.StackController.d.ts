/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dijit.layout{
export class StackController extends dijit._Widget {
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
containerId : String;
buttonWidget : String;
_currentChild : Object;
pane2button : Object;
pane2connects : Object;
pane2watches : Object;
onStartup (info:Object) : any;
onAddChild (page:any,insertIndex?:number) : any;
onRemoveChild (page:any) : any;
onSelectChild (page:any) : any;
onButtonClick (page:any) : any;
onCloseButtonClick (page:any) : any;
adjacent (forward:bool) : any;
onkeypress (e:any) : any;
onContainerKeyPress (info:Object) : any;
}
}
