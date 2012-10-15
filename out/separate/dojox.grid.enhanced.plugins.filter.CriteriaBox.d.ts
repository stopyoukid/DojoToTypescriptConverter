/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class CriteriaBox extends dijit._Widget {
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
_curValueBox : Object;
_colSelectLabel : any;
_condSelectLabel : any;
_valueBoxLabel : any;
_anyColumnOption : any;
_colOptions : Object;
_isRange : any;
_ruleIndex : any;
_index : any;
_condSelect : any;
_getColumnOptions () : any;
onMoveColumn () : any;
_onChangeColumn (val:any) : any;
onRemove () : any;
_showSelectOrLabel (sel:any,alt:any) : any;
_onChangeCondition (val:any) : any;
_updateValueBox (cond:any) : any;
_checkValidCriteria () : any;
_createValueBox (cls:dijit._Widget,arg:any) : any;
_createRangeBox (cls:dijit._Widget,arg:any) : any;
changeCurrentColumn (selectCurCol:bool) : any;
curColumn () : any;
curCondition () : any;
curValue () : any;
save () : any;
load (obj:any) : any;
getExpr () : any;
isEmpty () : any;
updateRuleTitle (isEmpty:any) : any;
updateRuleIndex (index:any) : any;
setAriaInfo (idx:any) : any;
_getUsableConditions (type:any) : any;
_setConditionsByType (type:String) : any;
_setValueBoxByType (type:String) : any;
_getValueBoxArgByType (type:String) : any;
formatValue (type:any,cond:any,v:any) : any;
_getValueBoxClsInfo (colIndex:number,type:String) : any;
}
}
