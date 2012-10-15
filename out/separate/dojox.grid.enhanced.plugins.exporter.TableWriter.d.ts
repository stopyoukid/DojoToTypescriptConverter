/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins.exporter._ExportWriter.d.ts" />
module dojox.grid.enhanced.plugins.exporter{
export class TableWriter extends dojox.grid.enhanced.plugins.exporter._ExportWriter {
_viewTables : any[];
_tableAttrs : Object;
_getTableAttrs (tagName:String) : String;
_getRowClass (arg_obj:any) : String;
_getColumnClass (arg_obj:any) : String;
}
}
