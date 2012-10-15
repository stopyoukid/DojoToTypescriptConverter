/// <reference path="Object.d.ts" />
module dojo{
export class Deferred{
fired : number;
promise : Object;
results : any[];
addCallback (callback:Function) : any;
addErrback (errback:Function) : any;
addBoth (callback:Function) : any;
resolve () : any;
callback (value:any) : any;
reject () : any;
errback (error:any) : any;
progress (update:any) : any;
addCallbacks (callback?:Function,errback?:Function) : any;
then () : any;
cancel () : any;
}
}
