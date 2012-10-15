/// <reference path="Object.d.ts" />
module dojox.gfx{
export class VectorFont{
_entityRe : any;
name : any;
family : any;
_defaultLeading : number;
_decodeEntitySequence (str:any) : any;
_parse (svg:String,url:String) : any;
_clean () : any;
load (url:String) : any;
initialized () : bool;
_round (n:any) : any;
_leading (unit:any) : any;
_normalize (str:any) : any;
_getWidth (glyphs:any) : any;
_getLongestLine (lines:any) : any;
_trim (lines:any) : any;
_split (chars:any,nLines:any) : any;
_getSizeFactor (size:any) : any;
_getFitFactor (lines:any,w:any,h:any,l:any) : any;
_getBestFit (chars:any,w:any,h:any,ldng:any) : any;
_getBestFlow (chars:any,w:any,scale:any) : any;
getWidth (text:String,scale?:number) : any;
getLineHeight (scale?:number) : number;
getCenterline (scale?:number) : any;
getBaseline (scale?:number) : number;
draw (group:any,textArgs:any,fontArgs:any,fillArgs:any,strokeArgs?:any) : any;
onLoadBegin (url:String) : any;
onLoad (font:any) : any;
}
}
