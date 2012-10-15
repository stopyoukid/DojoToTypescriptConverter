/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.CompositeWire.d.ts" />
module dojox.wire{
export class TextAdapter extends dojox.wire.CompositeWire {
delimiter : any;
_addSegment (text:String,segment:String) : String;
}
}
