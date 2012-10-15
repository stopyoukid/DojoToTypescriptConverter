/// <reference path="Object.d.ts" />
module dojox.timing{
export class Sequence{
_defsResolved : any[];
_goOnPause : number;
_running : bool;
_curId : number;
go (defs:any[],doneFunction?:Function) : any;
_go () : any;
goOn () : any;
stop () : any;
}
}
