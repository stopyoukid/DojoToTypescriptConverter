/// <reference path="Object.d.ts" />
/// <reference path="dojo.html._ContentSetter.d.ts" />
module dojox.html{
export class _ContentSetter extends dojo.html._ContentSetter {
adjustPaths : bool;
referencePath : String;
renderStyles : bool;
executeScripts : bool;
scriptHasHooks : bool;
scriptHookReplacement : Object;
_styleNodes : any[];
_styles : any[];
_code : any;
_renderStyles (styles:any) : any;
}
}
