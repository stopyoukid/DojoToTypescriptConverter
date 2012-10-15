/// <reference path="Object.d.ts" />
module dojox.encoding.compression{
export class Splay{
up : Object;
left : Object;
right : Object;
reset () : any;
splay (i:any) : any;
encode (value:any,stream:any) : any;
decode (stream:any) : any;
}
}
