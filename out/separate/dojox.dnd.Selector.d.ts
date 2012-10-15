/// <reference path="Object.d.ts" />
/// <reference path="dojo.dnd.Selector.d.ts" />
module dojox.dnd{
export class Selector extends dojo.dnd.Selector {
isSelected (node:String) : bool;
selectNode (node:String,add?:bool) : any;
deselectNode (node:String) : any;
selectByBBox (left:number,top:number,right:number,bottom:number,add?:bool) : any;
_isBoundedByBox (node:String,left:number,top:number,right:number,bottom:number) : bool;
shift (toNext:bool,add?:bool) : any;
_getNodeId (nodeId:String,toNext:bool) : any;
}
}
