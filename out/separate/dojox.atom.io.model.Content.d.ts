/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.io.model.Node.d.ts" />
module dojox.atom.io.model{
export class Content extends dojox.atom.io.model.Node {
value : Object;
type : String;
scheme : any;
term : any;
tagName : any;
src : any;
xmlLang : any;
HTML : String;
TEXT : String;
XHTML : String;
XML : String;
_useTextContent : String;
_postBuild () : any;
}
}
