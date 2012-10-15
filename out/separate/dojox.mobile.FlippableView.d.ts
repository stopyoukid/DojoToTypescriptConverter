/// <reference path="Object.d.ts" />
/// <reference path="dojox.mobile.View.d.ts" />
/// <reference path="dojox.mobile._ScrollableMixin.d.ts" />
module dojox.mobile{
export class FlippableView extends dojox.mobile.View {
fixedHeader : String;
fixedFooter : String;
isLocalFooter : Object;
scrollDir : String;
weight : number;
onTouchStart (e:any) : any;
_nextView (node:any) : any;
_previousView (node:any) : any;
scrollTo (to:Object) : any;
slideTo (to:Object,duration:number,easing:String) : any;
onFlickAnimationEnd (e:any) : any;
}
}
