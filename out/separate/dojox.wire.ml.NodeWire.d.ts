/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.ml.ChildWire.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.wire.ml{
export class NodeWire extends dojox.wire.ml.ChildWire {
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
titleProperty : any;
titleAttribute : any;
titlePath : any;
_getWires (parent:any) : Object;
}
}
