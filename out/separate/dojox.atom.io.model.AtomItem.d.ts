/// <reference path="Object.d.ts" />
/// <reference path="dojox.atom.io.model.Node.d.ts" />
module dojox.atom.io.model{
export class AtomItem extends dojox.atom.io.model.Node {
_accepts : Object;
extensions : Object;
authors : Object;
contributors : Object;
links : Object;
categories : Object;
icon : Object;
id : Object;
logo : Object;
xmlBase : Object;
rights : Object;
subtitle : Object;
updated : Object;
published : Object;
issued : Object;
modified : Object;
entries : Object;
ATOM_URI : any;
name_spaces : Object;
accept (tag:any) : any;
_postBuild () : any;
addNamespace (fullName:any,shortName:any) : any;
addAuthor (name:String,email:String,uri:String) : any;
addContributor (name:String,email:String,uri:String) : any;
addLink (href:String,rel:String,hrefLang:String,title:String,type:String) : any;
removeLink (href:String,rel:String) : any;
removeBasicLinks () : any;
addCategory (scheme:String,term:String,label:String) : any;
getCategories (scheme:String) : any;
removeCategories (scheme:String,term:String) : any;
setTitle (str:String,type:String) : any;
addExtension (name_space:String,name:String,attributes:any[],content:String,shortNS:String) : any;
getExtensions (name_space:String,name:String) : any;
removeExtensions (name_space:String,name:String) : any;
destroy () : any;
}
}
