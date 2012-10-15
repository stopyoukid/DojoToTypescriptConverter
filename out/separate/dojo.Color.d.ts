module dojo{
export class Color{
r : number;
g : number;
b : number;
a : number;
_set (r:any,g:any,b:any,a:any) : any;
setColor (color:any[]) : any;
sanitize () : any;
toRgb () : any[];
toRgba () : any[];
toHex () : String;
toCss (includeAlpha?:bool) : String;
}
}
