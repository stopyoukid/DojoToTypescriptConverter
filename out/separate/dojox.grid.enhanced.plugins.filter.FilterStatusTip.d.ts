/// <reference path="Object.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class FilterStatusTip{
_pos : Object;
_removedCriterias : any[];
_rules : any[];
statusPane : Object;
_statusHeader : Object;
_dlg : Object;
destroy () : any;
showDialog (pos_x:number,pos_y:number,columnIdx:any) : any;
closeDialog () : any;
_updateStatus (columnIdx:any) : any;
_createStatusDetail () : any;
_addButtonForRules () : any;
_getCriteriaStr (c:any,rowIdx:number) : any;
_modifyFilter () : any;
}
}
