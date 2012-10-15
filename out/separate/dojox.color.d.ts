/// <reference path="Object.d.ts" />
module dojox.color{
export var Colorspace : Object;
export var blend : any;
export var fromRgb : any;
export var fromHex : any;
export var fromArray : any;
export var fromString : any;
export var greyscale : any;
export var _base : Object;
export function fromXYZ (xyz:Object,kwArgs?:Object) : any;
export function fromCmy (cyan:Object,magenta:number,yellow:number) : any;
export function fromCmy (cyan:any[],magenta:number,yellow:number) : any;
export function fromCmy (cyan:number,magenta:number,yellow:number) : any;
export function fromCmyk (cyan:Object,magenta:number,yellow:number,black:number) : any;
export function fromCmyk (cyan:any[],magenta:number,yellow:number,black:number) : any;
export function fromCmyk (cyan:number,magenta:number,yellow:number,black:number) : any;
export function fromHsl (hue:Object,saturation:number,luminosity:number) : any;
export function fromHsl (hue:any[],saturation:number,luminosity:number) : any;
export function fromHsl (hue:number,saturation:number,luminosity:number) : any;
export function fromHsv (hue:Object,saturation:number,value:number) : any;
export function fromHsv (hue:any[],saturation:number,value:number) : any;
export function fromHsv (hue:number,saturation:number,value:number) : any;
}
