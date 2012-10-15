/// <reference path="Object.d.ts" />
/// <reference path="dijit.Toolbar.d.ts" />
module dojox.sketch{
export class Toolbar extends dijit.Toolbar {
figure : Object;
plugins : any[];
shapeGroup : any;
_plugins : any[];
setFigure (f:any) : any;
addGroupItem (item:any,group:any) : any;
reset () : any;
_setShape (s:any) : any;
}
}
