/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.io.model.AtomItem.d.ts" />
module dojox.atom.io.model{
export class Entry extends dojox.atom.io.model.AtomItem {
feedUrl : Object;
getEditHref () : String;
setEditHref (url:any) : any;
}
}
