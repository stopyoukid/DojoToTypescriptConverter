/// <reference path="Object.d.ts" />
/// <reference path="dijit.Tooltip.d.ts" />
module dojox.widget{
export class DynamicTooltip extends dijit.Tooltip {
hasLoaded : bool;
href : String;
preventCache : bool;
_connectNodes : any;
_setLoadingLabel () : any;
_setHrefAttr (href:String) : any;
loadContent (node:any) : any;
refresh () : any;
}
}
