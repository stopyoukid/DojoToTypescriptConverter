module dojox.gfx3d.lighting{
export function black () : any;
export function white () : any;
export function toStdColor (c:any) : any;
export function fromStdColor (c:any) : any;
export function scaleColor (s:any,c:any) : any;
export function addColor (a:any,b:any) : any;
export function multiplyColor (a:any,b:any) : any;
export function saturateColor (c:any) : any;
export function mixColor (c1:any,c2:any,s:any) : any;
export function diff2Color (c1:any,c2:any) : any;
export function length2Color (c:any) : any;
export function dot (a:any,b:any) : any;
export function scale (s:any,v:any) : any;
export function add (a:any,b:any) : any;
export function saturate (v:any) : any;
export function length (v:any) : any;
export function normalize (v:any) : any;
export function faceforward (n:any,i:any) : any;
export function reflect (i:any,n:any) : any;
export function diffuse (normal:any,lights:any) : any;
export function specular (normal:any,v:any,roughness:any,lights:any) : any;
export function phong (normal:any,v:any,size:any,lights:any) : any;
}
