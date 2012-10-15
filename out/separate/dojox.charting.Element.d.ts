/// <reference path="Object.d.ts" />
module dojox.charting{
export class Element{
group : any;
htmlElements : any[];
dirty : bool;
_events : any[];
trailingSymbol : String;
createGroup (creator?:any) : any;
purgeGroup () : any;
cleanGroup (creator?:any) : any;
destroyHtmlElements () : any;
destroy () : any;
getTextWidth (s:any,font:any) : any;
getTextWithLimitLength (s?:String,font?:String,limitWidth?:number,truncated?:any) : any;
getTextWithLimitCharCount (s?:String,font?:String,wcLimit?:number,truncated?:any) : any;
_plotFill (fill:any,dim:any,offsets:any) : any;
_shapeFill (fill:any,bbox:any) : any;
_pseudoRadialFill (fill:any,center:any,radius:any,start:any,end:any) : any;
}
}
