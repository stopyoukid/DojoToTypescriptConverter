/// <reference path="Object.d.ts" />
/// <reference path="dijit._editor._Plugin.d.ts" />
module dojox.editor.plugins{
export class Smiley extends dijit._editor._Plugin {
emoticonMarker : String;
emoticonImageClass : String;
dropDown : Object;
i18n : Object;
emoticonImageRegexp : Object;
_preFilterEntities (value:String) : any;
_postFilterEntities (value:String) : any;
_decode (str:any,ascii:any) : any;
_encode (str:any) : any;
}
}
