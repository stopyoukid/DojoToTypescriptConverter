/// <reference path="Object.d.ts" />
/// <reference path="dojo.Stateful.d.ts" />
module dijit{
export class _WidgetBase extends dojo.Stateful {
id : String;
lang : String;
dir : String;
style : any;
title : String;
tooltip : String;
baseClass : String;
srcNodeRef : HTMLElement;
domNode : HTMLElement;
containerNode : HTMLElement;
_started : bool;
_blankGif : String;
_connects : any[];
_subscribes : any[];
params : any;
_created : Object;
_beingDestroyed : Object;
_destroyed : Object;
_attrPairNames : Object;
create (params?:Object,srcNodeRef?:HTMLElement) : any;
_applyAttributes () : any;
_getSetterAttributes () : any;
postMixInProperties () : any;
buildRendering () : any;
postCreate () : any;
startup () : any;
destroyRecursive (preserveDom?:bool) : any;
destroy (preserveDom:bool) : any;
destroyRendering (preserveDom?:bool) : any;
destroyDescendants (preserveDom?:bool) : any;
uninitialize () : any;
_setClassAttr (value:String) : any;
_setStyleAttr (value:String) : any;
_attrToDom (attr:String,value:String) : any;
_getAttrNames (name:any) : any;
_set (name:String,value:any) : any;
getDescendants () : any;
getChildren () : any;
connect (obj:Object,event:String,method:String) : any;
disconnect (handles:any) : any;
subscribe (topic:String,method:String) : any;
unsubscribe (handle:Object) : any;
isLeftToRight () : bool;
placeAt (reference:String,position?:String) : any;
}
}
