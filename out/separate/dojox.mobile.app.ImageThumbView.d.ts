/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile.app{
export class ImageThumbView extends dijit._WidgetBase {
items : any[];
urlParam : String;
labelParam : Object;
itemTemplate : String;
minPadding : number;
maxPerRow : Object;
maxRows : number;
thumbSize : String;
animationEnabled : Object;
selectedIndex : number;
cache : any[];
cacheMustMatch : bool;
clickEvent : String;
cacheBust : bool;
disableHide : bool;
_onLoadImages : Object;
visibleImages : Object;
_cacheCounter : number;
thumbNodes : Object;
_numRows : any;
padding : Object;
addThumb (item:any,url:any,index:any) : any;
handleImgLoad (event:any) : any;
hideCached () : any;
onSelect (item:any,index:any,items:any) : any;
_setAnimationEnabledAttr (value:any) : any;
_setItemsAttr (items:any) : any;
_getItemNode (node:any) : any;
_getItemNodeFromEvent (event:any) : any;
resize () : any;
render () : any;
setContainerHeight (amount:any) : any;
calcPadding () : any;
place (node:any,x:any,y:any) : any;
}
}
