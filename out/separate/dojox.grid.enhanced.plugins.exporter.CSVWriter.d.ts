/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced.plugins.exporter._ExportWriter.d.ts" />
module dojox.grid.enhanced.plugins.exporter{
export class CSVWriter extends dojox.grid.enhanced.plugins.exporter._ExportWriter {
_separator : String;
_newline : String;
_headers : any[];
_dataRows : any[];
_formatCSVCell (cellValue:String) : String;
}
}
