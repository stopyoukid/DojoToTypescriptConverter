/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class PrettyPrint extends dijit._editor._Plugin {
indentBy : number;
lineLength : number;
entityMap : Object;
}
}
