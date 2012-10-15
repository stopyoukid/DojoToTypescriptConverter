/// <reference path="Object.d.ts" />
module dojox.io{
export function httpParse (httpStream:String,topHeaders?:String,partial?:bool) : any;
export function xhrMultiPart (args:any) : any;
export function xhrScriptPlugin (url:String,callbackParamName:String,httpAdapter?:Function) : any;
export function xhrWindowNamePlugin (url:String,httpAdapter?:Function,trusted?:bool) : any;
}
