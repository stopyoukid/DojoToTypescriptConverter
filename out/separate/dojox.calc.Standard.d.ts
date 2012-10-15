/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.calc{
export class Standard extends dijit._Widget {
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
readStore : Object;
writeStore : Object;
functions : any[];
commandIndex : number;
hasDisplay : Object;
handle : Object;
commandList : any[];
executorLoaded () : any;
saveFunction (name:any,args:any,body:any) : any;
loadStore (store:any,isReadOnly:any) : any;
parseTextbox () : any;
cycleCommands (count:any,node:any,event:any) : any;
cycleCommandUp () : any;
cycleCommandDown () : any;
insertMinus () : any;
print (text:any,isRight:any) : any;
setTextboxValue (widget:any,val:any) : any;
putInAnsIfTextboxIsHighlighted (node:any) : any;
clearText () : any;
insertOperator (newText:any) : any;
insertText (newText:any) : any;
}
}
