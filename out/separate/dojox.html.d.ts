/// <reference path="Object.d.ts" />
/// <reference path="dojo.NodeList.d.ts" />
module dojox.html{
export var _base : Object;
export var ellipsis : Object;
export var styles : Object;
export function _adjustCssPaths (cssUrl:any,cssText:any) : any;
export function _adjustHtmlPaths (htmlUrl:any,cont:any) : any;
export function _snarfStyles (cssUrl:String,cont:String,styles:any[]) : any;
export function _snarfScripts (cont:any,byRef:any) : any;
export function evalInGlobal (code:any,appendNode:any) : any;
export function set (node:HTMLElement,cont:String,params?:Object) : any;
export function set (node:HTMLElement,cont:HTMLElement,params?:Object) : any;
export function set (node:HTMLElement,cont:dojo.NodeList,params?:Object) : any;
export function insertCssRule (selector:String,declaration:String,styleSheetName:String) : String;
export function removeCssRule (selector:String,declaration:String,styleSheetName:String) : bool;
export function getStyleSheet (styleSheetName:String) : any;
export function getDynamicStyleSheet (styleSheetName:String) : any;
export function enableStyleSheet (styleSheetName:String) : any;
export function disableStyleSheet (styleSheetName:any) : any;
export function activeStyleSheet (title:any) : any;
export function getPreferredStyleSheet () : any;
export function getToggledStyleSheets () : any[];
export function getStyleSheets () : Object;
}
