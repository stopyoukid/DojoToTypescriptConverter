module dojox.string.sprintf{
export class Formatter{
_re : any;
_zeros10 : String;
_spaces10 : String;
_mapped : bool;
_format : any;
_tokens : Object;
format (filler:any) : any;
formatInt (token:any) : any;
formatDouble (token:any) : any;
zeroPad (token:any,length:number) : any;
fitField (token:any) : any;
spacePad (token:any,length:number) : any;
}
}
