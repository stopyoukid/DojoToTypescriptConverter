/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
module dojox.fx{
export class Shadow extends dijit._Widget {
shadowPng : String;
shadowThickness : number;
shadowOffset : number;
opacity : number;
animate : bool;
node : HTMLElement;
pieces : Object;
nodeList : Object;
disabled : bool;
_makePiece (name:any,vertAttach:any,vertCoord:any,horzAttach:any,horzCoord:any,sizing:any) : any;
setOpacity (n:number,animArgs?:Object) : any;
setDisabled (disabled:bool) : any;
resize (args:any) : any;
}
}
