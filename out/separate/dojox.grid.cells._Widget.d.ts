/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.cells._Base.d.ts" />
module dojox.grid.cells{
export class _Widget extends dojox.grid.cells._Base {
widgetClass : Object;
widget : Object;
getWidgetProps (inDatum:any) : any;
createWidget (inNode:any,inDatum:any,inRowIndex:any) : any;
attachWidget (inNode:any,inDatum:any,inRowIndex:any) : any;
sizeWidget (inNode:any,inDatum:any,inRowIndex:any) : any;
}
}
