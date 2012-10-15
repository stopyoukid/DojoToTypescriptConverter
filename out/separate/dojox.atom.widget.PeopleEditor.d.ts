/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.atom.widget{
export class PeopleEditor extends dijit._Widget {
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
_rows : any[];
_editors : any[];
_index : number;
_numRows : number;
_createEditors (name:String,email:String,uri:String,index:number,widgetName:String) : any;
_createEditor (value:String,id:String,name:String,labelNode:HTMLElement,node:HTMLElement) : any;
_removeEditor (event:any) : any;
_add () : any;
getValues () : any;
}
}
