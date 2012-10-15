/// <reference path="Object.d.ts" />
module dijit{
export class _Container{
isContainer : bool;
containerNode : any;
buildRendering () : any;
addChild (widget:any,insertIndex?:number) : any;
removeChild (widget:dijit._Widget) : any;
hasChildren () : bool;
destroyDescendants (preserveDom:bool) : any;
_getSiblingOfChild (child:any,dir:number) : any;
getIndexOfChild (child:any) : number;
startup () : any;
}
}
