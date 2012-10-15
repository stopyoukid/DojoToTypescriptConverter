/// <reference path="Object.d.ts" />
/// <reference path="dijit.Dialog.d.ts" />
module dojox.image{
export class LightboxDialog extends dijit.Dialog {
inGroup : any[];
imgUrl : String;
adjust : bool;
modal : bool;
errorImg : any;
_animConnects : any[];
_vp : Object;
_lastGroup : any;
_index : Object;
_imageReady : bool;
_lastTitleSize : any;
_lastSize : any;
_currentSize : any;
_wasStyled : Object;
_showImageAnim : Object;
_loadingAnim : Object;
_showNavAnim : Object;
_ready (src:any) : any;
_nextImage () : any;
_prevImage () : any;
_loadImage () : any;
_prepNodes () : any;
_calcTitleSize () : any;
resizeTo (size:Object,forceTitle:any) : any;
_scaleToFit (size:Object) : Object;
_setImageSize (size:any) : any;
_showImage () : any;
_showNav () : any;
addImage (child:Object,group?:String) : any;
removeImage (child:dijit._Widget) : any;
removeGroup (group:any) : any;
_handleKey (e:any) : any;
_makeAnims () : any;
_onImageClick (e:any) : any;
}
}
