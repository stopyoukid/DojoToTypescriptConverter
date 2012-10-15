/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="dijit._PaletteMixin.d.ts" />
module dojox.editor.plugins{
export class EntityPalette extends dijit._Widget {
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
defaultTimeout : number;
timeoutChangeRate : number;
value : String;
_selectedCell : number;
_currentFocus : HTMLElement;
_xDim : number;
_yDim : number;
tabIndex : String;
cellClass : String;
dyeClass : String;
_cells : any[];
_preparePalette (choices:any,titles:any) : any;
focus () : any;
_onCellClick (evt:any) : any;
_setCurrent (node:HTMLElement) : any;
_setValueAttr (value:String,priorityChange:any) : any;
onChange (value:String) : any;
_navigateByKey (increment:any,typeCount:any) : any;
_getDye (cell:HTMLElement) : any;
showPreview : bool;
showCode : bool;
showEntityName : bool;
palette : String;
paletteClass : String;
_palette : any;
_onCellMouseEnter (e:any) : any;
_displayDetails (cell:HTMLElement) : any;
}
}
