/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.TabController.d.ts" />
module dijit.layout{
export class ScrollingTabController extends dijit.layout.TabController {
useMenu : bool;
useSlider : bool;
tabStripClass : String;
_minScroll : number;
attributeMap : Object;
_postStartup : Object;
_selectedTab : Object;
_btnWidth : number;
_buttons : Object;
_dim : any;
_postResize : Object;
_anim : any;
_initButtons () : any;
_getTabsWidth () : any;
_enableBtn (width:any) : any;
resize (dim:any) : any;
_getScroll () : any;
_convertToScrollLeft (val:any) : any;
_getScrollBounds () : any;
_getScrollForSelectedTab () : any;
createSmoothScroll (x?:number) : any;
_getBtnNode (e:any) : any;
doSlideRight (e:any) : any;
doSlideLeft (e:any) : any;
doSlide (direction:number,node:HTMLElement) : any;
_setButtonClass (scroll:number) : any;
}
}
