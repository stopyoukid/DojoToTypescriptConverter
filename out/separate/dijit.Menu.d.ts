/// <reference path="Object.d.ts" />
/// <reference path="dijit._MenuBase.d.ts" />
module dijit{
export class Menu extends dijit._MenuBase {
targetNodeIds : any;
contextMenuForWindow : bool;
leftClickToOpen : bool;
refocus : bool;
_openSubMenuKey : any;
_closeSubMenuKey : any;
_openTimer : Object;
_bindings : any[];
_onKeyPress (evt:any) : any;
_iframeContentWindow (iframe_el:any) : any;
_iframeContentDocument (iframe_el:any) : any;
bindDomNode (node:String) : any;
unBindDomNode (nodeName:String) : any;
_scheduleOpen (target?:HTMLElement,iframe?:HTMLElement,coords?:Object) : any;
_openMyself (args:any) : any;
getPlaceholders (label?:String) : any;
}
}
