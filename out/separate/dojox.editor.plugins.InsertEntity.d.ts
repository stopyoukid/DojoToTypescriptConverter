/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class InsertEntity extends dijit._editor._Plugin {
dropDown : Object;
_preFilterEntities (s:String) : any;
_postFilterEntities (s:String) : any;
}
}
