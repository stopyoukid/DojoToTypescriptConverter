/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.Wire.d.ts" />
module dojox.wire{
export class XmlWire extends dojox.wire.Wire {
_getValue (object:HTMLElement) : any;
_setValue (object:HTMLElement,value:String) : any;
_getNodeValue (node:HTMLElement,exp:String) : any;
_setNodeValue (node:HTMLElement,exp:String,value:String) : any;
_getChildNode (node:HTMLElement,name:String) : any;
_getDocument (node:HTMLElement) : any;
}
}
