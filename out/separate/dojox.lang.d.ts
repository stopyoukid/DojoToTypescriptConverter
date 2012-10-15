/// <reference path="Object.d.ts" />
module dojox.lang{
export var lettableWin : any;
export var ReadOnlyProxy : Object;
export var typed : any;
export function observable (wrapped:Object,onRead:Function,onWrite:Function,onInvoke:Function) : any;
export function makeObservable (onRead:Function,onWrite:Function,onInvoke:Function,hiddenFunctions:Object) : any;
}
