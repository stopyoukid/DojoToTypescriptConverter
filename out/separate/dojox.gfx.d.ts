/// <reference path="Object.d.ts" />
module dojox.gfx{
export var _vectorFontCache : Object;
export var _svgFontCache : Object;
export var VectorText : Object;
export var getDefault : Object;
export var cm_in_pt : number;
export var mm_in_pt : number;
export var pathVmlRegExp : any;
export var pathSvgRegExp : any;
export var attach : Object;
export var canvas_attach : Object;
export var Matrix2D : any;
export var move : Object;
export var silverlight_attach : Object;
export var svg_attach : Object;
export var renderer : String;
export function normalizedLength (len:String) : number;
export function getVectorFont (url:String) : any;
export function normalizeColor (color:any) : any;
export function normalizeParameters (existed:Object,update:Object) : Object;
export function makeParameters (defaults:Object,update:Object) : Object;
export function formatNumber (x:number,addSpace?:bool) : String;
export function makeFontString (font:Object) : Object;
export function splitFontString (str:String) : Object;
export function px_in_pt () : number;
export function pt2px (len:number) : number;
export function px2pt (len:number) : number;
export function equalSources (a:any,b:any) : any;
export function switchTo (renderer:any) : any;
export function _hasClass (node:HTMLElement,classStr:String) : bool;
export function _addClass (node:HTMLElement,classStr:String) : any;
export function _removeClass (node:HTMLElement,classStr:String) : any;
export function decompose (matrix:any) : Object;
}
