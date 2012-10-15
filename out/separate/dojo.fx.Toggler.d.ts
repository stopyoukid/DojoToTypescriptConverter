module dojo.fx{
export class Toggler{
node : HTMLElement;
showDuration : Date;
hideDuration : Date;
_showArgs : Object;
_showAnim : Object;
_hideArgs : Object;
_hideAnim : Object;
_isShowing : bool;
_isHiding : bool;
showFunc () : any;
hideFunc () : any;
show (delay?:number) : any;
hide (delay?:number) : any;
}
}
