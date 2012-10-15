module dojox.sql{
export var dbName : Object;
export var debug : any;
export var _base : Object;
export function _printDebugSQL (sql:any,args:any) : any;
export function _normalizeResults (rs:any) : any;
export function _needsEncrypt (sql:any) : any;
export function _needsDecrypt (sql:any) : any;
}
