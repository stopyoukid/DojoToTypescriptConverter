/// <reference path="Object.d.ts" />
/// <reference path="dojo.Deferred.d.ts" />
module dojo.io.script{
export var _deadScripts : any[];
export var _counter : number;
export function get (args:any) : any;
export function attach (id:String,url:String,frameDocument?:any) : any;
export function remove (id:String,frameDocument?:any) : any;
export function _makeScriptDeferred (args:Object) : any;
export function _deferredCancel (dfd:dojo.Deferred) : any;
export function _deferredOk (dfd:dojo.Deferred) : any;
export function _deferredError (error:any,dfd:dojo.Deferred) : any;
export function _addDeadScript (ioArgs:Object) : any;
export function _validCheck (dfd:dojo.Deferred) : any;
export function _ioCheck (dfd:dojo.Deferred) : any;
export function _resHandle (dfd:dojo.Deferred) : any;
export function _canAttach (ioArgs:Object) : any;
}
