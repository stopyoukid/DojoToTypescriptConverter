/// <reference path="Object.d.ts" />
module dojox.uuid{
export var NIL_UUID : String;
export var _ourVariantLookupTable : any;
export var _base : Object;
export function assert (booleanValue:bool,message?:String) : any;
export function generateNilUuid () : String;
export function isValid (uuidString:String) : bool;
export function getVariant (uuidString:String) : any;
export function getVersion (uuidString:String) : any;
export function getNode (uuidString:String) : any;
export function getTimestamp (uuidString:String,returnType?:String) : any;
export function generateRandomUuid () : any;
}
