/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.calc{
export class Grapher extends dijit._Widget {
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
checkboxIndex : number;
functionMode : number;
expressionIndex : number;
colorIndex : number;
dropDownIndex : number;
tooltipIndex : number;
colorBoxFieldsetIndex : number;
statusIndex : number;
chartIndex : number;
funcNumberIndex : number;
evaluatedExpression : number;
functionRef : number;
dirty : bool;
funcNumber : number;
rowCount : number;
array : any[];
addXYAxes (chart:any) : any;
selectAll () : any;
deselectAll () : any;
drawOne (i:any) : any;
onDraw () : any;
erase (i:any) : any;
onErase () : any;
onDelete () : any;
createFunction () : any;
setStatus (i:any,status:any) : any;
changedColor () : any;
makeDirty () : any;
checkDirty1 () : any;
checkDirty () : any;
draw (chart:any,functionToGraph:Function,params:any) : any;
generatePoints (funcToGraph:Function,x:String,y:String,width:number,minX:number,maxX:number,minY:number,maxY:number) : any;
}
}
