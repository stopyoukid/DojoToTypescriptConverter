/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.View.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile._ScrollableMixin.d.ts" />
module dojox.mobile{
export class ScrollableView extends dojox.mobile.View {
fixedHeader : String;
fixedFooter : String;
isLocalFooter : Object;
flippable : bool;
fixedHeaderHeight : any;
fixedFooterHeight : any;
reparent () : any;
findAppBars () : any;
_checkFixedBar (node:HTMLElement) : any;
}
}
