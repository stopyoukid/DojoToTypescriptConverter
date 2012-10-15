/// <reference path="Object.d.ts" />
module dojox.xml.parser{
export function parse (str?:String,mimetype?:String) : any;
export function textContent (node:HTMLElement,text?:String) : String;
export function replaceChildren (node:any,newChildren:HTMLElement) : any;
export function removeChildren (node:any) : number;
export function innerXML (node:HTMLElement) : String;
}
