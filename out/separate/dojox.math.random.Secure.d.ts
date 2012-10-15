module dojox.math.random{
export class Secure{
state : Object;
pool : Object;
pptr : number;
prng : Function;
h : any[];
destroy () : any;
nextBytes (byteArray:any[]) : any;
seedTime () : any;
_seed_int (x:any) : any;
}
}
