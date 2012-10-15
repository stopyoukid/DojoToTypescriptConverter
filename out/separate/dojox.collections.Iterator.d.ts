/// <reference path="Object.d.ts" />
module dojox.collections{
export class Iterator{
element : Object;
atEnd () : bool;
get () : any;
map (fn:Function,scope?:any) : any;
reset () : any;
}
}
