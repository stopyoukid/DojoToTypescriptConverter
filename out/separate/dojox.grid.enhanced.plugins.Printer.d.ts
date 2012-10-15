/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid.enhanced._Plugin.d.ts" />
module dojox.grid.enhanced.plugins{
export class Printer extends dojox.grid.enhanced._Plugin {
_printFrame : any;
_mixinGrid () : any;
printGrid (args?:any) : any;
printSelected (args?:any) : any;
exportToHTML (args?:any,onExported?:any) : any;
exportSelectedToHTML (args?:any) : String;
_print (htmlStr:String) : any;
_wrapHTML (title:String,cssFiles:any[],body_content:String) : String;
normalizeRowHeight (doc:any) : any;
_formalizeArgs (args:any) : Object;
}
}
