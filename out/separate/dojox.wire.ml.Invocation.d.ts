/// <reference path="Object.d.ts" />
/// <reference path="dojox.wire.ml.Action.d.ts" />
module dojox.wire.ml{
export class Invocation extends dojox.wire.ml.Action {
object : any;
method : any;
topic : any;
parameters : IArguments;
result : any;
error : any;
onComplete (result:any) : any;
onError (error:any) : any;
_getParameters (args:any[]) : any[];
}
}
