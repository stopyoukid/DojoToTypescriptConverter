module dojox.data.dom{
export function createDocument (str?:String,mimetype?:String) : any;
export function textContent (node:HTMLElement,text?:String) : String;
export function replaceChildren (node:any,newChildren:HTMLElement) : any;
export function removeChildren (node:any) : number;
export function innerXML (node:HTMLElement) : any;
}
