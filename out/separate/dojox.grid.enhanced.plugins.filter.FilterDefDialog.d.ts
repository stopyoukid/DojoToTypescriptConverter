/// <reference path="Object.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class FilterDefDialog{
curColIdx : number;
_relOpCls : String;
_savedCriterias : Object;
_defPane : Object;
builder : Object;
_dataTypeMap : Object;
_clearWithoutRefresh : Object;
__alreadyResizedForIE6 : Object;
_criteriasChanged : bool;
defaultType : String;
onMoveColumn (sourceViewIndex:any,destViewIndex:any,cellIndex:any,targetIndex:any,before:any) : any;
destroy () : any;
_setupData () : any;
setFilter (rules:any,ruleRelation:any) : any;
getFilter () : any;
getColumnLabelByValue (v:any) : any;
getConditionLabelByValue (type:any,c:any) : any;
addCriteriaBoxes (cnt:number) : any;
removeCriteriaBoxes (cnt:number,isIdx?:bool) : any;
getCriteria (idx:number) : any;
getExprForCriteria (rule:any) : any;
getExprForColumn (value:any,colIdx:any,type:any,condition:any) : any;
getColumnType (colIndex:number) : any;
clearFilter (noRefresh:any) : any;
showDialog (colIndex:number) : any;
closeDialog () : any;
onFilter (e:any) : any;
onClearFilter (e:any) : any;
onCancel (e:any) : any;
onRendered (cbox:any) : any;
_onSetFilter (filterDef:any) : any;
_prepareDialog (colIndex:number) : any;
_defineFilter () : any;
_updateCBoxTitles () : any;
_updatePane () : any;
canFilter () : any;
_closeDlgAndUpdateGrid () : any;
}
}
