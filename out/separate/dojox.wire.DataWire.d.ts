/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.Wire.d.ts" />
module dojox.wire{
export class DataWire extends dojox.wire.Wire {
dataStore : any;
_getValue (object:Object) : any;
_setValue (object:Object,value:any) : any;
_getAttributeValue (item:Object,attribute:String) : any;
_setAttributeValue (item:Object,attribute:String,value:any) : any;
}
}
