module dojox.wire{
export var _defaultWireClass : String;
export var _base : Object;
export function register (wireClass:Function,key:String) : any;
export function register (wireClass:String,key:String) : any;
export function _getClass (name:String) : Function;
export function create (args:Object) : Object;
export function isWire (wire:Object) : bool;
export function transfer (source:any,target:any,defaultObject?:Object,defaultTargetObject?:Object) : any;
export function transfer (source:any,target:Object,defaultObject?:Object,defaultTargetObject?:Object) : any;
export function transfer (source:Object,target:any,defaultObject?:Object,defaultTargetObject?:Object) : any;
export function transfer (source:Object,target:Object,defaultObject?:Object,defaultTargetObject?:Object) : any;
export function connect (trigger:Object,source:any,target:any) : any;
export function connect (trigger:Object,source:any,target:Object) : any;
export function connect (trigger:Object,source:Object,target:any) : any;
export function connect (trigger:Object,source:Object,target:Object) : any;
export function disconnect (connection:Object) : any;
}
