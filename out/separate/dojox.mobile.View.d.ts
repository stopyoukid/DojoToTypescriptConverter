/// <reference path="Object.d.ts" />
/// <reference path="dijit._WidgetBase.d.ts" />
module dojox.mobile{
export class View extends dijit._WidgetBase {
selected : bool;
keepScrollPos : bool;
_visible : bool;
_context : any;
_method : any;
_moveTo : any;
_dir : any;
_transition : any;
_arguments : any[];
_args : any[];
_dummyNode : Object;
toNode : Object;
onStartView () : any;
onBeforeTransitionIn (moveTo:any,dir:any,transition:any,context:any,method:any) : any;
onAfterTransitionIn (moveTo:any,dir:any,transition:any,context:any,method:any) : any;
onBeforeTransitionOut (moveTo:any,dir:any,transition:any,context:any,method:any) : any;
onAfterTransitionOut (moveTo:any,dir:any,transition:any,context:any,method:any) : any;
_saveState (moveTo:any,dir:any,transition:any,context:any,method:any) : any;
performTransition (moveTo:String,dir:number,transition:String,context:Object,method:String) : any;
_doTransition (fromNode:any,toNode:any,transition:any,dir:any) : any;
onAnimationStart (e:any) : any;
onAnimationEnd (e:any) : any;
invokeCallback () : any;
getShowingView () : any;
show () : any;
addChild (widget:any) : any;
wakeUp (node:any) : any;
}
}
