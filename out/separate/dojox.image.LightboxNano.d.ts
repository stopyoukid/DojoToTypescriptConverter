module dojox.image{
export class LightboxNano{
href : String;
duration : number;
preloadDelay : number;
_connects : any[];
_loadingNode : bool;
_img : Object;
_bg : Object;
_node : Object;
destroy () : any;
_createDiv (cssClass:String,refNode:HTMLElement,display:bool) : HTMLElement;
_load (e:any) : any;
_hideLoading () : any;
_show () : any;
_sizeBg () : any;
_key (e:any) : any;
_coords (s:Object,e:Object) : Object;
_hide () : any;
_reset () : any;
_anim (node:HTMLElement,args:Object,onEnd:Function) : any;
show (args?:Object) : any;
}
}
