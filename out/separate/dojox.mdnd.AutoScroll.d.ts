module dojox.mdnd{
export class AutoScroll{
interval : number;
recursiveTimer : number;
marginMouse : number;
_html : any;
_v : Object;
_node : any;
_yMax : any;
_xMax : any;
_y : any;
_x : any;
_autoScrollActive : bool;
_timer : Object;
resizeHandler : Object;
init () : any;
getViewport () : any;
setAutoScrollNode (node:HTMLElement) : any;
setAutoScrollMaxPage () : any;
checkAutoScroll (e:any) : any;
_autoScrollDown () : any;
_autoScrollUp () : any;
_autoScrollRight () : any;
_autoScrollLeft (e:any) : any;
stopAutoScroll () : any;
destroy () : any;
}
}
