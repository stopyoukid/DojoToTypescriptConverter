module dojox.lang.aspect{
export function cflow (instance:Object,method?:String) : bool;
export function cflow (instance:Object,method?:any) : bool;
export function cflow (instance:Object,method?:any[]) : bool;
export function counter () : Object;
export function memoizer (keyMaker?:Function) : Object;
export function memoizerGuard (method?:String) : Object;
export function memoizerGuard (method?:any[]) : Object;
export function profiler (title?:String) : Object;
export function timer (name?:String) : Object;
export function tracer (grouping:bool) : Object;
export function advise (obj:Object,method:String,advice:Object) : Object;
export function advise (obj:Object,method:String,advice:Function) : Object;
export function advise (obj:Object,method:String,advice:any[]) : Object;
export function advise (obj:Object,method:any,advice:Object) : Object;
export function advise (obj:Object,method:any,advice:Function) : Object;
export function advise (obj:Object,method:any,advice:any[]) : Object;
export function advise (obj:Object,method:any[],advice:Object) : Object;
export function advise (obj:Object,method:any[],advice:Function) : Object;
export function advise (obj:Object,method:any[],advice:any[]) : Object;
export function adviseRaw (obj:Object,methods:any[],advices:any[]) : Object;
export function unadvise (handle:Object) : any;
export function getContext () : Object;
export function getContextStack () : any[];
export function proceed () : any;
}
