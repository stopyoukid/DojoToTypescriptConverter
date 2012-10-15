/// <reference path="Object.d.ts" />
module dojox.gfx.utils{
export var _gfxSvgProxy : Object;
export var _initSvgSerializerDeferred : Object;
export function forEach (object:any,f:Function,o?:Object) : any;
export function forEach (object:any,f:String,o?:Object) : any;
export function forEach (object:any,f:any[],o?:Object) : any;
export function serialize (object:any) : any;
export function toJson (object:any,prettyPrint?:bool) : String;
export function deserialize (parent:any,object:any) : any;
export function fromJson (parent:any,json:String) : any;
export function toSvg (surface:any) : any;
export function _svgSerializerInitialized () : any;
export function _initSvgSerializer () : any;
export function _innerXML (node:HTMLElement) : String;
export function _cleanSvg (svg:any) : any;
}
