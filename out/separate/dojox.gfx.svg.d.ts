/// <reference path="Object.d.ts" />
module dojox.gfx.svg{
export var useSvgWeb : bool;
export function getRef (name:String) : HTMLElement;
export function createSurface (parentNode:HTMLElement,width:String,height:String) : any;
export function attachNode (node:HTMLElement) : any;
export function attachSurface (node:HTMLElement) : any;
}
