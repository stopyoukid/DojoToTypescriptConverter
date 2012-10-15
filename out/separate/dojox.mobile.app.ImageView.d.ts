/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.app._Widget.d.ts" />
module dojox.mobile.app{
export class ImageView extends dojox.mobile.app._Widget {
zoom : number;
zoomCenterX : number;
zoomCenterY : number;
maxZoom : number;
autoZoomLevel : number;
disableAutoZoom : bool;
disableSwipe : bool;
autoZoomEvent : String;
_leftImg : HTMLElement;
_rightImg : HTMLElement;
_leftSmallImg : Object;
_rightSmallImg : Object;
size : Object;
downX : Object;
downY : Object;
panX : number;
panY : number;
_moveDir : any;
_animCallback : any;
_anim : Object;
_updateAnimatedPan : Object;
_onAnimPanEnd : Object;
dispWidth : number;
dispHeight : number;
_updateAnimatedZoom : Object;
handleLoad : Object;
isAnimating () : any;
handleDragEnd () : any;
handleFlick (event:any) : any;
moveTo (direction:any) : any;
_switchImage (toImg:any,fromImg:any) : any;
_animPanTo (to:any,easing:any,duration:any,callback:any) : any;
onChange (direction:any) : any;
zoomTo (centerX:any,centerY:any,zoom:any) : any;
render () : any;
_renderImg (smallImg:any,largeImg:any,panDir:any) : any;
_setZoomAttr (amount:any) : any;
_setZoomCenterXAttr (value:any) : any;
_setZoomCenterYAttr (value:any) : any;
_setZoomCenterAttr (value:any) : any;
_setAnimatedZoomAttr (amount:any) : any;
_setCenterUrlAttr (urlOrObj:any) : any;
_setLeftUrlAttr (urlOrObj:any) : any;
_setRightUrlAttr (urlOrObj:any) : any;
_setImage (name:any,urlOrObj:any) : any;
onLoad (type:String,url:String,isSmall:bool) : any;
}
}
