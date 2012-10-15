/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins.filter._DataExpr.d.ts" />
module dojox.grid.enhanced.plugins.filter{
export class NumberExpr extends dojox.grid.enhanced.plugins.filter._DataExpr {
_convertDataToExpr (dataValue:any) : number;
}
}
