/// <reference path="Object.d.ts" />
/// <reference path="dojo.NodeList.d.ts" />
module dojo.html{
export function _secureForInnerHtml (cont:String) : String;
export function _emptyNode (node:HTMLElement) : any;
export function _setNodeContent (node:HTMLElement,cont:String) : any;
export function _setNodeContent (node:HTMLElement,cont:HTMLElement) : any;
export function _setNodeContent (node:HTMLElement,cont:dojo.NodeList) : any;
export function set (node:HTMLElement,cont:String,params?:Object) : any;
export function set (node:HTMLElement,cont:HTMLElement,params?:Object) : any;
export function set (node:HTMLElement,cont:dojo.NodeList,params?:Object) : any;
}
