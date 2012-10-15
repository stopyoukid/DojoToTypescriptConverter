/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Container.d.ts" />
module dojox.wire.ml{
export class Data extends dijit._Widget {
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
_properties : Object;
_initializeProperties (reset:bool) : any;
getPropertyValue (property:String) : any;
setPropertyValue (property:String,value:any) : any;
}
}
