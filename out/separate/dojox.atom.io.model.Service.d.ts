/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.io.model.AtomItem.d.ts" />
module dojox.atom.io.model{
export class Service extends dojox.atom.io.model.AtomItem {
workspaces : any[];
href : any;
getCollection (url:String) : any;
}
}
