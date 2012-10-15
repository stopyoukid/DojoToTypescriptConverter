/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins.filter._ConditionExpr.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class _DataExpr extends dojox.grid.enhanced.plugins.filter._ConditionExpr {
_convertData : Object;
_convertArgs : Object;
_colArg : any;
_value : Object;
getValue () : String;
}
}
