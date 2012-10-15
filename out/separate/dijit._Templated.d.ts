module dijit{
export class _Templated{
templateString : String;
templatePath : String;
widgetsInTemplate : bool;
_skipNodeCache : bool;
_earlyTemplatedStartup : bool;
_attachPoints : any;
_attachEvents : any[];
declaredClass : any;
domNode : any;
_startupWidgets : Object;
_supportingWidgets : Object;
containerNode : any;
_templateCache : Object;
_stringRepl (tmpl:any) : any;
buildRendering () : any;
_fillContent (source:HTMLElement) : any;
_attachTemplateNodes (rootNode:HTMLElement,getAttrFunc?:Function) : any;
startup () : any;
destroyRendering () : any;
getCachedTemplate (templatePath:String,templateString?:String,alwaysUseString?:any) : any;
}
}
