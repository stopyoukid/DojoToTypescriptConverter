/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Container.d.ts" />
/// <reference path="dijit._Contained.d.ts" />
module dijit.layout{
export class _LayoutWidget extends dijit._Widget {
isContainer : bool;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
getParent () : any;
_getSibling (which:String) : any;
getPreviousSibling () : any;
getNextSibling () : any;
getIndexInParent () : number;
isLayoutContainer : bool;
_borderBox : Object;
_contentBox : Object;
resize (changeSize?:Object,resultSize?:Object) : any;
layout () : any;
_setupChild (child:any) : any;
}
}
