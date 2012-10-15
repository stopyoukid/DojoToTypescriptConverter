module dojox.drawing.ui.dom{
export class Toolbar{
baseClass : String;
buttonClass : String;
iconClass : String;
drawing : Object;
toolNodes : Object;
createIcon (node:any,constr:any) : any;
createTool (node:any) : any;
parse () : any;
onClick (type:String) : any;
onSetTool (type:String) : any;
}
}
