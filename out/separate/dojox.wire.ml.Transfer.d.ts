/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.ml.Action.d.ts" />
module dojox.wire.ml{
export class Transfer extends dojox.wire.ml.Action {
source : any;
sourceStore : any;
sourceAttribute : any;
sourcePath : any;
type : any;
converter : any;
delimiter : String;
target : any;
targetStore : any;
targetAttribute : any;
targetPath : any;
_getWire (which:String) : Object;
}
}
