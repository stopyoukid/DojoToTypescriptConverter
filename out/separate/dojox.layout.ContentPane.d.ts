/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.ContentPane.d.ts" />
module dojox.layout{
export class ContentPane extends dijit.layout.ContentPane {
adjustPaths : bool;
cleanContent : bool;
renderStyles : bool;
executeScripts : bool;
scriptHasHooks : bool;
ioMethod : any;
_contentSetterParams : Object;
onExecError (e:any) : any;
}
}
