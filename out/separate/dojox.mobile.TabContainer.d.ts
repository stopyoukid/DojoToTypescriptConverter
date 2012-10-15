/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class TabContainer extends dijit._WidgetBase {
iconBase : String;
iconPos : String;
fixedHeader : bool;
tabHeaderNode : Object;
_selectedPane : any;
createTabButtons () : any;
selectTab (tab:HTMLElement) : any;
onTabClick (e:any) : any;
}
}
