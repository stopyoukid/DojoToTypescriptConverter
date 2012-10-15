/// <reference path="Object.d.ts" />
/// <reference path="dijit.layout.StackContainer.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
module dojox.layout{
export class RotatorContainer extends dijit.layout.StackContainer {
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
showTabs : bool;
transitionDelay : number;
transition : String;
transitionDuration : number;
autoStart : bool;
suspendOnHover : bool;
pauseOnManualChange : bool;
reverse : bool;
pagerId : String;
cycles : number;
pagerClass : String;
tabNode : any;
_stackController : any;
_subscriptions : any[];
_over : bool;
_timer : Object;
_playing : bool;
_setShowTabsAttr (value:any) : any;
_updatePager () : any;
_onMouseOver () : any;
_onMouseOut () : any;
_resetTimer () : any;
_cycle (next:bool) : any;
_manualChange () : any;
_play (skip:any) : any;
_pause () : any;
_state (playing:any) : any;
_transitionEnd () : any;
_fade (next:any,prev:any) : any;
_styleNode (node:HTMLElement,opacity:number,zIndex:number) : any;
}
}
