/// <reference path="Object.d.ts" />
module dojox.atom.io.model{
export class Node{
name_space : any;
shortNs : any;
name : Object;
textContent : Object;
attributes : any[];
content : any[];
rawNodes : any[];
_objName : String;
buildFromDom (node:any) : any;
_saveAttributes (node:any) : any;
addAttribute (name:any,value:any) : any;
getAttribute (name:any) : any;
_getAttributeNames (node:any) : any;
addContent (content:any) : any;
}
}
