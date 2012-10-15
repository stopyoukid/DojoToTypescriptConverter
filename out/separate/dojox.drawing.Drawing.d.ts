module dojox.drawing{
export class Drawing{
ready : bool;
mode : String;
width : number;
height : number;
canvas : Object;
plugins : any[];
undo : Object;
anchors : Object;
uiStencils : Object;
stencils : Object;
currentType : any[];
currentStencil : Object;
id : any;
util : any;
keys : any;
mouse : Object;
tools : Object;
stencilTypes : Object;
stencilTypeMap : Object;
srcRefNode : any;
domNode : any;
widgetId : any;
_createCanvas () : any;
resize (box:Object) : any;
startup () : any;
getShapeProps (data:Object,mode:any) : any;
addPlugin (plugin:Object) : any;
initPlugins () : any;
onSurfaceReady () : any;
addUI (type:String,options:Object) : any;
addStencil (type:String,options:Object) : any;
removeStencil (stencil:Object) : any;
removeAll () : any;
selectAll () : any;
toSelected (func:String) : any;
exporter () : any[];
importer (objects:any[]) : any;
changeDefaults (newStyle:Object,value:bool) : any;
onRenderStencil (stencil:Object) : any;
onDeleteStencil (stencil:Object) : any;
registerTool (type:String) : any;
getConstructor (abbr:String) : any;
setTool (type:String) : any;
unSetTool () : any;
}
}
