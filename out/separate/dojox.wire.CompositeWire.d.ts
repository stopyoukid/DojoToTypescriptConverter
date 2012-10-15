/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.Wire.d.ts" />
module dojox.wire{
export class CompositeWire extends dojox.wire.Wire {
_getValue (object:Object) : any;
_setValue (object:Object,value:Object) : any;
_initializeChildren (children:Object) : any;
}
}
