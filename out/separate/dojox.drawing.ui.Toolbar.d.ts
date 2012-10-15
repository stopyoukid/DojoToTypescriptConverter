/// <reference path="Object.d.ts" />
module dojox.drawing.ui{
export class Toolbar{
padding : number;
margin : number;
size : number;
radius : number;
toolPlugGap : number;
strSelected : Object;
strTools : Object;
strPlugs : Object;
buttons : any[];
plugins : any[];
selected : Object;
util : any;
toolDrawing : Object;
drawing : any;
width : any;
height : any;
orient : Object;
horizontal : any;
makeButtons () : any;
onRenderStencil (stencil:Object) : any;
addTool () : any;
addPlugin () : any;
addBack () : any;
onToolClick (button:Object) : any;
onPlugClick (button:Object) : any;
_mixprops (props:any[],objNode:Object) : any;
}
}
