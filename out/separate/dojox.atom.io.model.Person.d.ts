/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.io.model.Node.d.ts" />
module dojox.atom.io.model{
export class Person extends dojox.atom.io.model.Node {
extensions : any[];
author : String;
contributor : String;
personType : any;
email : String;
uri : String;
_postBuild () : any;
accept (tag:any) : any;
}
}
