/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.AbstractItem.d.ts" />
module dojox.mobile{
export class ToolBarButton extends dojox.mobile.AbstractItem {
selected : bool;
_defaultColor : String;
_selColor : String;
iconNode : any;
onClick (e:any) : any;
}
}
