/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.widget{
export class Pager extends dijit._Widget {
templateString : String;
templatePath : String;
widgetsInTemplate : bool;
_skipNodeCache : bool;
_earlyTemplatedStartup : bool;
_attachPoints : any;
_attachEvents : any[];
declaredClass : any;
_startupWidgets : Object;
_supportingWidgets : Object;
_templateCache : Object;
_stringRepl (tmpl:any) : any;
_fillContent (source:HTMLElement) : any;
_attachTemplateNodes (rootNode:HTMLElement,getAttrFunc?:Function) : any;
getCachedTemplate (templatePath:String,templateString?:String,alwaysUseString?:any) : any;
iconPrevious : String;
iconNext : String;
iconPage : Object;
iconPageActive : Object;
store : Object;
orientation : String;
statusPos : String;
pagerPos : String;
duration : number;
itemSpace : number;
resizeChildren : bool;
itemClass : String;
itemsPage : number;
items : any;
pagerContainerView : any;
pagerContainerPager : any;
_totalPages : Object;
iconWidth : number;
iconHeight : number;
iconsLoaded : number;
_iconConnects : any[];
_toScroll : any;
_currentPage : number;
_anim : Object;
_a11yStyle (e:any) : any;
_handleKey (e:any) : any;
_init (items:any) : any;
_renderPages () : any;
_renderPager () : any;
_renderStatus () : any;
_pagerSkip (page:any) : any;
_pagerNext () : any;
_pagerPrevious () : any;
onScrollEnd () : any;
}
}
